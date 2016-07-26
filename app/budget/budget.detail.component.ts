import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget/budget.service';
import { Budget } from '../models/budget/budget';

@Component({
    selector: "budget-detail",
    templateUrl: "app/budget/budget.detail.component.html",
    styleUrls: ["app/budget/budget.detail.component.css"],
    inputs:["budget"]
})
export class BudgetDetailComponent {
   
    private _budget: Budget;

    set budget(budget: Budget) {
        this._budget = budget;
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
    }

    get budget(): Budget {
        return this._budget;
    }

    saveWasSuccessful: boolean = false;
    saveWasUnsuccessful: boolean = false;

    constructor(private _router: Router, private _budgetService: BudgetService) { 
       
    }

    save(){
        this._budgetService.updateBudget(this.budget).then(budget => this.saveWasSuccessful = true);
    }

}