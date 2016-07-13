import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MemberService } from './services/member/member.service';
import { BudgetService } from './services/budget/budget.service';
import { JournalService } from './services/journal/journal.service';
import { PostingService } from './services/posting/posting.service';
import { InitiativeService } from './services/initiative/initiative.service';
import { TransactionService } from './services/transaction/transaction.service';
import { KeyService } from './services/key/key.service';
import { UnderlyingAccountService } from './services/underlyingaccount/underlyingAccount.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    selector: "goalfish",
    templateUrl: "app/app.component.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, MemberService, BudgetService,
        InitiativeService, JournalService, PostingService, 
        TransactionService, UnderlyingAccountService, KeyService]
})

export class AppComponent implements OnInit {
    activeNavigationItem: string;

    ngOnInit() {
        this.activeNavigationItem = "members";
    }

    onSelect(navigationItem: string) {
        this.activeNavigationItem = navigationItem;
    }

    isActive(navigationItem: string) {
        return navigationItem === this.activeNavigationItem;
    }
}