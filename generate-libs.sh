#!/usr/bin/env bash
npx nx g @nx/js:library libs/property --importPath=@beezone/property
npx nx g @nx/js:library libs/fs --importPath=@beezone/fs
npx nx g @nx/js:library libs/names --importPath=@beezone/names
npx nx g @nx/js:library libs/nest --importPath=@beezone/nest
npx nx g @nx/js:library libs/prisma --importPath=@beezone/prisma
npx nx g @nx/js:library libs/types --importPath=@beezone/types
npx nx g @nx/js:library libs/crypto --importPath=@beezone/crypto


