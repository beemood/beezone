#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync } from 'fs';

(() => {
  if (existsSync('dist/package.json')) {
    return;
  }
  execSync(`npx prisma generate`);
})();
