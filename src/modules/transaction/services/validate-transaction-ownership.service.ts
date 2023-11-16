/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionRepository } from '../../../shared/database/repositories/transactions.repository';

@Injectable()
export class ValidateTransactionOwnerShip {
  constructor(private readonly transactionRepo: TransactionRepository) {}

  async validate(userId: string, categoryId: string) {
    const isOwner = await this.transactionRepo.findFirst({
      where: { id: categoryId, userId },
    });

    if (!isOwner) {
      throw new NotFoundException('Transaction not found');
    }
  }
}
