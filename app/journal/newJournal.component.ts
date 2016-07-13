import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from '../services/journal/journal.service';
import { Journal } from '../models/journal/journal';
import { KeyService } from '../services/key/key.service';

@Component({
  selector: "newJournal",
  templateUrl: "app/journal/newJournal.component.html",
  styleUrls: ["app/journal/newJournal.component.css"]
})
export class NewJournalComponent implements OnInit {

  journal: Journal;
  saveWasSuccessful: boolean = false;
  saveWasUnsuccessful: boolean = false;

  constructor(private _router: Router, private _journalService: JournalService, private _keyService: KeyService) {
    this.journal = new Journal();
  }

  ngOnInit() {
    this.initJournal();
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