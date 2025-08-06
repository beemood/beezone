import { ArrayPropertyOptions } from "./array-property-options.js";
import { PrimitivePropertyOptions } from "./primitive-property-options.js";

export type PropertyOptions =
  | PrimitivePropertyOptions
  | ArrayPropertyOptions<PrimitivePropertyOptions>;
