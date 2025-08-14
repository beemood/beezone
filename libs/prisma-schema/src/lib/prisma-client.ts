export type PrismaClientOptions = {
  output: string;
};

export function prismaClient(options: PrismaClientOptions) {
  return [
    'generator client {',
    '  provider = "prisma-client-js"',
    `  output   = "${options.output}"`,
    '}',
  ].join('\n');
}
