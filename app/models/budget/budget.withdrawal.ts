
export class BudgetWithdrawal {
    budgetId: string;
    fromAccountId: string;
    description: string;
    amount: number;
    withdrawalDate: Date;

    constructor() {
        this.budgetId = "";
        this.fromAccountId = "";
        this.description = "";
        this.amount = 0;
        this.withdrawalDate = new Date();
    }

    fromJson(deposit: any): BudgetWithdrawal {
        this.budgetId = deposit.budgetId;
        this.fromAccountId = deposit.fromAccountId;
        this.description = deposit.description;
        this.amount = deposit.amount;
        this.withdrawalDate = deposit.depositDate;

        return this;
    }

}