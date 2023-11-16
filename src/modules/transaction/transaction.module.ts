import { Module } from '@nestjs/common';
import { TransactionService } from './services/transaction.service';
import { TransactionController } from './transaction.controller';
import { BankAccountsModule } from '../bank-accounts/bank-accounts.module';
import { CategoryModule } from '../category/category.module';
import { ValidateTransactionOwnerShip } from './services/validate-transaction-ownership.service';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService, ValidateTransactionOwnerShip],
  imports: [BankAccountsModule, CategoryModule],
})
export class TransactionModule {}
