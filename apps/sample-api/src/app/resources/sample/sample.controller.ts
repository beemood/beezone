import { Delete, Get, Post, Put, ResourceController } from '@beezone/nest';
import { InjectRepository } from '@beezone/prisma';
import type { Prisma } from '@beezone/sample-db';
import { Body, Param, ParseIntPipe } from '@nestjs/common';
import type { UpdateSampleDto } from './dto/update-sample.dto.js';

@ResourceController()
export class SampleController {
  constructor(
    @InjectRepository()
    protected readonly repo: Prisma.SampleDelegate
  ) {}

  @Get()
  findAll() {
    return this.repo.findMany();
  }

  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.repo.findUnique({ where: { id } });
  }

  @Post()
  save(@Body() data: Prisma.SampleCreateInput) {
    return this.repo.create({ data });
  }

  @Put()
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateSampleDto) {
    return this.repo.update({ where: { id }, data });
  }

  @Delete()
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.repo.delete({ where: { id } });
  }
}
