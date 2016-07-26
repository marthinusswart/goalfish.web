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
var BudgetDetailComponent = (function () {
    function BudgetDetailComponent(_router, _budgetService) {
        this._router = _router;
        this._budgetService = _budgetService;
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
    }
    Object.defineProperty(BudgetDetailComponent.prototype, "budget", {
        get: function () {
            return this._budget;
        },
        set: function (budget) {
            this._budget = budget;
            this.saveWasSuccessful = false;
            this.saveWasUnsuccessful = false;
        },
        enumerable: true,
        configurable: true
    });
    BudgetDetailComponent.prototype.save = function () {
        var _this = this;
        this._budgetService.updateBudget(this.budget).then(function (budget) { return _this.saveWasSuccessful = true; });
    };
    BudgetDetailComponent = __decorate([
        core_1.Component({
            selector: "budget-detail",
            templateUrl: "app/budget/budget.detail.component.html",
            styleUrls: ["app/budget/budget.detail.component.css"],
            inputs: ["budget"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, budget_service_1.BudgetService])
    ], BudgetDetailComponent);
    return BudgetDetailComponent;
}());
exports.BudgetDetailComponent = BudgetDetailComponent;
//# sourceMappingURL=budget.detail.component.js.map