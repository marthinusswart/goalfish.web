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
var member_service_1 = require('./services/member/member.service');
var budget_service_1 = require('./services/budget/budget.service');
var journal_service_1 = require('./services/journal/journal.service');
var posting_service_1 = require('./services/posting/posting.service');
var initiative_service_1 = require('./services/initiative/initiative.service');
var transaction_service_1 = require('./services/transaction/transaction.service');
var underlyingAccount_service_1 = require('./services/underlyingaccount/underlyingAccount.service');
var http_1 = require('@angular/http');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "goalfish",
            templateUrl: "app/app.component.html",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, member_service_1.MemberService, budget_service_1.BudgetService,
                initiative_service_1.InitiativeService, journal_service_1.JournalService, posting_service_1.PostingService, transaction_service_1.TransactionService, underlyingAccount_service_1.UnderlyingAccountService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map