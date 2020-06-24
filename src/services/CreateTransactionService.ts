import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

import VerifyOutcomePossibilityService from './VerifyOutcomePossibilityService';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });
    const balance = this.transactionsRepository.getBalance();

    const verifyOutcomePossibility = new VerifyOutcomePossibilityService();
    const isPossible = verifyOutcomePossibility.execute(balance);

    if (!isPossible) {
      throw Error('Invalid Transaction');
    }

    return transaction;
  }
}

export default CreateTransactionService;
