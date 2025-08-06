import { Any } from "./any.js";

export interface ClassType<T = Any> {
  new (...args: any): T;
}
