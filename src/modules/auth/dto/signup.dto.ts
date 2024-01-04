import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class SignupDto {
  /**
   * O nome será utilizado para qualquer coisa que precise exibir
   * informações da pessoa conectada.
   * @example "Rafael Achtenberg"
   */
  @IsString()
  @IsNotEmpty()
  name: string;

  /**
   * O e-mail é necessário para criar a criação da conta.z
   * @example newaccount+2@gmail.com
   */
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
   *
   *Senha obrigatória para login, é necessário informar uma senha com pelos menos 8 caracteres.
   * @example 123@abcd
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
