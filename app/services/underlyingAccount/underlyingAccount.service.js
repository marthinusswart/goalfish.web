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
var underlyingAccount_1 = require('../../models/underlyingaccount/underlyingAccount');
var member_service_1 = require('../member/member.service');
var security_service_1 = require('../security/security.service');
var UnderlyingAccountService = (function () {
    function UnderlyingAccountService(_http, _memberService, _securityService) {
        this._http = _http;
        this._memberService = _memberService;
        this._securityService = _securityService;
        this.url = "http://localhost:3010";
        this.api = "/api/v1/underlyingaccount";
    }
    UnderlyingAccountService.prototype.getAccounts = function () {
        var _this = this;
        var headers = new http_1.Headers({
            'x-access-token': this._securityService.token.token
        });
        return this._http.get(this.url + this.api, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (accounts) { return _this.toAccountArray(accounts); })
            .toPromise();
    };
    UnderlyingAccountService.prototype.addAccount = function (account) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post(this.url + this.api, JSON.stringify(account), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (account) { return _this.toAccount(account); })
            .toPromise();
    };
    UnderlyingAccountService.prototype.updateAccount = function (account) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http.put(this.url + this.api + "/" + account.externalRef, JSON.stringify(account), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (account) { return _this.toAccount(account); })
            .toPromise();
    };
    UnderlyingAccountService.prototype.reconcile = function () {
        var _this = this;
        console.log(this._securityService.token.token);
        var headers = new http_1.Headers({
            'x-access-token': this._securityService.token.token
        });
        return this._http.post(this.url + this.api + "/reconcile", "{}", { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (accounts) { return _this.toAccountArray(accounts); })
            .toPromise();
    };
    UnderlyingAccountService.prototype.toAccountArray = function (accounts) {
        var accountArray = [];
        accountArray = accounts.map(function (account) { return new underlyingAccount_1.UnderlyingAccount().fromJson(account); });
        return accountArray;
    };
    UnderlyingAccountService.prototype.toAccount = function (accountJson) {
        var account = new underlyingAccount_1.UnderlyingAccount();
        account = account.fromJson(accountJson);
        return account;
    };
    UnderlyingAccountService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, member_service_1.MemberService, security_service_1.SecurityService])
    ], UnderlyingAccountService);
    return UnderlyingAccountService;
}());
exports.UnderlyingAccountService = UnderlyingAccountService;
//# sourceMappingURL=underlyingAccount.service.js.map