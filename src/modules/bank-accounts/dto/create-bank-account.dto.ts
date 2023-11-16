import {
  IsEnum,
  IsHexColor,
  IsNotEmpty,
  IsString,
  IsNumber,
} from 'class-validator';
import { BankAccountType } from '../entities/BankAccount';

export class CreateBankAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;

  @IsEnum(BankAccountType)
  @IsNotEmpty()
  type: BankAccountType;
}
