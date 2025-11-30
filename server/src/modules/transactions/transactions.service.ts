import { Injectable } from '@nestjs/common';
import { supabase } from '../../supabaseClient';
import { CreateTransactionDto } from '../common/dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  async findAll() {
    const { data, error } = await supabase.from('transactions').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  async create(dto: CreateTransactionDto) {
    const { data, error } = await supabase.from('transactions').insert([dto]);
    if (error) throw new Error(error.message);
    return data;
  }
}
