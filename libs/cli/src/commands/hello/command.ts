import { Command } from 'commander';

export class HelloCommand {
  static NAME = 'hello';
  static DESCRIPTION = 'Hello command';

  username: string;

  static handler(options: HelloCommand) {
    console.log(`Hello, ${options.username}`);
  }

  static bind(program: Command) {
    program
      .command(HelloCommand.NAME)
      .name(this.NAME)
      .description(this.DESCRIPTION)
      .requiredOption(`-u, --username <string> Username`)
      .action(this.handler);
  }
}

export type HelloCommandOptions = {
  username: string;
};
