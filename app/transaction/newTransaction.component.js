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
var transaction_service_1 = require('../services/transaction/transaction.service');
var transaction_1 = require('../models/transaction/transaction');
var key_service_1 = require('../services/key/key.service');
var security_service_1 = require('../services/security/security.service');
var budget_service_1 = require('../services/budget/budget.service');
var initiative_service_1 = require('../services/initiative/initiative.service');
var underlyingAccount_service_1 = require('../services/underlyingaccount/underlyingAccount.service');
var NewTransactionComponent = (function () {
    function NewTransactionComponent(_router, _transactionService, _keyService, _securityService, _budgetService, _initiativeService, _underlyingAccountService) {
        this._router = _router;
        this._transactionService = _transactionService;
        this._keyService = _keyService;
        this._securityService = _securityService;
        this._budgetService = _budgetService;
        this._initiativeService = _initiativeService;
        this._underlyingAccountService = _underlyingAccountService;
        this.accounts = [];
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
        this.classifications = ["", "Initiative", "Budget"];
        this.referenceIdLabel = "Reference Id";
        this.references = [];
        this.transaction = new transaction_1.Transaction();
    }
    NewTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTransaction();
        var self = this;
        this._securityService.activeTokenSubject.subscribe(function (token) {
            _this._underlyingAccountService.getAccounts().then(function (allAccounts) {
                self.accounts = [];
                self.accounts.push(new TransactionAccount());
                allAccounts.forEach(function (account) {
                    var trxAccount = new TransactionAccount();
                    trxAccount.id = account.id;
                    trxAccount.name = account.id + " | " + account.name;
                    self.accounts.push(trxAccount);
                });
            });
        });
    };
    NewTransactionComponent.prototype.save = function () {
        var _this = this;
        if ((this.transaction.underlyingAccount === "") ||
            (this.transaction.underlyingAccount === undefined)) {
            alert("Error! No underlying account");
        }
        this._transactionService.addTransaction(this.transaction).then(function (transaction) {
            _this.saveWasSuccessful = true;
            _this.initTransaction();
        });
    };
    NewTransactionComponent.prototype.initTransaction = function () {
        var _this = this;
        this._keyService.getNextKeyByName("transaction").then(function (key) { _this.transaction.id = _this.transaction.createIdFromKey(key.key); });
        this.transaction.amount = 0;
        this.transaction.description = "";
    };
    NewTransactionComponent.prototype.onClassificationChange = function (classification) {
        this.transaction.classification = classification.value;
        this.referenceIdLabel = classification.value + " ID";
        if (classification.value === "Budget") {
            this.loadAvailableBudgets();
        }
        else if (classification.value === "Initiative") {
            this.loadAvailableInitiatives();
        }
    };
    NewTransactionComponent.prototype.loadAvailableBudgets = function () {
        var self = this;
        this._budgetService.getBudgets().then(function (budgets) {
            self.references = [];
            self.references.push(new TransactionReference());
            budgets.forEach(function (budget) {
                var trxReference = new TransactionReference();
                trxReference.id = budget.id;
                trxReference.name = budget.id + " | " + budget.name;
                self.references.push(trxReference);
            });
        });
    };
    NewTransactionComponent.prototype.loadAvailableInitiatives = function () {
        var self = this;
        this._initiativeService.getInitiatives().then(function (initiatives) {
            self.references = [];
            self.references.push(new TransactionReference());
            initiatives.forEach(function (initiative) {
                var trxReference = new TransactionReference();
                trxReference.id = initiative.id;
                trxReference.name = initiative.id + " | " + initiative.name;
                self.references.push(trxReference);
            });
        });
    };
    NewTransactionComponent = __decorate([
        core_1.Component({
            selector: "newTransaction",
            templateUrl: "app/transaction/newTransaction.component.html",
            styleUrls: ["app/transaction/newTransaction.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, transaction_service_1.TransactionService, key_service_1.KeyService, security_service_1.SecurityService, budget_service_1.BudgetService, initiative_service_1.InitiativeService, underlyingAccount_service_1.UnderlyingAccountService])
    ], NewTransactionComponent);
    return NewTransactionComponent;
}());
exports.NewTransactionComponent = NewTransactionComponent;
var TransactionAccount = (function () {
    function TransactionAccount() {
    }
    return TransactionAccount;
}());
var TransactionReference = (function () {
    function TransactionReference() {
    }
    return TransactionReference;
}());
//# sourceMappingURL=newTransaction.component.js.map