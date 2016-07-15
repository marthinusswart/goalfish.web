export class Token {
    token: string;
    memberId: string;
    accounts: string[];  

    constructor() {
        this.token = "";
        this.memberId = "";
        this.accounts = [];  
    }

    fromJson(token: any) : Token {
        this.token = token.token;
        this.memberId = token.memberId;
        this.accounts = token.accounts;      

        return this;
    }  
}