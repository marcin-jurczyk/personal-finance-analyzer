import { Injectable } from "@nestjs/common";
import { supabase } from "src/supabaseClient";

@Injectable()
export class AnalyticsService {
  async getMonthlySummary(userId: string) {
    // Sum income and expense per month
    const { data: income, error: incomeErr } = await supabase
      .from('transactions')
      .select('amount')
      .eq('user_id', userId)
      .eq('type', 'income');

    const { data: expense, error: expenseErr } = await supabase
      .from('transactions')
      .select('amount')
      .eq('user_id', userId)
      .eq('type', 'expense');

    if (incomeErr || expenseErr) throw incomeErr || expenseErr;

    const totalIncome = income.reduce((sum, t) => sum + Number(t.amount), 0);
    const totalExpense = expense.reduce((sum, t) => sum + Number(t.amount), 0);

    return { totalIncome, totalExpense, balance: totalIncome - totalExpense };
  }
}
