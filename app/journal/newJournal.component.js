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
var journal_service_1 = require('../services/journal/journal.service');
var journal_1 = require('../models/journal/journal');
var key_service_1 = require('../services/key/key.service');
var security_service_1 = require('../services/security/security.service');
var underlyingAccount_service_1 = require('../services/underlyingaccount/underlyingAccount.service');
var NewJournalComponent = (function () {
    function NewJournalComponent(_router, _journalService, _keyService, _securityService, _underlyingAccountService) {
        this._router = _router;
        this._journalService = _journalService;
        this._keyService = _keyService;
        this._securityService = _securityService;
        this._underlyingAccountService = _underlyingAccountService;
        this.accounts = [];
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
        this.journal = new journal_1.Journal();
    }
    NewJournalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.initJournal();
        this._securityService.activeTokenSubject.subscribe(function (token) {
            _this._underlyingAccountService.getAccounts().then(function (allAccounts) {
                self.accounts = [];
                self.accounts.push(new JournalAccount());
                allAccounts.forEach(function (account) {
                    var jnlAccount = new JournalAccount();
                    jnlAccount.id = account.id;
                    jnlAccount.name = account.id + " | " + account.name;
                    self.accounts.push(jnlAccount);
                });
            });
        });
    };
    NewJournalComponent.prototype.save = function () {
        var _this = this;
        this._journalService.addJournal(this.journal).then(function (journal) {
            _this.saveWasSuccessful = true;
            _this.initJournal();
        });
    };
    NewJournalComponent.prototype.initJournal = function () {
        var _this = this;
        this._keyService.getNextKeyByName("journal").then(function (key) { _this.journal.id = _this.journal.createIdFromKey(key.key); });
        this.journal.amount = 0;
        this.journal.description = "";
        this.journal.name = "";
    };
    NewJournalComponent = __decorate([
        core_1.Component({
            selector: "newJournal",
            templateUrl: "app/journal/newJournal.component.html",
            styleUrls: ["app/journal/newJournal.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, journal_service_1.JournalService, key_service_1.KeyService, security_service_1.SecurityService, underlyingAccount_service_1.UnderlyingAccountService])
    ], NewJournalComponent);
    return NewJournalComponent;
}());
exports.NewJournalComponent = NewJournalComponent;
var JournalAccount = (function () {
    function JournalAccount() {
    }
    return JournalAccount;
}());
//# sourceMappingURL=newJournal.component.js.map