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

        return this;
    }
}