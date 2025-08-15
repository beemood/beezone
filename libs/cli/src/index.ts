// @index(['./**/*.ts', '!./**/{*.{d,spec},program}.ts'], f => `export * from '${f.path}.js'`)
export * from './commands/bunle-json-schema.js';
export * from './commands/hello.command.js';
export * from './commands/prisma-schema.js';
export * from './commands/typify-json-schema.js';
export * from './generators/project/project.js';

