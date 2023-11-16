import { Module } from '@nestjs/common';
import { BankAccountsController } from './bank-accounts.controller';
import { BankAccountsService } from './services/bank-accounts.service';
import { ValidatebankAccountOwnership } from './services/validate-bank-account-ownership.service';

@Module({
  controllers: [BankAccountsController],
  providers: [BankAccountsService, ValidatebankAccountOwnership],
  exports: [ValidatebankAccountOwnership],
})
export class BankAccountsModule {}
