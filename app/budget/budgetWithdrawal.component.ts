import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../services/budget/budget.service';
import { Budget } from '../models/budget/budget';
import { BudgetWithdrawal } from '../models/budget/budget.withdrawal';
import { KeyService } from '../services/key/key.service';
import { SecurityService } from '../services/security/security.service';
import { Token } from '../models/security/token';
import { UnderlyingAccountService } from '../services/underlyingaccount/underlyingAccount.service';

@Component({
    selector: "budgetWithdrawal",
    templateUrl: "app/budget/budgetWithdrawal.component.html",
    styleUrls: ["app/budget/budgetWithdrawal.component.css"]
})
export class BudgetWithdrawalComponent implements OnInit {

    budgetWithdrawal: BudgetWithdrawal;
    saveWasSuccessful: boolean = false;
    saveWasUnsuccessful: boolean = false;
    accounts: BudgetAccount[] = [];
    budgets: BudgetItem[] = [];

    constructor(private _router: Router, private _budgetService: BudgetService,
        private _keyService: KeyService, private _securityService: SecurityService,
        private _underlyingAccountService: UnderlyingAccountService) {
        this.budgetWithdrawal = new BudgetWithdrawal();
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

    withdraw() {
        this._budgetService.withdraw(this.budgetWithdrawal).then(budgetWithdrawal => {
             this.saveWasSuccessful = true;
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