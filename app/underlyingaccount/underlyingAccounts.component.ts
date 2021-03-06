import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnderlyingAccountService } from '../services/underlyingaccount/underlyingAccount.service';
import { UnderlyingAccount } from '../models/underlyingaccount/underlyingAccount'
import { UnderlyingAccountDetail } from './underlyingAccountDetail.component';

@Component({
  selector: "underlyingaccounts",
  templateUrl: "app/underlyingaccount/underlyingAccounts.component.html",
  styleUrls: ["app/underlyingaccount/underlyingAccounts.component.css"],
  directives: [UnderlyingAccountDetail]
})
export class UnderlyingAccountsComponent implements OnInit {

  allAccounts: UnderlyingAccount[] = [];
  selectedAccount: UnderlyingAccount;
  showIsReconciledField: boolean = false;

  constructor(private _router: Router, private _underlyingAccountService: UnderlyingAccountService) { }

  ngOnInit() {
    this._underlyingAccountService.getAccounts().then(accounts => this.allAccounts = accounts);
  }

  gotoNewAccount() {
    let link = ['newunderlyingaccount'];
    this._router.navigate(link);
  }

  onSelect(account: UnderlyingAccount){
    this.selectedAccount = account;
  }

  reconcile(){
     this._underlyingAccountService.reconcile().then(accounts => this.allAccounts = accounts);
     this.showIsReconciledField = true;
  }

}