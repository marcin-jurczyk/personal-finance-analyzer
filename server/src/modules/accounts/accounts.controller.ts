import { Controller, Get, Post, Body } from '@nestjs/common';
import { AccountsService } from './accounts.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Get()
  async findAll() {
    return this.accountsService.findAll();
  }

  @Post()
  async create(@Body('name') name: string) {
    return this.accountsService.create(name);
  }
}
