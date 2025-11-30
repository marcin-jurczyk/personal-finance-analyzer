import { Controller, Get, Post, Body } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from '../common/dto/create-transaction.dto';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async findAll() {
    return this.transactionsService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateTransactionDto) {
    return this.transactionsService.create(dto);
  }
}
