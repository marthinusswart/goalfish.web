import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction/transaction.service';
import { Transaction } from '../models/transaction/transaction'

@Component({
  selector: "transactions",
  templateUrl: "app/transaction/transactions.component.html",
  styleUrls: ["app/transaction/transactions.component.css"]
})
export class TransactionsComponent implements OnInit {

  allTransactions: Transaction[] = [];

  constructor(private _router: Router, private _transactionService: TransactionService) { }

  ngOnInit() {
    this._transactionService.getTransactions().then(transactions => this.allTransactions = transactions);
  }

  gotoNewTransaction() {
    let link = ['newtransaction'];
    this._router.navigate(link);
  }
}