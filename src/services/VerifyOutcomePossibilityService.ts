interface BalanceDTO {
  income: number;
  outcome: number;
}

class VerifyOutcomePossibilityService {
  private isPossibleMakeTransaction: boolean;

  constructor() {
    this.isPossibleMakeTransaction = false;
  }

  public execute({ income, outcome }: BalanceDTO): boolean {
    console.log(income, outcome);

    this.isPossibleMakeTransaction = income >= outcome;
    return this.isPossibleMakeTransaction;
  }
}

export default VerifyOutcomePossibilityService;
