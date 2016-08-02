import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BudgetService } from '../services/budget/budget.service';
import { Budget } from '../models/budget/budget'

@Component({
  selector: "budgettransactions",
  templateUrl: "app/budget/budget.transactions.component.html",
  styleUrls: ["app/budget/budget.transactions.component.css"]
})
export class BudgetTransactionsComponent implements OnInit {

 constructor(private _router: Router, private _route: ActivatedRoute, private _budgetService: BudgetService) { }

  ngOnInit() {
    let budgetId = this._route.snapshot.params["id"];
  }

}