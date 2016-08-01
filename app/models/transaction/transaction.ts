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
    memberId: string;

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
        this.memberId = "";
    }

    fromJson(transaction: any) : Transaction {
        this.externalRef = transaction.externalRef;
        this.id = transaction.id;
        this.classification = transaction.classification;
        this.referenceId = transaction.referenceId;
        this.description = transaction.description;
        this.amount = transaction.amount;
        this.date = transaction.date;
        this.memberId = transaction.memberId;
        this.underlyingAccount = transaction.underlyingAccount;   
        this.isPosted = transaction.isPosted;     

        return this;
    }

    createIdFromKey(key: number): string {
        let keyStr = "TRN" + key;
        if (key < 1000) {
            keyStr = "TRN" + ("0000" + key).slice(-4);
        }
        return keyStr;
    }
}