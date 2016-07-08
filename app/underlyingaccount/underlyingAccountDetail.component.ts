import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UnderlyingAccountService } from '../services/underlyingaccount/underlyingAccount.service';
import { UnderlyingAccount } from '../models/underlyingaccount/underlyingAccount'

@Component({
    selector: "account-detail",
    templateUrl: "app/underlyingaccount/underlyingAccountDetail.component.html",
    styleUrls: ["app/underlyingaccount/underlyingAccountDetail.component.css"]
})
export class UnderlyingAccountDetail {

    @Input()
    account: UnderlyingAccount;

    constructor(private _router: Router, private _underlyingAccountService: UnderlyingAccountService) { 
       
    }

    save(){
        this._underlyingAccountService.updateAccount(this.account).then(account => alert("Account _id is: " + account.externalRef));
    }

}