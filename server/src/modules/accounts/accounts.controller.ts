import { Controller, Get, Post, Body } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from '../common/dto/create-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async findAll() {
    return this.accountsService.findAll();
  }

  @Post()
  async create(@Body('name') dto: CreateAccountDto) {
    return this.accountsService.create(name);
  }
}
