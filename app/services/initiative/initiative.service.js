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
var InitiativeService = (function () {
    function InitiativeService(_http) {
        this._http = _http;
        this.url = "http://localhost:3010";
        this.api = "/api/v1/initiative";
    }
    InitiativeService.prototype.getInitiatives = function () {
        var _this = this;
        return this._http.get(this.url + this.api)
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
    InitiativeService.prototype.getHero = function (id) {
        /*return Promise.resolve(HEROES).then(
          heroes => heroes.filter(hero => hero.id === id)[0]
        );*/
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
    InitiativeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], InitiativeService);
    return InitiativeService;
}());
exports.InitiativeService = InitiativeService;
//# sourceMappingURL=initiative.service.js.map