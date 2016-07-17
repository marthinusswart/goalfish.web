
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
        this.externalRef = "";
        this.id = "";
        this.name = "";
        this.description = "";
        this.balance = 0;
        this.underlyingAccount = "";
        this.instalmentAmount = 0;
        this.frequency = "";
        this.memberId = "";
    }

    fromJson(budget: any) : Budget {
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

     createIdFromKey(key: number): string {
        let keyStr = "BGT" + key;
        if (key < 1000) {
            keyStr = "BGT" + ("0000" + key).slice(-4);
        }
        return keyStr;
    }

}