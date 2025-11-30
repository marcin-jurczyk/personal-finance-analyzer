import { IsUUID, IsNumber, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateTransactionDto {
  @IsUUID()
  account_id: string;

  @IsUUID()
  category_id: string;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  date: string; // ISO format 'YYYY-MM-DD'
}
