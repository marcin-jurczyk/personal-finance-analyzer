import { Injectable } from '@nestjs/common';
import { supabase } from '../../supabaseClient';

@Injectable()
export class AccountsService {
  async findAll() {
    const { data, error } = await supabase.from('accounts').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  async create(name: string) {
    const { data, error } = await supabase.from('accounts').insert([{ name }]).select().single();

    if (error) throw new Error(error.message);
    return data;
  }
}
