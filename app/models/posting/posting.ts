export class Posting {
    externalRef: string;
    id: string;
    referenceId: string;
    type: string;
    description: string;
    date: Date;
    amount: number;
    accountNumber: string;

    constructor() {
        this.externalRef = "";
        this.id = "";
        this.referenceId = "";
        this.description = "";
        this.type = "";
        this.amount = 0;
        this.date = new Date();
        this.accountNumber = "";       
    }

    fromJson(posting: any) : Posting {
        this.externalRef = posting.externalRef;
        this.id = posting.id;
        this.type = posting.type;
        this.referenceId = posting.referenceId;
        this.description = posting.description;
        this.amount = posting.amount;
        this.date = posting.date;
        this.accountNumber = posting.accountNumber;        

        return this;
    }
}