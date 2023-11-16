import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { TransactionRepository } from '../../../shared/database/repositories/transactions.repository';
import { ValidatebankAccountOwnership } from '../../bank-accounts/services/validate-bank-account-ownership.service';
import { ValidateCategoryOwnerShip } from '../../category/services/valida-category-ownership.service';
import { ValidateTransactionOwnerShip } from './validate-transaction-ownership.service';
import { TransactionType } from '@prisma/client';

@Injectable()
export class TransactionService {
  constructor(
    private readonly transactionRepo: TransactionRepository,
    private readonly validatebankAccountOwnership: ValidatebankAccountOwnership,
    private readonly validateCategoryOwnerShip: ValidateCategoryOwnerShip,
    private readonly validateTransactionOwnerShip: ValidateTransactionOwnerShip,
  ) {}

  async create(userId: string, createTransactionDto: CreateTransactionDto) {
    const { bankAccountId, categoryId, date, name, type, value } =
      createTransactionDto;
    await this.validateEntitiesOwnerShip({ userId, bankAccountId, categoryId });

    return this.transactionRepo.create({
      data: {
        userId,
        bankAccountId,
        categoryId,
        date,
        name,
        type,
        value,
      },
    });
  }

  findAllByUserId(
    userId: string,
    filters: {
      month: number;
      year: number;
      bankAccountId?: string;
      type?: TransactionType;
    },
  ) {
    return this.transactionRepo.findMany({
      where: {
        userId,
        type: filters.type,
        bankAccountId: filters.bankAccountId,
        date: {
          gte: new Date(Date.UTC(filters.year, filters.month)),
          lt: new Date(Date.UTC(filters.year, filters.month + 1)),
        },
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
            icon: true,
          },
        },
      },
    });
  }

  async update(
    userId: string,
    transactionId: string,
    updateTransactionDto: UpdateTransactionDto,
  ) {
    const { bankAccountId, categoryId, date, name, type, value } =
      updateTransactionDto;

    await this.validateEntitiesOwnerShip({
      userId,
      bankAccountId,
      categoryId,
      transactionId,
    });

    return this.transactionRepo.update({
      where: { id: transactionId },
      data: {
        bankAccountId,
        categoryId,
        date,
        name,
        type,
        value,
      },
    });
  }

  async remove(userId: string, transactionId: string) {
    await this.validateEntitiesOwnerShip({ userId, transactionId });

    await this.transactionRepo.delete({
      where: { id: transactionId },
    });
    return null;
  }

  private async validateEntitiesOwnerShip({
    userId,
    bankAccountId,
    categoryId,
    transactionId,
  }: {
    userId: string;
    bankAccountId?: string;
    categoryId?: string;
    transactionId?: string;
  }) {
    await Promise.all([
      transactionId &&
        this.validateTransactionOwnerShip.validate(userId, transactionId),
      bankAccountId &&
        this.validatebankAccountOwnership.validate(userId, bankAccountId),
      categoryId && this.validateCategoryOwnerShip.validate(userId, categoryId),
    ]);
  }
}
