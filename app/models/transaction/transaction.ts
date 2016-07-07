export class Transaction {
    externalRef: string;
    id: string;
    referenceId: string;
    classification: string;
    description: string;
    date: Date;
    amount: number;
    underlyingAccount: string;
    isPosted: string;

    constructor() {
        this.externalRef = "";
        this.id = "";
        this.referenceId = "";
        this.description = "";
        this.classification = "";
        this.amount = 0;
        this.date = new Date();
        this.underlyingAccount = "";      
        this.isPosted = "N"; 
    }

    fromJson(transaction: any) : Transaction {
        this.externalRef = transaction.externalRef;
        this.id = transaction.id;
        this.classification = transaction.classification;
        this.referenceId = transaction.referenceId;
        this.description = transaction.description;
        this.amount = transaction.amount;
        this.date = transaction.date;
        this.underlyingAccount = transaction.underlyingAccount;   
        this.isPosted = transaction.isPosted;     

        return this;
    }
}