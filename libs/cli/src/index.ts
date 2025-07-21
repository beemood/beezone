// @index(['./**/*.ts', '!./**/*.{spec,test}.ts', '!./**/program.ts'], f => `export * from '${f.path}'`)
export * from './commands/hello/command';
export * from './executors/update-content/schema.d';
export * from './executors/update-content/update-content';
export * from './executors/update-version/schema.d';
export * from './executors/update-version/update-version';
export * from './generators/project/project';
export * from './generators/project/schema.d';
export * from './plugins/build/plugin';
export * as doc from './plugins/doc/plugin';
export * as serve from './plugins/serve/plugin';
export * as updateContent from './plugins/update-content/plugin';
export * as updateVersion from './plugins/update-version/plugin';

