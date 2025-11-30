import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async findAll() {
    return this.categoriesService.findAll();
  }

  @Post()
  async create(@Body() body: { name: string; type: 'income' | 'expense' }) {
    return this.categoriesService.create(body.name, body.type);
  }
}
