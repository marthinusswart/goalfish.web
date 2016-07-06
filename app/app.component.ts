import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MemberService } from './services/member/member.service';
import { BudgetService } from './services/budget/budget.service';
import { HTTP_PROVIDERS } from '@angular/http';

@Component({
    selector: "goalfish",
    templateUrl: "app/app.component.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, MemberService, BudgetService]
})

export class AppComponent { }