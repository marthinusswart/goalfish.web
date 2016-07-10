import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { UnderlyingAccountService } from '../services/underlyingaccount/underlyingAccount.service';
import { UnderlyingAccount } from '../models/underlyingaccount/underlyingAccount'

@Component({
    selector: "account-detail",
    templateUrl: "app/underlyingaccount/underlyingAccountDetail.component.html",
    styleUrls: ["app/underlyingaccount/underlyingAccountDetail.component.css"],
    inputs: ["account"]
})
export class UnderlyingAccountDetail {

    private _account: UnderlyingAccount;

    set account(account: UnderlyingAccount) {
        this._account = account;
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
    }

    get account(): UnderlyingAccount {
        return this._account;
    }

    saveWasSuccessful: boolean = false;
    saveWasUnsuccessful: boolean = false;

    constructor(private _router: Router, private _underlyingAccountService: UnderlyingAccountService) {

    }

    save() {
        this._underlyingAccountService.updateAccount(this.account).then(account => this.saveWasSuccessful = true);
    }

}