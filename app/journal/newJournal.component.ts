import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from '../services/journal/journal.service';
import { Journal } from '../models/journal/journal'

@Component({
  selector: "newJournal",
  templateUrl: "app/journal/newJournal.component.html",
  styleUrls: ["app/journal/newJournal.component.css"]
})
export class NewJournalComponent implements OnInit {

  journal: Journal;

  constructor(private _router: Router, private _journalService: JournalService) { 
    this.journal = new Journal();
  }

  ngOnInit() {
    
  }

  save(){
    this._journalService.addJournal(this.journal).then(journal => alert("Journal _id is: " + journal.externalRef));
  }

}