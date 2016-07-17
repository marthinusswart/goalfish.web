export class UnderlyingAccount {
    externalRef: string;
    id: string;
    name: string;
    description: string;
    productName: string;
    interestRate: number;
    accountNumber: string;
    holdingInstitution: string;
    balance: number;
    memberId: string;
    isReconciled: boolean;
    calculatedBalance: number;

    constructor() {
        this.externalRef = "";
        this.id = "";
        this.name = "";
        this.description = "";
        this.productName = "";
        this.balance = 0;
        this.accountNumber = "";
        this.holdingInstitution = "";
        this.interestRate = 0;
        this.memberId = "";
        this.isReconciled = false;
        this.calculatedBalance = 0;
    }

    fromJson(underlyingAccount: any): UnderlyingAccount {
        this.externalRef = underlyingAccount.externalRef;
        this.id = underlyingAccount.id;
        this.name = underlyingAccount.name;
        this.productName = underlyingAccount.productName;
        this.description = underlyingAccount.description;
        this.balance = underlyingAccount.balance;
        this.interestRate = underlyingAccount.interestRate;
        this.accountNumber = underlyingAccount.accountNumber;
        this.holdingInstitution = underlyingAccount.holdingInstitution;
        this.memberId = underlyingAccount.memberId;
        if (underlyingAccount.isReconciled !== undefined) {
            this.isReconciled = underlyingAccount.isReconciled;
            this.calculatedBalance = underlyingAccount.calculatedBalance;
        }

        return this;
    }

     createIdFromKey(key: number): string {
        let keyStr = "ACC" + key;
        if (key < 1000) {
            keyStr = "ACC" + ("0000" + key).slice(-4);
        }
        return keyStr;
    }
}