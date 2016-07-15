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
var token_1 = require('../../models/security/token');
var credentials_1 = require('../../models/security/credentials');
var SecurityService = (function () {
    function SecurityService(_http) {
        this._http = _http;
        this.url = "http://localhost:3010";
        this.api = "/api/v1/security";
    }
    SecurityService.prototype.login = function (email, password) {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var credentials = new credentials_1.Credentials();
        credentials.email = email;
        credentials.password = password;
        var self = this;
        return this._http.post(this.url + this.api + "/login", JSON.stringify(credentials), { headers: headers })
            .map(function (resp) { return resp.json(); })
            .map(function (tokenJson) {
            self.token = _this.toToken(tokenJson);
            return self.token;
        })
            .toPromise();
    };
    SecurityService.prototype.toToken = function (tokenJson) {
        var token = new token_1.Token();
        token = new token_1.Token().fromJson(tokenJson);
        return token;
    };
    SecurityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SecurityService);
    return SecurityService;
}());
exports.SecurityService = SecurityService;
//# sourceMappingURL=security.service.js.map