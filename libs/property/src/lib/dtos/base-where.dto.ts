import { DateFilterProperty } from '../special/date-filter-property.js';
import { NumberFilterProperty } from '../special/number-filter-property.js';
import { DateFilterDto } from './date-filter.dto.js';
import { NumberFilterDto } from './number-filter.dto.js';

export class BaseWhereDto {
  @NumberFilterProperty() id: NumberFilterDto;
  @DateFilterProperty() createdAt: DateFilterDto;
  @DateFilterProperty() updatedAt: DateFilterDto;
  @DateFilterProperty() deletedAt: DateFilterDto;
}
