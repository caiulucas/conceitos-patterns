import Transaction from '../models/Transaction';

class SumTransactionIncomeService {
  private sumIncome: number;

  constructor() {
    this.sumIncome = 0;
  }

  public execute(transactions: Transaction[]): number {
    this.sumIncome = transactions.reduce((sum, transaction) => {
      if (transaction.type === 'income') {
        const total = sum + transaction.value;
        return total;
      }
      return sum;
    }, 0);

    return this.sumIncome;
  }
}
export default SumTransactionIncomeService;
