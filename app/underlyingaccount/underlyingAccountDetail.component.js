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
require('rxjs/add/operator/map');
var underlyingAccount_service_1 = require('../services/underlyingaccount/underlyingAccount.service');
var UnderlyingAccountDetail = (function () {
    function UnderlyingAccountDetail(_router, _underlyingAccountService) {
        this._router = _router;
        this._underlyingAccountService = _underlyingAccountService;
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
    }
    Object.defineProperty(UnderlyingAccountDetail.prototype, "account", {
        get: function () {
            return this._account;
        },
        set: function (account) {
            this._account = account;
            this.saveWasSuccessful = false;
            this.saveWasUnsuccessful = false;
        },
        enumerable: true,
        configurable: true
    });
    UnderlyingAccountDetail.prototype.save = function () {
        var _this = this;
        this._underlyingAccountService.updateAccount(this.account).then(function (account) { return _this.saveWasSuccessful = true; });
    };
    UnderlyingAccountDetail = __decorate([
        core_1.Component({
            selector: "account-detail",
            templateUrl: "app/underlyingaccount/underlyingAccountDetail.component.html",
            styleUrls: ["app/underlyingaccount/underlyingAccountDetail.component.css"],
            inputs: ["account"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, underlyingAccount_service_1.UnderlyingAccountService])
    ], UnderlyingAccountDetail);
    return UnderlyingAccountDetail;
}());
exports.UnderlyingAccountDetail = UnderlyingAccountDetail;
//# sourceMappingURL=underlyingAccountDetail.component.js.map