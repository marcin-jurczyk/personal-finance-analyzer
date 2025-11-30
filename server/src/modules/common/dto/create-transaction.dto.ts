import { IsUUID, IsNumber, IsString, IsOptional, IsDateString, Min } from 'class-validator';

export class CreateTransactionDto {
  @IsUUID()
  account_id: string;

  @IsUUID()
  category_id: string;

  @IsNumber()
  @Min(0)
  amount: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  date: string; // ISO format 'YYYY-MM-DD'
}
