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
var journal_1 = require('../../models/journal/journal');
var member_service_1 = require('../member/member.service');
var security_service_1 = require('../security/security.service');
var JournalService = (function () {
    function JournalService(_http, _memberService, _securityService) {
        this._http = _http;
        this._memberService = _memberService;
        this._securityService = _securityService;
        this.url = "http://localhost:3010";
        this.api = "/api/v1/journal";
    }
    JournalService.prototype.getJournals = function () {
        var _this = this;
        var headers = new http_1.Headers({
            'x-access-token': this._securityService.token.token
        });
        return this._http.get(this.url + this.api, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (journals) { return _this.toJournalArray(journals); })
            .toPromise();
    };
    JournalService.prototype.addJournal = function (journal) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post(this.url + this.api, JSON.stringify(journal), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (journal) { return _this.toJournal(journal); })
            .toPromise();
    };
    JournalService.prototype.getHero = function (id) {
        /*return Promise.resolve(HEROES).then(
          heroes => heroes.filter(hero => hero.id === id)[0]
        );*/
    };
    JournalService.prototype.toJournalArray = function (journals) {
        var journalsArray = [];
        journalsArray = journals.map(function (journal) { return new journal_1.Journal().fromJson(journal); });
        return journalsArray;
    };
    JournalService.prototype.toJournal = function (journalJson) {
        var journal = new journal_1.Journal();
        journal = journal.fromJson(journalJson);
        return journal;
    };
    JournalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, member_service_1.MemberService, security_service_1.SecurityService])
    ], JournalService);
    return JournalService;
}());
exports.JournalService = JournalService;
//# sourceMappingURL=journal.service.js.map