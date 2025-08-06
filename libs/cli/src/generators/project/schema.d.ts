export type ProjectType = "lib" | "api" | "prisma";
export interface ProjectGeneratorSchema {
  name: string;
  type: ProjectType;
}
