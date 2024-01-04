import {
  IsEnum,
  IsHexColor,
  IsNotEmpty,
  IsString,
  IsNumber,
} from 'class-validator';
import { BankAccountType } from '../entities/BankAccount';

export class CreateBankAccountDto {
  /**
   * Nome da bank account , qualquer nome que quiser,
   * @example "X.P INVESTIMENTOS"
   */
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * Valor inicial da sua bank account, que pode ser iniciado em 0.
   * Precisa ser um número.
   * @example 1420
   */
  @IsNumber()
  @IsNotEmpty()
  initialBalance: number;

  /**
   * Vai ser a cor individual para indentificar a sua bank account,
   * Representada por um numéro hexadecimal.
   * @example #342692
   */
  @IsString()
  @IsNotEmpty()
  @IsHexColor()
  color: string;

  /**
   * Esta relacionado ao tipo da sua bank account que pode ser CHECKING, INVESTIMENT, CASH.
   * @example CASH
   */
  @IsEnum(BankAccountType)
  @IsNotEmpty()
  type: BankAccountType;
}
