import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './services/category.service';
import { ActiveUserId } from '../.././shared/decorators/ActiveUserId';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll(@ActiveUserId() userId: string) {
    return this.categoryService.findAllByUserId(userId);
  }
}
