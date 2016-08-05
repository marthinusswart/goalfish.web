import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BudgetService } from '../services/budget/budget.service';
import { Budget } from '../models/budget/budget';
import { Transaction } from '../models/transaction/transaction';

@Component({
    selector: "budgettransactions",
    templateUrl: "app/budget/budget.transactions.component.html",
    styleUrls: ["app/budget/budget.transactions.component.css"]
})
export class BudgetTransactionsComponent implements OnInit {

    allTransactions: Transaction[] = [];

    constructor(private _router: Router, private _route: ActivatedRoute, private _budgetService: BudgetService) { }

    ngOnInit() {
        let budgetId = this._route.snapshot.params["id"];
        this._budgetService.loadTransactions(budgetId).then(transactions => this.allTransactions = transactions);
    }

    gotoBudget() {
        let link = ['budgets'];
        this._router.navigate(link);
    }

    selectAll(elementId) {
        var element = document.getElementById(elementId);
        var body = document.body, range, sel;
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            sel.removeAllRanges();

            try {
                range.selectNodeContents(element); sel.addRange(range);
            } catch (e) {
                range.selectNode(element); sel.addRange(range);
            }
        }
    }

}