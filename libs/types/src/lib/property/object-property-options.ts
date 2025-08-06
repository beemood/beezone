import { ClassType } from "../common/class-type.js";
import {
  CommonPropertyOptions,
  DefaultValueOptions,
} from "./common-property-options.js";

export type ObjectPropertyOptions = {
  type: "object";
  target: ()=> ClassType
} & CommonPropertyOptions &
  DefaultValueOptions<Object>;
