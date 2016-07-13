export class Journal {
    externalRef: string;
    id: string;
    name: string;
    description: string;
    date: Date;
    amount: number;
    accountNumber: string;
    isPosted: string;

    constructor() {
        this.externalRef = "";
        this.id = "";
        this.name = "";
        this.description = "";
        this.amount = 0;
        this.date = new Date();
        this.accountNumber = "";
        this.isPosted = "N";
    }

    fromJson(journal: any): Journal {
        this.externalRef = journal.externalRef;
        this.id = journal.id;
        this.name = journal.name;
        this.description = journal.description;
        this.amount = journal.amount;
        this.date = journal.date;
        this.accountNumber = journal.accountNumber;
        this.isPosted = journal.isPosted;

        return this;
    }

    createIdFromKey(key: number): string {
        let keyStr = "JNL" + key;
        if (key < 1000) {
            keyStr = "JNL" + ("0000" + key).slice(-4);
        }
        return keyStr;
    }
}