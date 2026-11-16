import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterAuthDTO {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  login: string;

  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  password: string;
}

export class LoginAuthDTO extends RegisterAuthDTO {}
