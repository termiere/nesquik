import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  login: string;

  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  password: string;
}
