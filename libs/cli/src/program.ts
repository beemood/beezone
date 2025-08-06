import { program } from "commander";
import { bindHelloCommand } from "./commands/hello.command";

program.name("@beemood/cli").description("Beemood cli");

bindHelloCommand(program);

program.parse();
