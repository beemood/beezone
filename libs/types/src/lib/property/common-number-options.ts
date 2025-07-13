import { NumberFormat } from './number-format.js';

export type CommonNumberOptions = {
  minimum?: number;
  maximum?: number;
  format?: NumberFormat;

  moreThanProperty?: string;
  lessThanProperty?: string;
};
