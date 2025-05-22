import { Controller, Get, Post as HttpPost, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {ApiBody} from "@nestjs/swagger";

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async index() {
    return await this.postsService.findAll();
  }

  @Get(':id')
  async show(@Param('id') id: string) {
    const post = await this.postsService.findOne(id);
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  @HttpPost()
  async store(@Body() data: CreatePostDto) {
    return await this.postsService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: UpdatePostDto) {
    const updated = await this.postsService.update(id, data);
    if (!updated) throw new NotFoundException('Post not found');
    return updated;
  }

  @Delete(':id')
  async destroy(@Param('id') id: string) {
    const success = await this.postsService.remove(id);
    if (!success) throw new NotFoundException('Post not found');
    return { success: true };
  }
}
