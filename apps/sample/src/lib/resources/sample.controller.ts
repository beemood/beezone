import {
  DeleteOneById,
  FindMany,
  FindOneById,
  ResourceController,
  SaveOne,
  UpdateOneById,
  Query,
  Body,
} from '@beezone/nest';
import { InjectRepository } from '@beezone/prisma-client';
import type { Prisma } from '@beezone/sample-db';
import { QueryManySampleDto } from './dto/query-many-sample.dto.js';
import type { ResponseQuerySampleDto } from './dto/response-query-sample.dto.js';
import { ParamId } from '@beezone/nest';
import type { CreateSampleDto } from './dto/create-sample.dto.js';
import type { UpdateSampleDto } from './dto/update-sample.dto.js';

@ResourceController()
export class SampleController {
  constructor(
    @InjectRepository('sample') protected readonly repo: Prisma.SampleDelegate
  ) {}

  @FindMany()
  findMany(@Query(() => QueryManySampleDto) query: QueryManySampleDto) {
    console.log(query);
    return this.repo.findMany(query);
  }

  @FindOneById()
  findOneById(@ParamId() id: number, @Query() query: ResponseQuerySampleDto) {
    return this.repo.findUnique({ ...query, where: { id } });
  }

  @SaveOne()
  saveOne(@Body() data: CreateSampleDto) {
    return this.repo.create({ data });
  }

  @DeleteOneById()
  deleteOneById(@ParamId() id: number, @Query() query: ResponseQuerySampleDto) {
    return this.repo.update({
      ...query,
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  @UpdateOneById()
  updateOneById(
    @ParamId() id: number,
    @Body() data: UpdateSampleDto,
    @Query() query: ResponseQuerySampleDto
  ) {
    return this.repo.update({
      ...query,
      where: { id },
      data,
    });
  }
}
