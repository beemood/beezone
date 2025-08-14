/* eslint-disable spellcheck/spell-checker */
export function prismaDatabaseConfiguration(projectName: string) {
  return `
    generator client {
      provider = "prisma-client-js"
      output   = "../node_modules/${projectName}"
    }
    
    datasource db {
      provider = "postgresql"
      url      = env("DATABASE_URL")
    }`;
}
