import { InjectRepository } from '@beezone/prisma';
import { Prisma } from '@beezone/sample-db';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { UpdateSampleDto } from './dto/update-sample.dto.js';

@Controller('sample')
export class SampleController {
  constructor(
    @InjectRepository('sample') protected readonly repo: Prisma.SampleDelegate
  ) {}

  @ApiOperation({ summary: 'find many samples' })
  @ApiOkResponse({})
  @Get()
  findAll() {
    return this.repo.findMany();
  }

  @ApiOperation({ summary: 'find one sample by id' })
  @Get(':id')
  findOneById(@Param('id', ParseIntPipe) id: number) {
    return this.repo.findUnique({ where: { id } });
  }

  @ApiOperation({ summary: 'save one sample' })
  @Post()
  save(@Body() data: Prisma.SampleCreateInput) {
    return this.repo.create({ data });
  }

  @ApiOperation({ summary: 'save one sample' })
  @Post()
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.repo.delete({ where: { id } });
  }

  @ApiOperation({ summary: 'save one sample' })
  @Post()
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateSampleDto) {
    return this.repo.update({ where: { id }, data });
  }
}
