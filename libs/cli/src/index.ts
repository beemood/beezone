// @index(['./**/*.ts', '!./**/{*.{d,spec},program}.ts'], f => `export * from '${f.path}.js'`)
export * from "./commands/hello.command.js";
export * from "./generators/project/project.js";
