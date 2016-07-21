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
var initiative_1 = require('../../models/initiative/initiative');
var initiative_deposit_1 = require('../../models/initiative/initiative.deposit');
var member_service_1 = require('../member/member.service');
var security_service_1 = require('../security/security.service');
var config_service_1 = require('../config/config.service');
var InitiativeService = (function () {
    function InitiativeService(_http, _memberService, _securityService, _configService) {
        this._http = _http;
        this._memberService = _memberService;
        this._securityService = _securityService;
        this._configService = _configService;
        this.url = "";
        this.api = "/api/v1/initiative";
        this.url = _configService.url;
    }
    InitiativeService.prototype.getInitiatives = function () {
        var _this = this;
        var headers = new http_1.Headers({
            'x-access-token': this._securityService.token.token
        });
        return this._http.get(this.url + this.api, { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (initiatives) { return _this.toInitiativeArray(initiatives); })
            .toPromise();
    };
    InitiativeService.prototype.addInitiative = function (initiative) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http.post(this.url + this.api, JSON.stringify(initiative), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (initiative) { return _this.toInitiative(initiative); })
            .toPromise();
    };
    InitiativeService.prototype.deposit = function (initiativeDeposit) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'x-access-token': this._securityService.token.token
        });
        return this._http.post(this.url + this.api + '/deposit', JSON.stringify(initiativeDeposit), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (budgetDeposit) { return _this.toInitiativeDeposit(budgetDeposit); })
            .toPromise();
    };
    InitiativeService.prototype.updateInitiative = function (initiative) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this._http.put(this.url + this.api + "/" + initiative.externalRef, JSON.stringify(initiative), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (initiative) { return _this.toInitiative(initiative); })
            .toPromise();
    };
    InitiativeService.prototype.toInitiativeArray = function (initiatives) {
        var initiativesArray = [];
        initiativesArray = initiatives.map(function (initiative) { return new initiative_1.Initiative().fromJson(initiative); });
        return initiativesArray;
    };
    InitiativeService.prototype.toInitiative = function (initiativeJson) {
        var initiative = new initiative_1.Initiative();
        initiative = initiative.fromJson(initiativeJson);
        return initiative;
    };
    InitiativeService.prototype.toInitiativeDeposit = function (initiativeDepositJson) {
        var initiativeDeposit = new initiative_deposit_1.InitiativeDeposit();
        initiativeDeposit = initiativeDeposit.fromJson(initiativeDepositJson);
        return initiativeDeposit;
    };
    InitiativeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, member_service_1.MemberService, security_service_1.SecurityService, config_service_1.ConfigService])
    ], InitiativeService);
    return InitiativeService;
}());
exports.InitiativeService = InitiativeService;
//# sourceMappingURL=initiative.service.js.map