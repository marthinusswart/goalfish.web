import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction/transaction.service';
import { Transaction } from '../models/transaction/transaction'
import { KeyService } from '../services/key/key.service';

@Component({
  selector: "newTransaction",
  templateUrl: "app/transaction/newTransaction.component.html",
  styleUrls: ["app/transaction/newTransaction.component.css"]
})
export class NewTransactionComponent implements OnInit {

  transaction: Transaction;
  saveWasSuccessful: boolean = false;
  saveWasUnsuccessful: boolean = false;

  constructor(private _router: Router, private _transactionService: TransactionService, private _keyService: KeyService) {
    this.transaction = new Transaction();
  }

  ngOnInit() {
    this.initTransaction();
  }

  save() {
    this._transactionService.addTransaction(this.transaction).then(transaction => {
      this.saveWasSuccessful = true;
      this.initTransaction();
    });
  }

  initTransaction() {
    this._keyService.getNextKeyByName("transaction").then(key => { this.transaction.id = this.transaction.createIdFromKey(key.key) });
    this.transaction.amount = 0;
    this.transaction.description = "";
  }

}