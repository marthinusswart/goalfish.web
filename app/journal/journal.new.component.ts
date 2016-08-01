import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from '../services/journal/journal.service';
import { Journal } from '../models/journal/journal';
import { KeyService } from '../services/key/key.service';
import { SecurityService } from '../services/security/security.service';
import { Token } from '../models/security/token';
import { UnderlyingAccountService } from '../services/underlyingaccount/underlyingAccount.service';

@Component({
  selector: "newJournal",
  templateUrl: "app/journal/journal.new.component.html",
  styleUrls: ["app/journal/journal.new.component.css"]
})
export class NewJournalComponent implements OnInit {

  journal: Journal;
  accounts: JournalAccount[] = [];
  saveWasSuccessful: boolean = false;
  saveWasUnsuccessful: boolean = false;

  constructor(private _router: Router, private _journalService: JournalService,
    private _keyService: KeyService, private _securityService: SecurityService,
    private _underlyingAccountService: UnderlyingAccountService) {
    this.journal = new Journal();    
  }

  ngOnInit() {
    let self = this;
    this.initJournal();
    this._securityService.activeTokenSubject.subscribe((token: Token) => {
      this._underlyingAccountService.getAccounts().then(allAccounts => {
        self.accounts = [];
        self.accounts.push(new JournalAccount());
        allAccounts.forEach(account => {
          let jnlAccount = new JournalAccount();
          jnlAccount.id = account.id;
          jnlAccount.name = account.id + " | " + account.name;
          self.accounts.push(jnlAccount);
        });
      });
    });
  }

  save() {
    this._journalService.addJournal(this.journal).then(journal => {
      this.saveWasSuccessful = true;
      this.initJournal();
    });
  }

  initJournal() {
    this._keyService.getNextKeyByName("journal").then(key => { this.journal.id = this.journal.createIdFromKey(key.key) });
    this.journal.amount = 0;
    this.journal.description = "";
    this.journal.name = "";
    this.journal.memberId = this._securityService.token.memberId;
  }

}

class JournalAccount {
  id: string;
  name: string;
}