// @index(['./**/*.ts', '!./**/*.{spec,test}.ts'], f => `export * from '${f.path}.js'`)
export * from './executors/update-content/schema.d.js';
export * from './executors/update-content/update-content.js';
export * from './executors/update-version/update-version-schema.d.js';
export * from './executors/update-version/update-version.js';
export * from './generators/project/project.js';
export * from './generators/project/schema.d.js';
export * as doc from './plugins/doc/plugin.js';
export * as serve from './plugins/serve/plugin.js';
export * as updateContent from './plugins/update-content/plugin.js';
export * as updateVersion from './plugins/update-version/plugin.js';

