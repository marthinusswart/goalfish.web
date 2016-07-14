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
var transaction_1 = require('../../models/transaction/transaction');
var member_service_1 = require('../member/member.service');
var TransactionService = (function () {
    function TransactionService(_http, _memberService) {
        this._http = _http;
        this._memberService = _memberService;
        this.url = "http://localhost:3010";
        this.api = "/api/v1/transaction";
    }
    TransactionService.prototype.getTransactions = function () {
        var _this = this;
        var headers = new http_1.Headers({
            'x-access-token': this._memberService.activeMember.id
        });
        return this._http.get(this.url + this.api, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (transactions) { return _this.toTransactionArray(transactions); })
            .toPromise();
    };
    TransactionService.prototype.addTransaction = function (transaction) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post(this.url + this.api, JSON.stringify(transaction), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (posting) { return _this.toTransaction(posting); })
            .toPromise();
    };
    TransactionService.prototype.getHero = function (id) {
        /*return Promise.resolve(HEROES).then(
          heroes => heroes.filter(hero => hero.id === id)[0]
        );*/
    };
    TransactionService.prototype.toTransactionArray = function (transactions) {
        var transactionsArray = [];
        transactionsArray = transactions.map(function (transaction) { return new transaction_1.Transaction().fromJson(transaction); });
        return transactionsArray;
    };
    TransactionService.prototype.toTransaction = function (transactionJson) {
        var transaction = new transaction_1.Transaction();
        transaction = transaction.fromJson(transactionJson);
        return transaction;
    };
    TransactionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, member_service_1.MemberService])
    ], TransactionService);
    return TransactionService;
}());
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map