import consistentTypeImports from './rules/consistent-type-imports.mjs';
import dependencyChecks from './rules/dependency-checks.mjs';
import enforceModuleBoundaries from './rules/enforce-module-boundaries.mjs';
import ignores from './rules/ignores.mjs';
import noShadow from './rules/no-shadow.mjs';
import spellChecker from './rules/spell-checker.mjs';

export default [
  consistentTypeImports,
  dependencyChecks,
  enforceModuleBoundaries,
  ignores,
  noShadow,
  spellChecker,
];
