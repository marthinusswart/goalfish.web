export class Member {
    externalRef: string;
    id: string;
    salutation: string;
    name: string;
    surname: string;
    email: string;

    constructor(){

    }

    init(member: any): Member{
        this.externalRef = member.externalRef;
        this.id = member.id;
        this.salutation = member.salutation;
        this.name = member.name;
        this.surname = member.surname;
        this.email = member.email;

        return this;
    }
    
}