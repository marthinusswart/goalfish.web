export class Token {
    externalRef: string;
    token: string;
    memberId: string;
    accounts: string[];  

    constructor() {
        this.externalRef = "";
        this.token = "";
        this.memberId = "";
        this.accounts = [];  
    }

    fromJson(token: any) : Token {
        this.externalRef = token.externalRef;
        this.token = token.token;
        this.memberId = token.memberId;
        this.accounts = token.accounts;      

        return this;
    }  
}