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
var initiative_service_1 = require('../services/initiative/initiative.service');
var initiative_1 = require('../models/initiative/initiative');
var key_service_1 = require('../services/key/key.service');
var security_service_1 = require('../services/security/security.service');
var NewInitiativeComponent = (function () {
    function NewInitiativeComponent(_router, _initiativeService, _securityService, _keyService) {
        this._router = _router;
        this._initiativeService = _initiativeService;
        this._securityService = _securityService;
        this._keyService = _keyService;
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
        this.initiative = new initiative_1.Initiative();
    }
    NewInitiativeComponent.prototype.ngOnInit = function () {
        var self = this;
        this.initInitiative();
    };
    NewInitiativeComponent.prototype.save = function () {
        var _this = this;
        this._initiativeService.addInitiative(this.initiative).then(function (Initiative) {
            _this.saveWasSuccessful = true;
            _this.initInitiative();
        });
    };
    NewInitiativeComponent.prototype.initInitiative = function () {
        var _this = this;
        this._keyService.getNextKeyByName("initiative").then(function (key) { _this.initiative.id = _this.initiative.createIdFromKey(key.key); });
        this.initiative.balance = 0;
        this.initiative.description = "";
        this.initiative.name = "";
    };
    NewInitiativeComponent = __decorate([
        core_1.Component({
            selector: "newInitiative",
            templateUrl: "app/initiative/newInitiative.component.html",
            styleUrls: ["app/initiative/newInitiative.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, initiative_service_1.InitiativeService, security_service_1.SecurityService, key_service_1.KeyService])
    ], NewInitiativeComponent);
    return NewInitiativeComponent;
}());
exports.NewInitiativeComponent = NewInitiativeComponent;
//# sourceMappingURL=newInitiative.component.js.map