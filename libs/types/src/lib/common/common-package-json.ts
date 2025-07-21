export type CommonPackageJson = {
  name: string;
  description: string;
  version: string;
  publishConfig?: {
    access: string;
    tag: string;
  };
  homepage: string;
  icon: string;
  author: {
    email: string;
    name: string;
    url: string;
  };
  keywords: string[];
  peerDependencies: Record<string, string>;
  dependencies: Record<string, string>;
  devDependencies: Record<string, string>;
};
