import { IsString, IsOptional, IsNumber, Min } from 'class-validator';

export class CreateAccountDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  @IsOptional()
  balance?: number;
}
