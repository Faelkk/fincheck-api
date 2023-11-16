import { Module } from '@nestjs/common';
import { CategoryService } from './services/category.service';
import { CategoryController } from './category.controller';
import { ValidateCategoryOwnerShip } from './services/valida-category-ownership.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, ValidateCategoryOwnerShip],
  exports: [ValidateCategoryOwnerShip],
})
export class CategoryModule {}
