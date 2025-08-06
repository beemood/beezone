import type { BooleanPropertyOptions } from "./boolean-property-options.js";
import type { DatePropertyOptions } from "./date-property-options.js";
import type {
    IntegerPropertyOptions,
    NumberPropertyOptions,
} from "./number-property-options.js";
import type { ObjectPropertyOptions } from "./object-property-options.js";
import type { StringPropertyOptions } from "./string-property-options.js";

export type PrimitivePropertyOptions =
  | StringPropertyOptions
  | NumberPropertyOptions
  | IntegerPropertyOptions
  | DatePropertyOptions
  | BooleanPropertyOptions
  | ObjectPropertyOptions;
