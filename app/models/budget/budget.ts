
export class Budget {
    externalRef: string;
    id: string;
    name: string;
    description: string;
    balance: number;
    underlyingAccount: string;
    instalmentAmount: number;
    frequency: string;
    memberId: string;

    constructor() {

    }

    fromJsonBudget(budget: any) : Budget {
        this.externalRef = budget.externalRef;
        this.id = budget.id;
        this.name = budget.name;
        this.description = budget.description;
        this.balance = budget.balance;
        this.underlyingAccount = budget.underlyingAccount;
        this.instalmentAmount = budget.instalmentAmount;
        this.frequency = budget.frequency;
        this.memberId = budget.memberId;

        return this;
    }

}