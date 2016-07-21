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
var initiative_service_1 = require('../services/initiative/initiative.service');
var initiative_deposit_1 = require('../models/initiative/initiative.deposit');
var key_service_1 = require('../services/key/key.service');
var security_service_1 = require('../services/security/security.service');
var underlyingAccount_service_1 = require('../services/underlyingaccount/underlyingAccount.service');
var InitiativeDepositComponent = (function () {
    function InitiativeDepositComponent(_router, _initiativeService, _keyService, _securityService, _underlyingAccountService) {
        this._router = _router;
        this._initiativeService = _initiativeService;
        this._keyService = _keyService;
        this._securityService = _securityService;
        this._underlyingAccountService = _underlyingAccountService;
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
        this.accounts = [];
        this.initiatives = [];
        this.initiativeDeposit = new initiative_deposit_1.InitiativeDeposit();
    }
    InitiativeDepositComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this._securityService.activeTokenSubject.subscribe(function (token) {
            _this._underlyingAccountService.getAccounts().then(function (allAccounts) {
                self.accounts = [];
                self.accounts.push(new InitiativeAccount());
                allAccounts.forEach(function (account) {
                    var bgtAccount = new InitiativeAccount();
                    bgtAccount.id = account.id;
                    bgtAccount.name = account.id + " | " + account.name;
                    self.accounts.push(bgtAccount);
                });
            });
        });
        this._initiativeService.getInitiatives().then(function (initiatives) {
            self.initiatives = [];
            self.initiatives.push(new InitiativeItem());
            initiatives.forEach(function (initiative) {
                var iniItem = new InitiativeItem();
                iniItem.id = initiative.id;
                iniItem.name = initiative.id + " | " + initiative.name;
                self.initiatives.push(iniItem);
            });
        });
    };
    InitiativeDepositComponent.prototype.deposit = function () {
        var _this = this;
        this._initiativeService.deposit(this.initiativeDeposit).then(function (initiativeDeposit) {
            _this.saveWasSuccessful = true;
        });
    };
    InitiativeDepositComponent = __decorate([
        core_1.Component({
            selector: "initiativeDeposit",
            templateUrl: "app/initiative/initiative.deposit.component.html",
            styleUrls: ["app/initiative/initiative.deposit.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, initiative_service_1.InitiativeService, key_service_1.KeyService, security_service_1.SecurityService, underlyingAccount_service_1.UnderlyingAccountService])
    ], InitiativeDepositComponent);
    return InitiativeDepositComponent;
}());
exports.InitiativeDepositComponent = InitiativeDepositComponent;
var InitiativeAccount = (function () {
    function InitiativeAccount() {
    }
    return InitiativeAccount;
}());
var InitiativeItem = (function () {
    function InitiativeItem() {
    }
    return InitiativeItem;
}());
//# sourceMappingURL=initiative.deposit.component.js.map