import { BooleanPropertyOptions } from "./boolean-property-options.js";
import { DatePropertyOptions } from "./date-property-options.js";
import {
    IntegerPropertyOptions,
    NumberPropertyOptions,
} from "./number-property-options.js";
import { ObjectPropertyOptions } from "./object-property-options.js";
import { StringPropertyOptions } from "./string-property-options.js";

export type PrimitivePropertyOptions =
  | StringPropertyOptions
  | NumberPropertyOptions
  | IntegerPropertyOptions
  | DatePropertyOptions
  | BooleanPropertyOptions
  | ObjectPropertyOptions;
