import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from './repositories/users.repositories';
import { CategoriesRepository } from './repositories/categories.repository';
import { BankAccountsRepository } from './repositories/bank-accounts.repository';
import { TransactionRepository } from './repositories/transactions.repository';

@Global()
@Module({
  providers: [
    PrismaService,
    UserRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionRepository,
  ],
  exports: [
    UserRepository,
    CategoriesRepository,
    BankAccountsRepository,
    TransactionRepository,
  ],
})
export class DatabaseModule {}
