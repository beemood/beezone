import { Command } from "commander";

export type HelloCommandOptions = {
  name: string;
};
export function helloCommandHandler(options: HelloCommandOptions) {
  console.log(`Hello, ${options.name}`);
}

export function bindHelloCommand(program: Command) {
  program
    .command("hello")
    .requiredOption("-n,--name <string>, What is your name?")
    .action(helloCommandHandler);
}
