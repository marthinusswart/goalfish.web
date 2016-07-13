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
var NewTransactionComponent = (function () {
    function NewTransactionComponent(_router, _transactionService, _keyService) {
        this._router = _router;
        this._transactionService = _transactionService;
        this._keyService = _keyService;
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
        this.transaction = new transaction_1.Transaction();
    }
    NewTransactionComponent.prototype.ngOnInit = function () {
        this.initTransaction();
    };
    NewTransactionComponent.prototype.save = function () {
        var _this = this;
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
    NewTransactionComponent = __decorate([
        core_1.Component({
            selector: "newTransaction",
            templateUrl: "app/transaction/newTransaction.component.html",
            styleUrls: ["app/transaction/newTransaction.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, transaction_service_1.TransactionService, key_service_1.KeyService])
    ], NewTransactionComponent);
    return NewTransactionComponent;
}());
exports.NewTransactionComponent = NewTransactionComponent;
//# sourceMappingURL=newTransaction.component.js.map