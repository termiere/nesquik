import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  access_token: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  login: string;

  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  password: string;
}
