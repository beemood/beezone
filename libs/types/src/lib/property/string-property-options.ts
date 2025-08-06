import type {
  CommonPropertyOptions,
  DefaultValueOptions,
} from "./common-property-options.js";

export type StringFormat = "email" | "password" | "date";

export type GeneratedStringType = "uuid";

export type StringPropertyOptions = {
  type: "string";
  minLength?: number;
  maxLength?: number;
  format?: StringFormat;
  generated?: GeneratedStringType;
  isIn?: string[];
  isNotIn?: string[];
} & CommonPropertyOptions &
  DefaultValueOptions<string>;
