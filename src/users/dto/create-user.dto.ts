import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  name: string;

  @MinLength(4)
  @MaxLength(12)
  password: string;
}
