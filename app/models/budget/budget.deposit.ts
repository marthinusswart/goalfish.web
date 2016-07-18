
export class BudgetDeposit {
    budgetId: string;
    fromAccountId: string;
    toAccountId: string;
    description: string;
    amount: number;
    depositDate: Date;

    constructor() {
        this.budgetId = "";
        this.fromAccountId = "";
        this.toAccountId = "";
        this.description = "";
        this.amount = 0;
        this.depositDate = new Date();
    }

    fromJson(deposit: any): BudgetDeposit {
        this.budgetId = deposit.budgetId;
        this.fromAccountId = deposit.fromAccountId;
        this.toAccountId = deposit.toAccountId;
        this.description = deposit.description;
        this.amount = deposit.amount;
        this.depositDate = deposit.depositDate;

        return this;
    }

}