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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var budget_1 = require('../../models/budget/budget');
var BudgetService = (function () {
    function BudgetService(_http) {
        this._http = _http;
        this.url = "http://localhost:3010";
        this.api = "/api/v1/budget";
    }
    BudgetService.prototype.getBudgets = function () {
        var _this = this;
        return this._http.get(this.url + this.api)
            .map(function (resp) { return resp.json(); })
            .map(function (budgets) { return _this.toBudgetArray(budgets); })
            .toPromise();
    };
    BudgetService.prototype.addBudget = function (budget) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post(this.url + this.api, JSON.stringify(budget), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (budget) { return _this.toBudget(budget); })
            .toPromise();
    };
    BudgetService.prototype.getHero = function (id) {
        /*return Promise.resolve(HEROES).then(
          heroes => heroes.filter(hero => hero.id === id)[0]
        );*/
    };
    BudgetService.prototype.toBudgetArray = function (budgets) {
        var budgetsArray = [];
        budgetsArray = budgets.map(function (budget) { return new budget_1.Budget().fromJsonBudget(budget); });
        return budgetsArray;
    };
    BudgetService.prototype.toBudget = function (budgetJson) {
        var budget = new budget_1.Budget();
        budget = budget.fromJsonBudget(budgetJson);
        return budget;
    };
    BudgetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BudgetService);
    return BudgetService;
}());
exports.BudgetService = BudgetService;
//# sourceMappingURL=budget.service.js.map