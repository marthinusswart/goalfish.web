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
var BudgetTransactionsComponent = (function () {
    function BudgetTransactionsComponent(_router, _route, _budgetService) {
        this._router = _router;
        this._route = _route;
        this._budgetService = _budgetService;
    }
    BudgetTransactionsComponent.prototype.ngOnInit = function () {
        var budgetId = this._route.snapshot.params["id"];
    };
    BudgetTransactionsComponent = __decorate([
        core_1.Component({
            selector: "budgettransactions",
            templateUrl: "app/budget/budget.transactions.component.html",
            styleUrls: ["app/budget/budget.transactions.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, budget_service_1.BudgetService])
    ], BudgetTransactionsComponent);
    return BudgetTransactionsComponent;
}());
exports.BudgetTransactionsComponent = BudgetTransactionsComponent;
//# sourceMappingURL=budget.transactions.component.js.map