import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget/budget.service';
import { Budget } from '../models/budget/budget';
import { BudgetDeposit } from '../models/budget/budget.deposit';
import { KeyService } from '../services/key/key.service';
import { SecurityService } from '../services/security/security.service';
import { Token } from '../models/security/token';
import { UnderlyingAccountService } from '../services/underlyingaccount/underlyingAccount.service';

@Component({
    selector: "budgetDeposit",
    templateUrl: "app/budget/budget.deposit.component.html",
    styleUrls: ["app/budget/budget.deposit.component.css"]
})
export class BudgetDepositComponent implements OnInit {

    budgetDeposit: BudgetDeposit;
    saveWasSuccessful: boolean = false;
    saveWasUnsuccessful: boolean = false;
    accounts: BudgetAccount[] = [];
    budgets: BudgetItem[] = [];

    constructor(private _router: Router, private _budgetService: BudgetService,
        private _keyService: KeyService, private _securityService: SecurityService,
        private _underlyingAccountService: UnderlyingAccountService) {
        this.budgetDeposit = new BudgetDeposit();
    }

    ngOnInit() {
        let self = this;

        this._securityService.activeTokenSubject.subscribe((token: Token) => {
            this._underlyingAccountService.getAccounts().then(allAccounts => {
                self.accounts = [];
                self.accounts.push(new BudgetAccount());
                allAccounts.forEach(account => {
                    let bgtAccount = new BudgetAccount();
                    bgtAccount.id = account.id;
                    bgtAccount.name = account.id + " | " + account.name;
                    self.accounts.push(bgtAccount);
                });

                let extAccount = new BudgetAccount();
                extAccount.id = "-1"
                extAccount.name = "External Account";
                self.accounts.push(extAccount);
            });
        });

        this._budgetService.getBudgets().then(budgets => {
            self.budgets = [];
            self.budgets.push(new BudgetItem());
            budgets.forEach(budget => {
                let bgtItem = new BudgetItem();
                bgtItem.id = budget.id;
                bgtItem.name = budget.id + " | " + budget.name;
                self.budgets.push(bgtItem);
            });
        });
    }

    deposit() {
        this._budgetService.deposit(this.budgetDeposit).then(budgetDeposit => {
            this.saveWasSuccessful = true;
            this.budgetDeposit = new BudgetDeposit();
        });
    }

}

class BudgetAccount {
    id: string;
    name: string;
}

class BudgetItem {
    id: string;
    name: string;
}