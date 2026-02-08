import { Controller, Get } from '@nestjs/common';
import { BlogService } from '../services/blog.service';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll() {
    return this.blogService.blogList();
  }
}
