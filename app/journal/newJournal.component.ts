import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from '../services/journal/journal.service';
import { Journal } from '../models/journal/journal';
import { KeyService } from '../services/key/key.service';
import { SecurityService } from '../services/security/security.service';
import { Token } from '../models/security/token';

@Component({
  selector: "newJournal",
  templateUrl: "app/journal/newJournal.component.html",
  styleUrls: ["app/journal/newJournal.component.css"]
})
export class NewJournalComponent implements OnInit {

  journal: Journal;
  accounts: string[] = [];
  saveWasSuccessful: boolean = false;
  saveWasUnsuccessful: boolean = false;

  constructor(private _router: Router, private _journalService: JournalService, 
  private _keyService: KeyService, private _securityService: SecurityService) {
    this.journal = new Journal();
  }

  ngOnInit() {
    this.initJournal();
    this._securityService.activeTokenSubject.subscribe((token: Token) => {
            this.accounts = token.accounts;
        })
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
  }

}