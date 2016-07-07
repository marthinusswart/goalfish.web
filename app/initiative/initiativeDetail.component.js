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
var InitiativeDetailComponent = (function () {
    function InitiativeDetailComponent(_router, _initiativeService) {
        this._router = _router;
        this._initiativeService = _initiativeService;
    }
    InitiativeDetailComponent.prototype.save = function () {
        this._initiativeService.updateInitiative(this.initiative).then(function (initiative) { return alert("Initiative _id is: " + initiative.externalRef); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', initiative_1.Initiative)
    ], InitiativeDetailComponent.prototype, "initiative", void 0);
    InitiativeDetailComponent = __decorate([
        core_1.Component({
            selector: "initiative-detail",
            templateUrl: "app/initiative/initiativeDetail.component.html",
            styleUrls: ["app/initiative/initiativeDetail.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, initiative_service_1.InitiativeService])
    ], InitiativeDetailComponent);
    return InitiativeDetailComponent;
}());
exports.InitiativeDetailComponent = InitiativeDetailComponent;
//# sourceMappingURL=initiativeDetail.component.js.map