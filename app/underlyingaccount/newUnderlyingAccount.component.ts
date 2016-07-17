import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnderlyingAccountService } from '../services/underlyingaccount/underlyingAccount.service';
import { UnderlyingAccount } from '../models/underlyingaccount/underlyingAccount';
import { KeyService } from '../services/key/key.service';
import { SecurityService } from '../services/security/security.service';
import { Token } from '../models/security/token';

@Component({
  selector: "newUnderlyingAccount",
  templateUrl: "app/underlyingaccount/newUnderlyingAccount.component.html",
  styleUrls: ["app/underlyingaccount/newUnderlyingAccount.component.css"]
})
export class NewUnderlyingAccountComponent implements OnInit {

  account: UnderlyingAccount;
  saveWasSuccessful: boolean = false;
  saveWasUnsuccessful: boolean = false;

  constructor(private _router: Router, private _underlyingAccountService: UnderlyingAccountService,
    private _keyService: KeyService, private _securityService: SecurityService) {
    this.account = new UnderlyingAccount();
  }

  ngOnInit() {
    let self = this;
    this.initAccount();
  }

  save() {
    this._underlyingAccountService.addAccount(this.account).then(account => {
      this.saveWasSuccessful = true;
      this.initAccount();
    });
  }

  initAccount() {
    this._keyService.getNextKeyByName("underlyingaccount").then(key => { this.account.id = this.account.createIdFromKey(key.key) });
    this.account.balance = 0;
    this.account.description = "";
    this.account.name = "";
  }

}