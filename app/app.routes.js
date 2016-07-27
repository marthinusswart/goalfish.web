"use strict";
var router_1 = require('@angular/router');
var members_component_1 = require('./member/members.component');
var budgets_component_1 = require('./budget/budgets.component');
var creditnotes_component_1 = require('./creditnote/creditnotes.component');
var transactions_component_1 = require('./transaction/transactions.component');
var initiatives_component_1 = require('./initiative/initiatives.component');
var journals_component_1 = require('./journal/journals.component');
var postings_component_1 = require('./posting/postings.component');
var underlyingAccounts_component_1 = require('./underlyingaccount/underlyingAccounts.component');
var newBudget_component_1 = require('./budget/newBudget.component');
var creditnote_new_component_1 = require('./creditnote/creditnote.new.component');
var newInitiative_component_1 = require('./initiative/newInitiative.component');
var newJournal_component_1 = require('./journal/newJournal.component');
var newPosting_component_1 = require('./posting/newPosting.component');
var newTransaction_component_1 = require('./transaction/newTransaction.component');
var newUnderlyingAccount_component_1 = require('./underlyingaccount/newUnderlyingAccount.component');
var budgetDeposit_component_1 = require('./budget/budgetDeposit.component');
var budgetWithdrawal_component_1 = require('./budget/budgetWithdrawal.component');
var initiative_deposit_component_1 = require('./initiative/initiative.deposit.component');
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
        path: "creditnotes",
        component: creditnotes_component_1.CreditNotesComponent
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
        component: underlyingAccounts_component_1.UnderlyingAccountsComponent
    },
    {
        path: "newbudget",
        component: newBudget_component_1.NewBudgetComponent
    },
    {
        path: "newinitiative",
        component: newInitiative_component_1.NewInitiativeComponent
    },
    {
        path: "newjournal",
        component: newJournal_component_1.NewJournalComponent
    },
    {
        path: "newposting",
        component: newPosting_component_1.NewPostingComponent
    },
    {
        path: "newtransaction",
        component: newTransaction_component_1.NewTransactionComponent
    },
    {
        path: "newunderlyingaccount",
        component: newUnderlyingAccount_component_1.NewUnderlyingAccountComponent
    },
    {
        path: "budgetdeposit",
        component: budgetDeposit_component_1.BudgetDepositComponent
    },
    {
        path: "budgetwithdrawal",
        component: budgetWithdrawal_component_1.BudgetWithdrawalComponent
    },
    {
        path: "initiativedeposit",
        component: initiative_deposit_component_1.InitiativeDepositComponent
    },
    {
        path: "newcreditnote",
        component: creditnote_new_component_1.NewCreditNoteComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map