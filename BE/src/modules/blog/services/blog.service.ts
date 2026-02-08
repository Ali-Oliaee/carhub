import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { BlogDto } from '../dtos/blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from '../schemas/blog.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name) private readonly blogModel: Model<Blog>,
  ) {}

  async blogsList() {
    return await this.blogModel.find().exec();
  }

  async findBlogById(id: string) {
    if (!Types.ObjectId.isValid(id)) throw new BadRequestException();
    const blog = await this.blogModel.findOne({ _id: String(id) }).exec();

    if (blog) return blog;
    else throw new NotFoundException();
  }

  async createBlog(blog: BlogDto) {
    const newBlog = new this.blogModel(blog);
    await newBlog.save();
    return newBlog;
  }

  async deleteBlog(id: string) {
    const blog = await this.findBlogById(id);
    await blog.deleteOne();
  }

  async updateBlog(id: string, editedBlog: BlogDto) {
    const blog = await this.findBlogById(id);
    blog.title = editedBlog.title;
    blog.content = editedBlog.content;
    await blog.save();
    return blog;
  }
}
