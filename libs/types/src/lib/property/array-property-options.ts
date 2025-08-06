import {
  CommonPropertyOptions,
  DefaultValueOptions,
} from "./common-property-options.js";

export type ArrayPropertyOptions<S> = {
  type: "array";
  items: S;

  maxSize?: number;
  minSize?: number;
} & CommonPropertyOptions &
  DefaultValueOptions<any[]>;
