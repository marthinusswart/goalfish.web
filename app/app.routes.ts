import { provideRouter, RouterConfig }  from '@angular/router';
import { MembersComponent } from './member/members.component';
import { BudgetsComponent } from './budget/budgets.component';
import { CreditNotesComponent } from './creditnote/creditnotes.component';
import { TransactionsComponent } from './transaction/transactions.component';
import { InitiativesComponent } from './initiative/initiatives.component';
import { JournalsComponent } from './journal/journals.component';
import { PostingsComponent } from './posting/postings.component';
import { UnderlyingAccountsComponent } from './underlyingaccount/underlyingAccounts.component';
import { NewBudgetComponent } from './budget/newBudget.component';
import { NewCreditNoteComponent } from './creditnote/creditnote.new.component';
import { NewInitiativeComponent } from './initiative/newInitiative.component';
import { NewJournalComponent } from './journal/newJournal.component';
import { NewPostingComponent } from './posting/newPosting.component';
import { NewTransactionComponent } from './transaction/newTransaction.component';
import { NewUnderlyingAccountComponent } from './underlyingaccount/newUnderlyingAccount.component';
import { BudgetDepositComponent } from './budget/budgetDeposit.component';
import { BudgetWithdrawalComponent } from './budget/budgetWithdrawal.component';
import { InitiativeDepositComponent } from './initiative/initiative.deposit.component';

const routes: RouterConfig = [
    {
        path: "members",
        component: MembersComponent
    },
    {
        path: "budgets",
        component: BudgetsComponent
    },
    {
        path: "creditnotes",
        component: CreditNotesComponent
    },
    {
        path: "transactions",
        component: TransactionsComponent
    },
    {
        path: "initiatives",
        component: InitiativesComponent
    },
    {
        path: "journals",
        component: JournalsComponent
    },
    {
        path: "postings",
        component: PostingsComponent
    },
    {
        path: "underlyingaccounts",
        component: UnderlyingAccountsComponent
    },
    {
        path: "newbudget",
        component: NewBudgetComponent
    },
    {
        path: "newinitiative",
        component: NewInitiativeComponent
    },
    {
        path: "newjournal",
        component: NewJournalComponent
    },
    {
        path: "newposting",
        component: NewPostingComponent
    },
    {
        path: "newtransaction",
        component: NewTransactionComponent
    },
    {
        path: "newunderlyingaccount",
        component: NewUnderlyingAccountComponent
    },
    {
        path: "budgetdeposit",
        component: BudgetDepositComponent
    },
    {
        path: "budgetwithdrawal",
        component: BudgetWithdrawalComponent
    },
    {
        path: "initiativedeposit",
        component: InitiativeDepositComponent
    },
    {
        path: "newcreditnote",
        component: NewCreditNoteComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];