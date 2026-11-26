import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class UsersDetailsDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  data: string;
}
