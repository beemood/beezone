import { EmptyError } from '@beezone/errors';
import { readdir, type DirectoryStat } from '@beezone/fs';
import { fileName, modelName } from '@beezone/is';
import type { ModelSchema, Names } from '@beezone/types';

export class ModelsManager {
  protected readonly map = new Map<Names, ModelSchema>();
  constructor(protected readonly directories: DirectoryStat<ModelSchema>[]) {
    this.mapToModels(this.directories);
    this.resolveExtends();
  }

  static async readModels(root: string) {
    return await readdir(root, { jsonParseError: 'ignore', mediaType: 'yaml' });
  }

  protected mapToModels(directories: DirectoryStat<ModelSchema>[]) {
    for (const d of directories) {
      if (d.isFile) {
        if (!d.content) {
          throw new EmptyError(`${d.path} is empty!`);
        }
        const name = modelName(fileName(d.path));
        this.map.set(name, d.content);
      } else if (d.isDirectory) {
        if (d.children) {
          this.mapToModels(d.children);
        }
      }
    }
  }

  protected resolveExtends() {
    for (const [key, value] of this.map) {
      if (value.extends) {
        for (const e of value.extends) {
          const extensions = this.map.get(e);

          if (extensions?.properties) {
            if (!value.properties) {
              value.properties = {};
            }
            value.properties = {
              ...value.properties,
              ...extensions.properties,
            };
          }

          if (extensions?.relations) {
            if (!value.relations) {
              value.relations = {};
            }
            value.relations = { ...value.relations, ...extensions.relations };
          }
        }
      }
    }
  }

  get() {
    return this.map;
  }
}
