import { existsSync } from 'fs';
import { rm } from 'fs/promises';
import { generate } from './generate.mjs';
import { seed } from './seed.mjs';

if (!existsSync('dist/package.json')) {
  (async () => {
    await generate();

    try {
      await seed();
    } catch (err) {
      await rm('dist', { recursive: true });
      throw new Error('Could not seed the database!', { cause: err });
    }
  })();
}
