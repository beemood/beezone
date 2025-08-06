import consistentTypeImports from "./rules/consistent-type-imports.mjs";
import dependencyChecks from "./rules/dependency-checks.mjs";
import enforceModuleBoundaries from "./rules/enforce-module-boundaries.mjs";
import noShadow from "./rules/no-shadow.mjs";
import spellChecker from "./rules/spell-checker.mjs";
import ignores from "././rules/ignores.mjs";

export default [
  ignores,
  consistentTypeImports,
  dependencyChecks,
  enforceModuleBoundaries,
  noShadow,
  spellChecker,
];
