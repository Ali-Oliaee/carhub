import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BlogService } from '../services/blog.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Blog')
@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll() {
    return this.blogService.blogList();
  }

  @Get(':id')
  findById(@Param() id: string) {
    return id;
  }

  @Post()
  create(@Body() body: { name: string }) {
    return body?.name ?? 'Hi';
  }

  @Delete(':id')
  delete(@Param() id: string) {
    return id;
  }

  @Put(':id')
  update(@Param() id: string) {
    return id;
  }
}
