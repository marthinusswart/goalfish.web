import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditNoteService } from '../services/creditnote/creditnote.service';
import { CreditNote } from '../models/creditnote/creditnote'
import { CreditNoteDetailComponent } from './creditnote.detail.component';

@Component({
  selector: "creditnotes",
  templateUrl: "app/creditnote/creditnotes.component.html",
  styleUrls: ["app/creditnote/creditnotes.component.css"],
  directives: [CreditNoteDetailComponent]
})
export class CreditNotesComponent implements OnInit {

  allCreditNotes: CreditNote[] = [];
  selectedCreditNote: CreditNote;

  constructor(private _router: Router, private _crNoteService: CreditNoteService) { }

  ngOnInit() {
    this._crNoteService.getCreditNotes().then(crNotes => this.allCreditNotes = crNotes);
  }

  gotoNewCreditNote() {
    let link = ['newcreditnote'];
    this._router.navigate(link);
  }

  onSelect(creditNote: CreditNote) {
    this.selectedCreditNote = creditNote;    
  }

   selectAll(elementId) {
    var element = document.getElementById(elementId);
    var body = document.body, range, sel;
    if (document.createRange && window.getSelection) {      
      range = document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();

      try {
        range.selectNodeContents(element); sel.addRange(range);
      } catch (e) {
        range.selectNode(element); sel.addRange(range);
      }
    }
  }

}