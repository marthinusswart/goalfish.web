export class Initiative {
    externalRef: string;
    id: string;
    name: string;
    description: string;
    targetBalance: number;
    targetDate: Date;
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
        this.targetDate = new Date();
        this.targetBalance = 0;
    }

    fromJson(initiative: any) : Initiative {
        this.externalRef = initiative.externalRef;
        this.id = initiative.id;
        this.name = initiative.name;
        this.targetBalance = initiative.targetBalance;
        this.targetDate = initiative.targetDate;
        this.description = initiative.description;
        this.balance = initiative.balance;
        this.underlyingAccount = initiative.underlyingAccount;
        this.instalmentAmount = initiative.instalmentAmount;
        this.frequency = initiative.frequency;
        this.memberId = initiative.memberId;

        return this;
    }

      createIdFromKey(key: number): string {
        let keyStr = "INI" + key;
        if (key < 1000) {
            keyStr = "INI" + ("0000" + key).slice(-4);
        }
        return keyStr;
    }
}