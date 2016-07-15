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
var Rx_1 = require('rxjs/Rx');
var member_1 = require('../../models/member/member');
//import { Hero } from './hero';
//import { HEROES } from './mock-heroes';
var MemberService = (function () {
    function MemberService(_http) {
        var _this = this;
        this._http = _http;
        this.url = "http://localhost:3010";
        this.api = "/api/v1/member";
        this.activeMemberSubject = new Rx_1.BehaviorSubject(null);
        var member = new member_1.Member();
        member.name = "anonymous";
        this.activeMemberSubject.next(member);
        this.activeMemberSubject.subscribe(function (member) {
            _this.activeMember = member;
        });
    }
    MemberService.prototype.getMembers = function (token) {
        var _this = this;
        var headers = new http_1.Headers({
            'x-access-token': ""
        });
        return this._http.get(this.url + this.api, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (members) { return _this.toMemberArray(members); })
            .toPromise();
    };
    MemberService.prototype.toMemberArray = function (members) {
        var membersArray = [];
        membersArray = members.map(function (member) { return new member_1.Member().init(member); });
        return membersArray;
    };
    MemberService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MemberService);
    return MemberService;
}());
exports.MemberService = MemberService;
//# sourceMappingURL=member.service.js.map