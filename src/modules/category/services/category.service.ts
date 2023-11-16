import { Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../../../shared/database/repositories/categories.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepo: CategoriesRepository) {}
  findAllByUserId(userId: string) {
    return this.categoryRepo.FindMany({
      where: { userId },
    });
  }
}
