import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget/budget.service';
import { Budget } from '../models/budget/budget';
import { KeyService } from '../services/key/key.service';
import { SecurityService } from '../services/security/security.service';
import { Token } from '../models/security/token';

@Component({
  selector: "newBudget",
  templateUrl: "app/budget/newBudget.component.html",
  styleUrls: ["app/budget/newBudget.component.css"]
})
export class NewBudgetComponent implements OnInit {

  budget: Budget;
  saveWasSuccessful: boolean = false;
  saveWasUnsuccessful: boolean = false;

  constructor(private _router: Router, private _budgetService: BudgetService,
    private _keyService: KeyService, private _securityService: SecurityService) {
    this.budget = new Budget();
  }

  ngOnInit() {
    let self = this;
    this.initBudget();
  }

  save() {
    this._budgetService.addBudget(this.budget).then(budget => {
      this.saveWasSuccessful = true;
      this.initBudget();
    });
  }

  initBudget() {
    this._keyService.getNextKeyByName("budget").then(key => { this.budget.id = this.budget.createIdFromKey(key.key) });
    this.budget.balance = 0;
    this.budget.description = "";
    this.budget.name = "";
  }

}