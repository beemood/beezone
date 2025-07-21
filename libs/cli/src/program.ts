import { program } from 'commander';
import { HelloCommand } from './commands/hello/command';

program.name('beezone').description('beezone cli tool').version('0.0.1');

HelloCommand.bind(program);
