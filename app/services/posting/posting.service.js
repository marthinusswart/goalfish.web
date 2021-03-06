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
var posting_1 = require('../../models/posting/posting');
var member_service_1 = require('../member/member.service');
var security_service_1 = require('../security/security.service');
var config_service_1 = require('../config/config.service');
var PostingService = (function () {
    function PostingService(_http, _memberService, _securityService, _configService) {
        this._http = _http;
        this._memberService = _memberService;
        this._securityService = _securityService;
        this._configService = _configService;
        this.url = "";
        this.api = "/api/v1/posting";
        this.url = _configService.url;
    }
    PostingService.prototype.getPostings = function () {
        var _this = this;
        var headers = new http_1.Headers({
            'x-access-token': this._securityService.token.token
        });
        return this._http.get(this.url + this.api, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (postings) { return _this.toPostingArray(postings); })
            .toPromise();
    };
    PostingService.prototype.addPosting = function (posting) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post(this.url + this.api, JSON.stringify(posting), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (posting) { return _this.toPosting(posting); })
            .toPromise();
    };
    PostingService.prototype.processJournals = function () {
        var headers = new http_1.Headers({
            'x-access-token': this._securityService.token.token
        });
        return this._http.post(this.url + this.api + '/process/journals', { headers: headers })
            .map(function (resp) { return resp.json(); })
            .toPromise();
    };
    PostingService.prototype.processTransactions = function () {
        var headers = new http_1.Headers({
            'x-access-token': this._securityService.token.token
        });
        return this._http.post(this.url + this.api + '/process/transactions', { headers: headers })
            .map(function (resp) { return resp.json(); })
            .toPromise();
    };
    PostingService.prototype.toPostingArray = function (postings) {
        var postingsArray = [];
        postingsArray = postings.map(function (posting) { return new posting_1.Posting().fromJson(posting); });
        return postingsArray;
    };
    PostingService.prototype.toPosting = function (postingJson) {
        var posting = new posting_1.Posting();
        posting = posting.fromJson(postingJson);
        return posting;
    };
    PostingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, member_service_1.MemberService, security_service_1.SecurityService, config_service_1.ConfigService])
    ], PostingService);
    return PostingService;
}());
exports.PostingService = PostingService;
//# sourceMappingURL=posting.service.js.map