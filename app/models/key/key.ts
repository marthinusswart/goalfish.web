export class Key{
    name:string;
    key:number;
    externalRef:string;

     fromJson(key: any): Key {
        this.externalRef = key.externalRef;
        this.name = key.name;
        this.key = key.key;

        return this;
    }
}