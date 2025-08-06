import {
  CommonPropertyOptions,
  DefaultValueOptions,
} from "./common-property-options.js";

export type BooleanPropertyOptions = {
  type: "boolean";
} & CommonPropertyOptions &
  DefaultValueOptions<boolean>;
