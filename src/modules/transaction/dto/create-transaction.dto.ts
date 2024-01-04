import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';
import { TransactionType } from '../entitities/TransactionType';

export class CreateTransactionDto {
  /**
   * ID da bank account no qual você criou para o tipo da sua transação.
   * Tipos: CHECKING, INVESTIMENT, CASH.
   * @example 933dfb75fda9684a1c943ef7
   */
  @IsNotEmpty()
  @IsString()
  bankAccountId: string;

  /**
   * ID da categoria no qual se encaixa com o tipo da transação. Existem 12 categorias
   * que foram criadas por padrão no momento em que o usuário	 foi criado.
   * @example 655dfb75fda9684a1c943ef7
   */
  @IsNotEmpty()
  @IsString()
  categoryId: string;

  /**
   * Valor da transação, precisa ser número.
   * @example Salario
   */

  @IsNotEmpty()
  @IsString()
  name: string;

  /**
   * Valor da transação, precisa ser um número.
   * @example 9000
   */
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  value: number;

  /**
   * Data da transação, precisa ser no formato ISO-8601.
   * @example 2024-01-17T01:53:27.110Z
   */
  @IsNotEmpty()
  @IsDateString()
  date: string;

  /**
   * Esta relacionado ao tipo da sua transação que pode ser INCOME, EXPENSE.
   * @example EXPENSE
   */
  @IsEnum(TransactionType)
  type: TransactionType;
}
