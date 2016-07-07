import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction/transaction.service';
import { Transaction } from '../models/transaction/transaction'

@Component({
  selector: "newTransaction",
  templateUrl: "app/transaction/newTransaction.component.html",
  styleUrls: ["app/transaction/newTransaction.component.css"]
})
export class NewTransactionComponent implements OnInit {

  transaction: Transaction;

  constructor(private _router: Router, private _transactionService: TransactionService) { 
    this.transaction = new Transaction();
  }

  ngOnInit() {
    
  }

  save(){
    this._transactionService.addTransaction(this.transaction).then(transaction => alert("Transaction _id is: " + transaction.externalRef));
  }

}