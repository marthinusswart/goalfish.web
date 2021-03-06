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
var budget_service_1 = require('../services/budget/budget.service');
var budget_1 = require('../models/budget/budget');
var key_service_1 = require('../services/key/key.service');
var security_service_1 = require('../services/security/security.service');
var NewBudgetComponent = (function () {
    function NewBudgetComponent(_router, _budgetService, _keyService, _securityService) {
        this._router = _router;
        this._budgetService = _budgetService;
        this._keyService = _keyService;
        this._securityService = _securityService;
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
        this.budget = new budget_1.Budget();
    }
    NewBudgetComponent.prototype.ngOnInit = function () {
        var self = this;
        this.initBudget();
    };
    NewBudgetComponent.prototype.save = function () {
        var _this = this;
        this._budgetService.addBudget(this.budget).then(function (budget) {
            _this.saveWasSuccessful = true;
            _this.initBudget();
        });
    };
    NewBudgetComponent.prototype.initBudget = function () {
        var _this = this;
        this._keyService.getNextKeyByName("budget").then(function (key) { _this.budget.id = _this.budget.createIdFromKey(key.key); });
        this.budget.balance = 0;
        this.budget.description = "";
        this.budget.name = "";
    };
    NewBudgetComponent = __decorate([
        core_1.Component({
            selector: "newBudget",
            templateUrl: "app/budget/newBudget.component.html",
            styleUrls: ["app/budget/newBudget.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, budget_service_1.BudgetService, key_service_1.KeyService, security_service_1.SecurityService])
    ], NewBudgetComponent);
    return NewBudgetComponent;
}());
exports.NewBudgetComponent = NewBudgetComponent;
//# sourceMappingURL=newBudget.component.js.map