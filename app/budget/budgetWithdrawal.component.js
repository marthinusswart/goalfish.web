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
var budget_withdrawal_1 = require('../models/budget/budget.withdrawal');
var key_service_1 = require('../services/key/key.service');
var security_service_1 = require('../services/security/security.service');
var underlyingAccount_service_1 = require('../services/underlyingaccount/underlyingAccount.service');
var BudgetWithdrawalComponent = (function () {
    function BudgetWithdrawalComponent(_router, _budgetService, _keyService, _securityService, _underlyingAccountService) {
        this._router = _router;
        this._budgetService = _budgetService;
        this._keyService = _keyService;
        this._securityService = _securityService;
        this._underlyingAccountService = _underlyingAccountService;
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
        this.accounts = [];
        this.budgets = [];
        this.budgetWithdrawal = new budget_withdrawal_1.BudgetWithdrawal();
    }
    BudgetWithdrawalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this._securityService.activeTokenSubject.subscribe(function (token) {
            _this._underlyingAccountService.getAccounts().then(function (allAccounts) {
                self.accounts = [];
                self.accounts.push(new BudgetAccount());
                allAccounts.forEach(function (account) {
                    var bgtAccount = new BudgetAccount();
                    bgtAccount.id = account.id;
                    bgtAccount.name = account.id + " | " + account.name;
                    self.accounts.push(bgtAccount);
                });
            });
        });
        this._budgetService.getBudgets().then(function (budgets) {
            self.budgets = [];
            self.budgets.push(new BudgetItem());
            budgets.forEach(function (budget) {
                var bgtItem = new BudgetItem();
                bgtItem.id = budget.id;
                bgtItem.name = budget.id + " | " + budget.name;
                self.budgets.push(bgtItem);
            });
        });
    };
    BudgetWithdrawalComponent.prototype.withdraw = function () {
        var _this = this;
        this._budgetService.withdraw(this.budgetWithdrawal).then(function (budgetWithdrawal) {
            _this.saveWasSuccessful = true;
        });
    };
    BudgetWithdrawalComponent = __decorate([
        core_1.Component({
            selector: "budgetWithdrawal",
            templateUrl: "app/budget/budgetWithdrawal.component.html",
            styleUrls: ["app/budget/budgetWithdrawal.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, budget_service_1.BudgetService, key_service_1.KeyService, security_service_1.SecurityService, underlyingAccount_service_1.UnderlyingAccountService])
    ], BudgetWithdrawalComponent);
    return BudgetWithdrawalComponent;
}());
exports.BudgetWithdrawalComponent = BudgetWithdrawalComponent;
var BudgetAccount = (function () {
    function BudgetAccount() {
    }
    return BudgetAccount;
}());
var BudgetItem = (function () {
    function BudgetItem() {
    }
    return BudgetItem;
}());
//# sourceMappingURL=budgetWithdrawal.component.js.map