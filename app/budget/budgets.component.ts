import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget/budget.service';
import { Budget } from '../models/budget/budget'

@Component({
  selector: "budgets",
  templateUrl: "app/budget/budgets.component.html",
  styleUrls: ["app/budget/budgets.component.css"]
})
export class BudgetsComponent implements OnInit {

  allBudgets: Budget[] = [];

  constructor(private _router: Router, private _budgetService: BudgetService) { }

  ngOnInit() {
    this._budgetService.getBudgets().then(budgets => this.allBudgets = budgets);
  }

  gotoNewBudget() {
    let link = ['newbudget'];
    this._router.navigate(link);
  }

}