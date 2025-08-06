import type { ClassType } from "../common/class-type.js";
import type {
  CommonPropertyOptions,
  DefaultValueOptions,
} from "./common-property-options.js";

export type ObjectPropertyOptions = {
  type: "object";
  target: ()=> ClassType
} & CommonPropertyOptions &
  DefaultValueOptions<object>;
