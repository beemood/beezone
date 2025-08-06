import {
  CommonPropertyOptions,
  DefaultValueOptions,
} from "./common-property-options.js";

export type NumberFormat = "fraction" | "percent";
export type IntegerFormat = "rate" | "percent";

export type CommonNumberOptions = {
  minimum?: number;
  maximum?: number;
} & CommonPropertyOptions &
  DefaultValueOptions<number>;

export type NumberPropertyOptions = {
  type: "number";
  format?: NumberFormat;
} & CommonNumberOptions &
  CommonPropertyOptions;

export type IntegerPropertyOptions = {
  type: "integer";
  format?: IntegerFormat;
} & CommonNumberOptions;
