"use strict";
var router_1 = require('@angular/router');
var members_component_1 = require('./member/members.component');
var budgets_component_1 = require('./budget/budgets.component');
var transactions_component_1 = require('./transaction/transactions.component');
var initiatives_component_1 = require('./initiative/initiatives.component');
var journals_component_1 = require('./journal/journals.component');
var postings_component_1 = require('./posting/postings.component');
var underlyingaccounts_component_1 = require('./underlyingaccount/underlyingaccounts.component');
var routes = [
    {
        path: "members",
        component: members_component_1.MembersComponent
    },
    {
        path: "budgets",
        component: budgets_component_1.BudgetsComponent
    },
    {
        path: "transactions",
        component: transactions_component_1.TransactionsComponent
    },
    {
        path: "initiatives",
        component: initiatives_component_1.InitiativesComponent
    },
    {
        path: "journals",
        component: journals_component_1.JournalsComponent
    },
    {
        path: "postings",
        component: postings_component_1.PostingsComponent
    },
    {
        path: "underlyingaccounts",
        component: underlyingaccounts_component_1.UnderlyingAccountsComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map