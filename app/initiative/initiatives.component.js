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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var initiative_service_1 = require('../services/initiative/initiative.service');
var initiativeDetail_component_1 = require('./initiativeDetail.component');
var platform_browser_1 = require('@angular/platform-browser');
var InitiativesComponent = (function () {
    function InitiativesComponent(_router, _initiativeService, _document) {
        this._router = _router;
        this._initiativeService = _initiativeService;
        this._document = _document;
        this.allInitiatives = [];
        this.showIsReconciledField = false;
    }
    InitiativesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._initiativeService.getInitiatives().then(function (initiatives) { return _this.allInitiatives = initiatives; });
    };
    InitiativesComponent.prototype.gotoNewInitiative = function () {
        var link = ['newinitiative'];
        this._router.navigate(link);
    };
    InitiativesComponent.prototype.onSelect = function (initiative) {
        this.selectedInitiative = initiative;
    };
    InitiativesComponent.prototype.reconcile = function () {
        var _this = this;
        this._initiativeService.reconcile().then(function (initiatives) { return _this.allInitiatives = initiatives; });
        this.showIsReconciledField = true;
    };
    InitiativesComponent.prototype.gotoDeposit = function () {
        var link = ['initiativedeposit'];
        this._router.navigate(link);
    };
    InitiativesComponent = __decorate([
        core_1.Component({
            selector: "initiatives",
            templateUrl: "app/initiative/initiatives.component.html",
            styleUrls: ["app/initiative/initiatives.component.css"],
            directives: [initiativeDetail_component_1.InitiativeDetailComponent]
        }),
        __param(2, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [router_1.Router, initiative_service_1.InitiativeService, Object])
    ], InitiativesComponent);
    return InitiativesComponent;
}());
exports.InitiativesComponent = InitiativesComponent;
//# sourceMappingURL=initiatives.component.js.map