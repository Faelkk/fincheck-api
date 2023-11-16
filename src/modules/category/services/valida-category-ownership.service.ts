/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

import { CategoriesRepository } from '../../../shared/database/repositories/categories.repository';

@Injectable()
export class ValidateCategoryOwnerShip {
  constructor(private readonly CategoriesRepo: CategoriesRepository) {}

  async validate(userId: string, categoryId: string) {
    const isOwner = await this.CategoriesRepo.FindFirst({
      where: { id: categoryId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Category not found');
    }
  }
}
