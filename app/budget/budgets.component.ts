import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget/budget.service';
import { Budget } from '../models/budget/budget'
import { BudgetDetailComponent } from './budgetDetail.component';

@Component({
  selector: "budgets",
  templateUrl: "app/budget/budgets.component.html",
  styleUrls: ["app/budget/budgets.component.css"],
  directives: [BudgetDetailComponent]
})
export class BudgetsComponent implements OnInit {

  allBudgets: Budget[] = [];
  selectedBudget: Budget;
  showIsReconciledField: boolean = false;

  constructor(private _router: Router, private _budgetService: BudgetService) { }

  ngOnInit() {
    this._budgetService.getBudgets().then(budgets => this.allBudgets = budgets);
  }

  gotoNewBudget() {
    let link = ['newbudget'];
    this._router.navigate(link);
  }

  onSelect(budget: Budget){
    this.selectedBudget = budget;
  }

  reconcile(){
     this._budgetService.reconcile().then(budgets => this.allBudgets = budgets);
     this.showIsReconciledField = true;
  }

}