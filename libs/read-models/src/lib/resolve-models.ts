import type { ModelSchema, Names } from '@beezone/types';

export function resolveModels(map: Map<Names, ModelSchema>) {
  map.forEach((value, key, mapValue) => {
    value.name = key;

    if (value.extends) {
      for (const e of value.extends) {
        const extendedModel = mapValue.get(e);
        value.properties = {
          ...extendedModel?.properties,
          ...value.properties,
        };
        value.relations = {
          ...value.relations,
          ...extendedModel?.relations,
        };

        delete value.extends;
      }
    }
  });

  return map;
}
