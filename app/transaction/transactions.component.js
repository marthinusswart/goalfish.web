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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var transaction_service_1 = require('../services/transaction/transaction.service');
var platform_browser_1 = require('@angular/platform-browser');
var TransactionsComponent = (function () {
    function TransactionsComponent(_router, _transactionService, _document) {
        this._router = _router;
        this._transactionService = _transactionService;
        this._document = _document;
        this.allTransactions = [];
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._transactionService.getTransactions().then(function (transactions) { return _this.allTransactions = transactions; });
    };
    TransactionsComponent.prototype.gotoNewTransaction = function () {
        var link = ['newtransaction'];
        this._router.navigate(link);
    };
    TransactionsComponent.prototype.selectAll = function (elementId) {
        var element = document.getElementById(elementId);
        var body = document.body, range, sel;
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            sel.removeAllRanges();
            try {
                range.selectNodeContents(element);
                sel.addRange(range);
            }
            catch (e) {
                range.selectNode(element);
                sel.addRange(range);
            }
        }
    };
    TransactionsComponent = __decorate([
        core_1.Component({
            selector: "transactions",
            templateUrl: "app/transaction/transactions.component.html",
            styleUrls: ["app/transaction/transactions.component.css"]
        }),
        __param(2, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [router_1.Router, transaction_service_1.TransactionService, Object])
    ], TransactionsComponent);
    return TransactionsComponent;
}());
exports.TransactionsComponent = TransactionsComponent;
//# sourceMappingURL=transactions.component.js.map