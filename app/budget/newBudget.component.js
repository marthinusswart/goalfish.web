"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var budget_service_1 = require('../services/budget/budget.service');
var budget_1 = require('../models/budget/budget');
var NewBudgetComponent = (function () {
    function NewBudgetComponent(_router, _budgetService) {
        this._router = _router;
        this._budgetService = _budgetService;
        this.budget = new budget_1.Budget();
    }
    NewBudgetComponent.prototype.ngOnInit = function () {
    };
    NewBudgetComponent = __decorate([
        core_1.Component({
            selector: "newBudget",
            templateUrl: "app/budget/newBudget.component.html",
            styleUrls: ["app/budget/newBudget.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, budget_service_1.BudgetService])
    ], NewBudgetComponent);
    return NewBudgetComponent;
}());
exports.NewBudgetComponent = NewBudgetComponent;
//# sourceMappingURL=newBudget.component.js.map