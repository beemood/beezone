export function prismaDatasource() {
  return [
    'datasource db {',
    '  provider = "postgresql"',
    '  url      = env("DATABASE_URL")',
    '}',
  ].join('\n');
}
