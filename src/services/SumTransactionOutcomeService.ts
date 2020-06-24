import Transaction from '../models/Transaction';

class SumTransactionOutcomeService {
  private sumOutcome: number;

  constructor() {
    this.sumOutcome = 0;
  }

  public execute(transactions: Transaction[]): number {
    this.sumOutcome = transactions.reduce((sum, transaction) => {
      if (transaction.type === 'outcome') {
        const total = sum + transaction.value;
        return total;
      }
      return sum;
    }, 0);

    return this.sumOutcome;
  }
}

export default SumTransactionOutcomeService;
