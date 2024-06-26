import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEndpointDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  availability: boolean;
}
