import { execSync } from 'child_process';
import { existsSync } from 'fs';

export async function generate() {
  if (existsSync('dist/package.json')) {
    return;
  }
  execSync(
    `npx prisma migrate reset --force && npx prisma migrate dev --name dev`
  );
}
