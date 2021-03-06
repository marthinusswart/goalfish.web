import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InitiativeService } from '../services/initiative/initiative.service';
import { Initiative } from '../models/initiative/initiative';
import { InitiativeDeposit } from '../models/initiative/initiative.deposit';
import { KeyService } from '../services/key/key.service';
import { SecurityService } from '../services/security/security.service';
import { Token } from '../models/security/token';
import { UnderlyingAccountService } from '../services/underlyingaccount/underlyingAccount.service';

@Component({
    selector: "initiativeDeposit",
    templateUrl: "app/initiative/initiative.deposit.component.html",
    styleUrls: ["app/initiative/initiative.deposit.component.css"]
})
export class InitiativeDepositComponent implements OnInit {

    initiativeDeposit: InitiativeDeposit;
    saveWasSuccessful: boolean = false;
    saveWasUnsuccessful: boolean = false;
    accounts: InitiativeAccount[] = [];
    initiatives: InitiativeItem[] = [];

    constructor(private _router: Router, private _initiativeService: InitiativeService,
        private _keyService: KeyService, private _securityService: SecurityService,
        private _underlyingAccountService: UnderlyingAccountService) {
        this.initiativeDeposit = new InitiativeDeposit();
    }

    ngOnInit() {
        let self = this;

        this._securityService.activeTokenSubject.subscribe((token: Token) => {
            this._underlyingAccountService.getAccounts().then(allAccounts => {
                self.accounts = [];
                self.accounts.push(new InitiativeAccount());
                allAccounts.forEach(account => {
                    let initAccount = new InitiativeAccount();
                    initAccount.id = account.id;
                    initAccount.name = account.id + " | " + account.name;
                    self.accounts.push(initAccount);
                });

                let extAccount = new InitiativeAccount();
                extAccount.id = "-1"
                extAccount.name = "External Account";
                self.accounts.push(extAccount);
            });
        });

        this._initiativeService.getInitiatives().then(initiatives => {
            self.initiatives = [];
            let tempInitiativeItem = new InitiativeItem();
            self.initiatives.push(tempInitiativeItem);
            initiatives.forEach(initiative => {
                let iniItem = new InitiativeItem();
                iniItem.id = initiative.id;
                iniItem.name = initiative.id + " | " + initiative.name;
                self.initiatives.push(iniItem);
            });

        });
    }

    deposit() {
        this._initiativeService.deposit(this.initiativeDeposit).then(initiativeDeposit => {
            this.saveWasSuccessful = true;
            this.initiativeDeposit = new InitiativeDeposit();
        });
    }

}

class InitiativeAccount {
    id: string;
    name: string;
}

class InitiativeItem {
    id: string;
    name: string;
}