import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction/transaction.service';
import { Transaction } from '../models/transaction/transaction';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: "transactions",
  templateUrl: "app/transaction/transactions.component.html",
  styleUrls: ["app/transaction/transactions.component.css"]
})
export class TransactionsComponent implements OnInit {

  allTransactions: Transaction[] = [];

  constructor(private _router: Router, private _transactionService: TransactionService,
    @Inject(DOCUMENT) private _document) { }

  ngOnInit() {
    this._transactionService.getTransactions().then(transactions => this.allTransactions = transactions);
  }

  gotoNewTransaction() {
    let link = ['newtransaction'];
    this._router.navigate(link);
  }

  selectAll(elementId) {
    var element = document.getElementById(elementId);
    var body = document.body, range, sel;
    if (document.createRange && window.getSelection) {
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();

      try {
        range.selectNodeContents(element); sel.addRange(range);
      } catch (e) {
        range.selectNode(element); sel.addRange(range);
      }
    }
  }
}