import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "transactions",
  templateUrl: "app/transaction/transactions.component.html",
  styleUrls: ["app/transaction/transactions.component.css"]
})
export class TransactionsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

  }

}