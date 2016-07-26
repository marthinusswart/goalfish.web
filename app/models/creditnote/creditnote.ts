export class CreditNote {
    externalRef: string;
    id: string;
    name: string;
    description: string;
    amount: number;
    fromAccount: string;
    toAccount: string;
    memberId: string;
    date: Date;
    state: string;

    constructor() {
        this.externalRef = "";
        this.id = "";
        this.name = "";
        this.description = "";
        this.amount = 0;
        this.fromAccount = "";
        this.toAccount = "";
        this.date = new Date();
        this.memberId = "";
        this.state = "Pending";
    }

    fromJson(creditNote: any): CreditNote {
        this.externalRef = creditNote.externalRef;
        this.id = creditNote.id;
        this.name = creditNote.name;
        this.description = creditNote.description;
        this.amount = creditNote.amount;
        this.fromAccount = creditNote.fromAccount;
        this.toAccount = creditNote.toAccount;
        this.date = creditNote.date;
        this.memberId = creditNote.memberId;
        this.state = creditNote.state;

        return this;
    }

    createIdFromKey(key: number): string {
        let keyStr = "CRN" + key;
        if (key < 1000) {
            keyStr = "CRN" + ("0000" + key).slice(-4);
        }
        return keyStr;
    }
}