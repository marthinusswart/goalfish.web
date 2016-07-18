import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction/transaction.service';
import { Transaction } from '../models/transaction/transaction'
import { KeyService } from '../services/key/key.service';
import { Token } from '../models/security/token';
import { SecurityService } from '../services/security/security.service';
import { BudgetService } from '../services/budget/budget.service';
import { InitiativeService } from '../services/initiative/initiative.service';
import { UnderlyingAccountService } from '../services/underlyingaccount/underlyingAccount.service';

@Component({
  selector: "newTransaction",
  templateUrl: "app/transaction/newTransaction.component.html",
  styleUrls: ["app/transaction/newTransaction.component.css"]
})
export class NewTransactionComponent implements OnInit {

  transaction: Transaction;
  accounts: TransactionAccount[] = [];
  saveWasSuccessful: boolean = false;
  saveWasUnsuccessful: boolean = false;
  classifications: string[] = ["", "Initiative", "Budget"];
  referenceIdLabel: string = "Reference Id";
  references: TransactionReference[] = [];

  constructor(private _router: Router, private _transactionService: TransactionService,
    private _keyService: KeyService, private _securityService: SecurityService,
    private _budgetService: BudgetService, private _initiativeService: InitiativeService,
    private _underlyingAccountService: UnderlyingAccountService) {
    this.transaction = new Transaction();
  }

  ngOnInit() {
    this.initTransaction();
    let self = this;

    this._securityService.activeTokenSubject.subscribe((token: Token) => {
      this._underlyingAccountService.getAccounts().then(allAccounts => {
        self.accounts = [];
        self.accounts.push(new TransactionAccount());
        allAccounts.forEach(account => {
          let trxAccount = new TransactionAccount();
          trxAccount.id = account.id;
          trxAccount.name = account.id + " | " + account.name;
          self.accounts.push(trxAccount);
        });
      });
    });
  }

  save() {
    if ((this.transaction.underlyingAccount === "") ||
      (this.transaction.underlyingAccount === undefined)) {
      alert("Error! No underlying account")
    }

    this._transactionService.addTransaction(this.transaction).then(transaction => {
      this.saveWasSuccessful = true;
      this.initTransaction();
    });
  }

  initTransaction() {
    this._keyService.getNextKeyByName("transaction").then(key => { this.transaction.id = this.transaction.createIdFromKey(key.key) });
    this.transaction.amount = 0;
    this.transaction.description = "";
  }

  onClassificationChange(classification: any) {
    this.transaction.classification = classification.value;
    this.referenceIdLabel = classification.value + " ID";

    if (classification.value === "Budget") {
      this.loadAvailableBudgets()
    } else if (classification.value === "Initiative") {
      this.loadAvailableInitiatives()
    }
  }

  loadAvailableBudgets() {
    let self = this;
    this._budgetService.getBudgets().then(budgets => {
      self.references = [];
      self.references.push(new TransactionReference());
      budgets.forEach(budget => {
        let trxReference = new TransactionReference();
        trxReference.id = budget.id;
        trxReference.name = budget.id + " | " + budget.name;
        self.references.push(trxReference);
      });
    });
  }

  loadAvailableInitiatives() {
    let self = this;
    this._initiativeService.getInitiatives().then(initiatives => {
      self.references = [];
      self.references.push(new TransactionReference());
      initiatives.forEach(initiative => {
        let trxReference = new TransactionReference();
        trxReference.id = initiative.id;
        trxReference.name = initiative.id + " | " + initiative.name;
        self.references.push(trxReference);
      });
    });
  }

}

class TransactionAccount {
  id: string;
  name: string;
}

class TransactionReference {
  id: string;
  name: string;
}