import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnderlyingAccountService } from '../services/underlyingaccount/underlyingAccount.service';
import { UnderlyingAccount } from '../models/underlyingaccount/underlyingAccount'

@Component({
  selector: "newUnderlyingAccount",
  templateUrl: "app/underlyingaccount/newUnderlyingAccount.component.html",
  styleUrls: ["app/underlyingaccount/newUnderlyingAccount.component.css"]
})
export class NewUnderlyingAccountComponent implements OnInit {

  account: UnderlyingAccount;

  constructor(private _router: Router, private _underlyingAccountService: UnderlyingAccountService) { 
    this.account = new UnderlyingAccount();
  }

  ngOnInit() {
    
  }

  save(){
    this._underlyingAccountService.addAccount(this.account).then(account => alert("Account _id is: " + account.externalRef));
  }

}