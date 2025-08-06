import {
  IntegerPropertyOptions,
  NumberPropertyOptions,
} from "./number-property-options.js";
import { StringPropertyOptions } from "./string-property-options.js";

export type PropertyOptions =
  | StringPropertyOptions
  | NumberPropertyOptions
  | IntegerPropertyOptions;
