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
var creditnote_service_1 = require('../services/creditnote/creditnote.service');
var creditnote_1 = require('../models/creditnote/creditnote');
var key_service_1 = require('../services/key/key.service');
var security_service_1 = require('../services/security/security.service');
var underlyingAccount_service_1 = require('../services/underlyingaccount/underlyingAccount.service');
var NewCreditNoteComponent = (function () {
    function NewCreditNoteComponent(_router, _crNoteService, _keyService, _securityService, _underlyingAccountService) {
        this._router = _router;
        this._crNoteService = _crNoteService;
        this._keyService = _keyService;
        this._securityService = _securityService;
        this._underlyingAccountService = _underlyingAccountService;
        this.accounts = [];
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
        this.creditNote = new creditnote_1.CreditNote();
    }
    NewCreditNoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.initCreditNote();
        this._securityService.activeTokenSubject.subscribe(function (token) {
            _this._underlyingAccountService.getAccounts().then(function (allAccounts) {
                self.accounts = [];
                self.accounts.push(new CreditNoteAccount());
                allAccounts.forEach(function (account) {
                    var crnAccount = new CreditNoteAccount();
                    crnAccount.id = account.id;
                    crnAccount.name = account.id + " | " + account.name;
                    self.accounts.push(crnAccount);
                });
            });
        });
    };
    NewCreditNoteComponent.prototype.save = function () {
        var _this = this;
        this._crNoteService.addCreditNote(this.creditNote).then(function (crNote) {
            _this.saveWasSuccessful = true;
            _this.initCreditNote();
        });
    };
    NewCreditNoteComponent.prototype.initCreditNote = function () {
        var _this = this;
        this._keyService.getNextKeyByName("creditnote").then(function (key) { _this.creditNote.id = _this.creditNote.createIdFromKey(key.key); });
        this.creditNote.amount = 0;
        this.creditNote.description = "";
        this.creditNote.name = "";
        this.creditNote.memberId = this._securityService.token.memberId;
    };
    NewCreditNoteComponent = __decorate([
        core_1.Component({
            selector: "newCreditNote",
            templateUrl: "app/creditnote/creditnote.new.component.html",
            styleUrls: ["app/creditnote/creditnote.new.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, creditnote_service_1.CreditNoteService, key_service_1.KeyService, security_service_1.SecurityService, underlyingAccount_service_1.UnderlyingAccountService])
    ], NewCreditNoteComponent);
    return NewCreditNoteComponent;
}());
exports.NewCreditNoteComponent = NewCreditNoteComponent;
var CreditNoteAccount = (function () {
    function CreditNoteAccount() {
    }
    return CreditNoteAccount;
}());
//# sourceMappingURL=creditnote.new.component.js.map