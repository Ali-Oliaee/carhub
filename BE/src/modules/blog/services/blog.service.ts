import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  constructor() {}

  blogList() {
    return ['blog1', 'blog2'];
  }
}
