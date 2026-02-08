import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogDto } from '../dtos/blog.dto';

@Injectable()
export class BlogService {
  private blogs = [
    {
      _id: 1,
      title: 'Blog1',
      content: 'content1',
    },
    {
      _id: 2,
      title: 'Blog2',
      content: 'content 2',
    },
  ];

  blogsList() {
    return this.blogs;
  }

  findBlogById(id: number) {
    const blog = this.blogs.find((blog) => blog._id === id);
    if (blog) return blog;
    else throw new NotFoundException();
  }

  createBlog(blog: BlogDto) {
    const newBlog = {
      _id: this.blogs.length + 1,
      title: blog.title,
      content: blog.content,
    };
    this.blogs.push(newBlog);
    return newBlog;
  }

  deleteBlog(id: number) {
    this.blogs = this.blogs.filter((blog) => blog._id !== id);
    return;
  }

  updateBlog(id: number, blog: BlogDto) {
    this.blogs = this.blogs.map((item) => {
      if (item._id === id) return { ...blog, _id: id };
      else return item;
    });
    return blog;
  }
}
