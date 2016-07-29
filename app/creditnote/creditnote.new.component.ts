import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditNoteService } from '../services/creditnote/creditnote.service';
import { CreditNote } from '../models/creditnote/creditnote';
import { KeyService } from '../services/key/key.service';
import { SecurityService } from '../services/security/security.service';
import { Token } from '../models/security/token';
import { UnderlyingAccountService } from '../services/underlyingaccount/underlyingAccount.service';

@Component({
  selector: "newCreditNote",
  templateUrl: "app/creditnote/creditnote.new.component.html",
  styleUrls: ["app/creditnote/creditnote.new.component.css"]
})
export class NewCreditNoteComponent implements OnInit {

  creditNote: CreditNote;
  accounts: CreditNoteAccount[] = [];
  saveWasSuccessful: boolean = false;
  saveWasUnsuccessful: boolean = false;

  constructor(private _router: Router, private _crNoteService: CreditNoteService,
    private _keyService: KeyService, private _securityService: SecurityService,
    private _underlyingAccountService: UnderlyingAccountService) {
    this.creditNote = new CreditNote();
  }

  ngOnInit() {
    let self = this;
    this.initCreditNote();

    this._securityService.activeTokenSubject.subscribe((token: Token) => {
      this._underlyingAccountService.getAccounts().then(allAccounts => {
        self.accounts = [];
        self.accounts.push(new CreditNoteAccount());
        allAccounts.forEach(account => {
          let crnAccount = new CreditNoteAccount();
          crnAccount.id = account.id;
          crnAccount.name = account.id + " | " + account.name;
          self.accounts.push(crnAccount);
        });
      });
    });
  }

  save() {
    this._crNoteService.addCreditNote(this.creditNote).then(crNote => {
      this.saveWasSuccessful = true;
      this.initCreditNote();
    });
  }

  initCreditNote() {
    this._keyService.getNextKeyByName("creditnote").then(key => { this.creditNote.id = this.creditNote.createIdFromKey(key.key) });
    this.creditNote.amount = 0;
    this.creditNote.description = "";
    this.creditNote.name = "";
    this.creditNote.memberId = this._securityService.token.memberId;
  }

}

class CreditNoteAccount {
  id: string;
  name: string;
}