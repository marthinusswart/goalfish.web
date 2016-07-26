import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditNoteService } from '../services/creditnote/creditnote.service';
import { CreditNote } from '../models/creditnote/creditnote'
//import { BudgetDetailComponent } from './budgetDetail.component';

@Component({
  selector: "creditnotes",
  templateUrl: "app/creditnote/creditnotes.component.html",
  styleUrls: ["app/creditnote/creditnotes.component.css"]
  //directives: [CreditNoteDetailComponent]
})
export class CreditNotesComponent implements OnInit {

  allCreditNotes: CreditNote[] = [];
  selectedCrNote: CreditNote;

  constructor(private _router: Router, private _crNoteService: CreditNoteService) { }

  ngOnInit() {
    this._crNoteService.getCreditNotes().then(crNotes => this.allCreditNotes = crNotes);
  }

  gotoNewCreditNote() {
    let link = ['newcreditnote'];
    this._router.navigate(link);
  }

  onSelect(creditNote: CreditNote) {
    this.selectedCrNote = creditNote;
  }

}