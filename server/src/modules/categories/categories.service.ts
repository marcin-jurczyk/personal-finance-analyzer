import { Injectable } from '@nestjs/common';
import { supabase } from '../../supabaseClient';

@Injectable()
export class CategoriesService {
  async findAll() {
    const { data, error } = await supabase.from('categories').select('*');
    if (error) throw new Error(error.message);
    return data;
  }

  async create(name: string, type: 'income' | 'expense') {
    const { data, error } = await supabase.from('categories').insert([{ name, type }]).select().single();
    if (error) throw new Error(error.message);
    return data;
  }
}
