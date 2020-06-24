import Transaction from '../models/Transaction';

import SumTransactionIncomeService from '../services/SumTransactionIncomeService';
import SumTransactionOutcomeService from '../services/SumTransactionOutcomeService';

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const sumTransactionIncome = new SumTransactionIncomeService();
    const sumTransactionOutcome = new SumTransactionOutcomeService();

    const income = sumTransactionIncome.execute(this.transactions);
    const outcome = sumTransactionOutcome.execute(this.transactions);
    const balance = {
      income,
      outcome,
      total: income - outcome,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
