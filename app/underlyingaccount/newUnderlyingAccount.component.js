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
var underlyingAccount_service_1 = require('../services/underlyingaccount/underlyingAccount.service');
var underlyingAccount_1 = require('../models/underlyingaccount/underlyingAccount');
var NewUnderlyingAccountComponent = (function () {
    function NewUnderlyingAccountComponent(_router, _underlyingAccountService) {
        this._router = _router;
        this._underlyingAccountService = _underlyingAccountService;
        this.account = new underlyingAccount_1.UnderlyingAccount();
    }
    NewUnderlyingAccountComponent.prototype.ngOnInit = function () {
    };
    NewUnderlyingAccountComponent.prototype.save = function () {
        this._underlyingAccountService.addAccount(this.account).then(function (account) { return alert("Account _id is: " + account.externalRef); });
    };
    NewUnderlyingAccountComponent = __decorate([
        core_1.Component({
            selector: "newUnderlyingAccount",
            templateUrl: "app/underlyingaccount/newUnderlyingAccount.component.html",
            styleUrls: ["app/underlyingaccount/newUnderlyingAccount.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, underlyingAccount_service_1.UnderlyingAccountService])
    ], NewUnderlyingAccountComponent);
    return NewUnderlyingAccountComponent;
}());
exports.NewUnderlyingAccountComponent = NewUnderlyingAccountComponent;
//# sourceMappingURL=newUnderlyingAccount.component.js.map