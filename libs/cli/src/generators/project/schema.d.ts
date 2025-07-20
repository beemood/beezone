export type SubProjectType = 'lib' | 'cli' | 'api' | 'db';

export interface ProjectGeneratorSchema {
  name: string;
  projectType: SubProjectType;
}
