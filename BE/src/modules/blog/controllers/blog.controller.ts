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
import { BlogDto } from '../dtos/blog.dto';

@ApiTags('Blog')
@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll() {
    return this.blogService.blogsList();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.blogService.findBlogById(id);
  }

  @Post()
  create(@Body() body: BlogDto) {
    return this.blogService.createBlog(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.blogService.deleteBlog(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: BlogDto) {
    return this.blogService.updateBlog(id, body);
  }
}
