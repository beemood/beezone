import ignores from '././rules/ignores.mjs';
import consistentTypeImports from './rules/consistent-type-imports.mjs';
import dependencyChecks from './rules/dependency-checks.mjs';
import enforceModuleBoundaries from './rules/enforce-module-boundaries.mjs';
import noShadow from './rules/no-shadow.mjs';

export default [
  ignores,
  consistentTypeImports,
  dependencyChecks,
  enforceModuleBoundaries,
  noShadow,
];
