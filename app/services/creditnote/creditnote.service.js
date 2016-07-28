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
var creditnote_1 = require('../../models/creditnote/creditnote');
var member_service_1 = require('../member/member.service');
var security_service_1 = require('../security/security.service');
var config_service_1 = require('../config/config.service');
var CreditNoteService = (function () {
    function CreditNoteService(_http, _memberService, _securityService, _configService) {
        this._http = _http;
        this._memberService = _memberService;
        this._securityService = _securityService;
        this._configService = _configService;
        this.url = "";
        this.api = "/api/v1/creditnote";
        this.url = _configService.url;
    }
    CreditNoteService.prototype.getCreditNotes = function () {
        var _this = this;
        var headers = new http_1.Headers({
            'x-access-token': this._securityService.token.token
        });
        return this._http.get(this.url + this.api, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (budgets) { return _this.toCreditNoteArray(budgets); })
            .toPromise();
    };
    CreditNoteService.prototype.addCreditNote = function (creditNote) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post(this.url + this.api, JSON.stringify(creditNote), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (crNote) { return _this.toCreditNote(crNote); })
            .toPromise();
    };
    CreditNoteService.prototype.updateCreditNote = function (creditNote) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http.put(this.url + this.api + "/" + creditNote.externalRef, JSON.stringify(creditNote), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (crNote) { return _this.toCreditNote(crNote); })
            .toPromise();
    };
    CreditNoteService.prototype.processCreditNote = function (creditNote) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var creditNoteArray = [creditNote.id];
        return this._http.post(this.url + this.api + "/process", JSON.stringify(creditNoteArray), { headers: headers })
            .map(function (resp) { return creditNote.state = "Processed"; })
            .toPromise();
    };
    CreditNoteService.prototype.toCreditNoteArray = function (creditNotes) {
        var crNoteArray = [];
        crNoteArray = creditNotes.map(function (crNote) { return new creditnote_1.CreditNote().fromJson(crNote); });
        return crNoteArray;
    };
    CreditNoteService.prototype.toCreditNote = function (creditNoteJson) {
        var crNote = new creditnote_1.CreditNote();
        crNote = crNote.fromJson(creditNoteJson);
        return crNote;
    };
    CreditNoteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, member_service_1.MemberService, security_service_1.SecurityService, config_service_1.ConfigService])
    ], CreditNoteService);
    return CreditNoteService;
}());
exports.CreditNoteService = CreditNoteService;
//# sourceMappingURL=creditnote.service.js.map