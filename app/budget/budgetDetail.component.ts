import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget/budget.service';
import { Budget } from '../models/budget/budget'

@Component({
    selector: "budget-detail",
    templateUrl: "app/budget/budgetDetail.component.html",
    styleUrls: ["app/budget/budgetDetail.component.css"]
})
export class BudgetDetailComponent {

    @Input()
    budget: Budget;

    constructor(private _router: Router, private _budgetService: BudgetService) { 
       
    }

    save(){
        this._budgetService.updateBudget(this.budget).then(budget => alert("Budget _id is: " + budget.externalRef));
    }

}