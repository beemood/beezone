import { program } from 'commander';
import { bindBundleJsonSchemaCommand } from './commands/bunle-json-schema';
import { bindHelloCommand } from './commands/hello.command';
import { bindPrismaSchemaCommand } from './commands/prisma-schema';
import { bindTypifyJsonSchemaCommand } from './commands/typify-json-schema';

program.name('@beemood/cli').description('Beemood cli').version('0.0.15');

bindHelloCommand(program);

bindBundleJsonSchemaCommand(program);

bindTypifyJsonSchemaCommand(program);

bindPrismaSchemaCommand(program);

program.parse();
