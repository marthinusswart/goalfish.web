import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget/budget.service';
import { Budget } from '../models/budget/budget'

@Component({
  selector: "newBudget",
  templateUrl: "app/budget/newBudget.component.html",
  styleUrls: ["app/budget/newBudget.component.css"]
})
export class NewBudgetComponent implements OnInit {

  budget: Budget;

  constructor(private _router: Router, private _budgetService: BudgetService) { 
    this.budget = new Budget();
  }

  ngOnInit() {
    
  }

  save(){
    this._budgetService.addBudget(this.budget).then(budget => alert("Budget _id is: " + budget.externalRef));
  }

}