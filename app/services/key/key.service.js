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
var key_1 = require('../../models/key/key');
var config_service_1 = require('../config/config.service');
var KeyService = (function () {
    function KeyService(_http, _configService) {
        this._http = _http;
        this._configService = _configService;
        this.url = "";
        this.api = "/api/v1/key";
        this.url = _configService.url;
    }
    KeyService.prototype.getNextKeyByName = function (keyName) {
        var _this = this;
        return this._http.get(this.url + this.api + "/nextkey/" + keyName)
            .map(function (resp) { return resp.json(); })
            .map(function (key) { return _this.toKey(key); })
            .toPromise();
    };
    KeyService.prototype.toKey = function (keyJson) {
        var key = new key_1.Key();
        key = key.fromJson(keyJson);
        return key;
    };
    KeyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], KeyService);
    return KeyService;
}());
exports.KeyService = KeyService;
//# sourceMappingURL=key.service.js.map