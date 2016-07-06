import { provideRouter, RouterConfig }  from '@angular/router';
import { MembersComponent } from './member/members.component';
import { BudgetsComponent } from './budget/budgets.component';
import { TransactionsComponent } from './transaction/transactions.component';
import { InitiativesComponent } from './initiative/initiatives.component';
import { JournalsComponent } from './journal/journals.component';
import { PostingsComponent } from './posting/postings.component';
import { UnderlyingAccountsComponent } from './underlyingaccount/underlyingaccounts.component';
import { NewBudgetComponent } from './budget/newBudget.component';

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
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];