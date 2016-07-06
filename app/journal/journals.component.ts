import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from '../services/journal/journal.service';
import { Journal } from '../models/journal/journal'

@Component({
  selector: "journals",
  templateUrl: "app/journal/journals.component.html",
  styleUrls: ["app/journal/journals.component.css"]
})
export class JournalsComponent implements OnInit {

  allJournals: Journal[] = [];

  constructor(private _router: Router, private _journalService: JournalService) { }

  ngOnInit() {
    this._journalService.getJournals().then(journals => this.allJournals = journals);
  }

  gotoNewJournal() {
    let link = ['newjournal'];
    this._router.navigate(link);
  }
}