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
import { Member } from './models/member/member';
import { HTTP_PROVIDERS } from '@angular/http';
import { DROPDOWN_DIRECTIVES } from 'ng2-dropdown';

@Component({
    selector: "goalfish",
    templateUrl: "app/app.component.html",
    directives: [ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES],
    providers: [HTTP_PROVIDERS, MemberService, BudgetService,
        InitiativeService, JournalService, PostingService,
        TransactionService, UnderlyingAccountService, KeyService]
})

export class AppComponent implements OnInit {
    activeNavigationItem: string;
    activeMember: Member;

    constructor(private _memberService: MemberService) { }

    ngOnInit() {
        this.activeNavigationItem = "members";
        this.activeMember = new Member();
        this.activeMember.name = "anonymous";
        this._memberService.activeMemberSubject.subscribe((member: Member) => {
            this.activeMember = member;
        });

    }

    onSelect(navigationItem: string) {
        this.activeNavigationItem = navigationItem;
    }

    isActive(navigationItem: string) {
        return navigationItem === this.activeNavigationItem;
    }
}