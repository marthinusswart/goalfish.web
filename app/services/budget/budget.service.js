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
var transaction_1 = require('../../models/transaction/transaction');
var budget_deposit_1 = require('../../models/budget/budget.deposit');
var budget_withdrawal_1 = require('../../models/budget/budget.withdrawal');
var member_service_1 = require('../member/member.service');
var security_service_1 = require('../security/security.service');
var config_service_1 = require('../config/config.service');
var BudgetService = (function () {
    function BudgetService(_http, _memberService, _securityService, _configService) {
        this._http = _http;
        this._memberService = _memberService;
        this._securityService = _securityService;
        this._configService = _configService;
        this.url = "";
        this.api = "/api/v1/budget";
        this.url = _configService.url;
    }
    BudgetService.prototype.getBudgets = function () {
        var _this = this;
        var headers = new http_1.Headers({
            'x-access-token': this._securityService.token.token
        });
        return this._http.get(this.url + this.api, { headers: headers })
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
    BudgetService.prototype.deposit = function (budgetDeposit) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-access-token': this._securityService.token.token
        });
        return this._http.post(this.url + this.api + '/deposit', JSON.stringify(budgetDeposit), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (budgetDeposit) { return _this.toBudgetDeposit(budgetDeposit); })
            .toPromise();
    };
    BudgetService.prototype.withdraw = function (budgetWithdrawal) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-access-token': this._securityService.token.token
        });
        return this._http.post(this.url + this.api + '/withdraw', JSON.stringify(budgetWithdrawal), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (budgetWithdrawal) { return _this.toBudgetWithdrawal(budgetWithdrawal); })
            .toPromise();
    };
    BudgetService.prototype.updateBudget = function (budget) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http.put(this.url + this.api + "/" + budget.externalRef, JSON.stringify(budget), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (budget) { return _this.toBudget(budget); })
            .toPromise();
    };
    BudgetService.prototype.reconcile = function () {
        var _this = this;
        var headers = new http_1.Headers({
            'x-access-token': this._securityService.token.token
        });
        return this._http.post(this.url + this.api + "/reconcile", "{}", { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (budgets) { return _this.toBudgetArray(budgets); })
            .toPromise();
    };
    BudgetService.prototype.loadTransactions = function (budgetId) {
        var _this = this;
        var headers = new http_1.Headers({
            'x-access-token': this._securityService.token.token
        });
        return this._http.get(this.url + this.api + "/" + budgetId + "/transactions", { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (transactions) { return _this.toTransactionArray(transactions); })
            .toPromise();
    };
    BudgetService.prototype.toBudgetArray = function (budgets) {
        var budgetsArray = [];
        budgetsArray = budgets.map(function (budget) { return new budget_1.Budget().fromJson(budget); });
        return budgetsArray;
    };
    BudgetService.prototype.toTransactionArray = function (transactions) {
        var transactionArray = [];
        transactionArray = transactions.map(function (transaction) { return new transaction_1.Transaction().fromJson(transaction); });
        return transactionArray;
    };
    BudgetService.prototype.toBudget = function (budgetJson) {
        var budget = new budget_1.Budget();
        budget = budget.fromJson(budgetJson);
        return budget;
    };
    BudgetService.prototype.toBudgetDeposit = function (budgetDepositJson) {
        var budgetDeposit = new budget_deposit_1.BudgetDeposit();
        budgetDeposit = budgetDeposit.fromJson(budgetDepositJson);
        return budgetDeposit;
    };
    BudgetService.prototype.toBudgetWithdrawal = function (budgetWithdrawalJson) {
        var budgetWithdrawal = new budget_withdrawal_1.BudgetWithdrawal();
        budgetWithdrawal = budgetWithdrawal.fromJson(budgetWithdrawalJson);
        return budgetWithdrawal;
    };
    BudgetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, member_service_1.MemberService, security_service_1.SecurityService, config_service_1.ConfigService])
    ], BudgetService);
    return BudgetService;
}());
exports.BudgetService = BudgetService;
//# sourceMappingURL=budget.service.js.map