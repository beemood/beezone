import { program } from 'commander';
import { bindBundleJsonSchemaCommand } from './commands/bunle-json-schema';
import { bindHelloCommand } from './commands/hello.command';

program.name('@beemood/cli').description('Beemood cli');

bindHelloCommand(program);
bindBundleJsonSchemaCommand(program);

program.parse();
