import { Injectable } from '@nestjs/common';
import { supabase } from '../../supabaseClient';

@Injectable()
export class ProfilesService {
  async findAll() {
    const { data, error } = await supabase.from('profiles').select('*');
    if (error) throw error;
    return data;
  }

  async findById(id: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  }
}
