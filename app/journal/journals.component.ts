import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from '../services/journal/journal.service';
import { Journal } from '../models/journal/journal';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: "journals",
  templateUrl: "app/journal/journals.component.html",
  styleUrls: ["app/journal/journals.component.css"]
})
export class JournalsComponent implements OnInit {

  allJournals: Journal[] = [];

  constructor(private _router: Router, private _journalService: JournalService,
    @Inject(DOCUMENT) private _document) { }

  ngOnInit() {
    this._journalService.getJournals().then(journals => this.allJournals = journals);
  }

  gotoNewJournal() {
    let link = ['newjournal'];
    this._router.navigate(link);
  }

  selectAll(elementId) {
    var element = this._document.getElementById(elementId);
    var body = this._document.body, range, sel;
    if (this._document.createRange && window.getSelection) {
      range = this._document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();

      try {
        range.selectNodeContents(element); sel.addRange(range);
      } catch (e) {
        range.selectNode(element); sel.addRange(range);
      }
    } else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(element);
      range.select();
    }
  }
}