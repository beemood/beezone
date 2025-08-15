export type PrismaClientOptions = {
  generatedClientPath: string;
};

export function prismaClient(options: PrismaClientOptions) {
  return [
    'generator client {',
    '  provider = "prisma-client-js"',
    `  output   = "${options.generatedClientPath}"`,
    '}',
  ].join('\n');
}
