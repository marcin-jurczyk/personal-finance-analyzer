import { Module } from '@nestjs/common';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [TransactionsModule, AccountsModule, CategoriesModule],
})
export class AppModule {}
