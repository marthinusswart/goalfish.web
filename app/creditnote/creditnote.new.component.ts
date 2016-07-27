import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreditNoteService } from '../services/creditnote/creditnote.service';
import { CreditNote } from '../models/creditnote/creditnote';
import { KeyService } from '../services/key/key.service';
import { SecurityService } from '../services/security/security.service';
import { Token } from '../models/security/token';

@Component({
  selector: "newCreditNote",
  templateUrl: "app/creditnote/creditnote.new.component.html",
  styleUrls: ["app/creditnote/creditnote.new.component.css"]
})
export class NewCreditNoteComponent implements OnInit {

  creditNote: CreditNote;
  saveWasSuccessful: boolean = false;
  saveWasUnsuccessful: boolean = false;

  constructor(private _router: Router, private _crNoteService: CreditNoteService,
    private _keyService: KeyService, private _securityService: SecurityService) {
    this.creditNote = new CreditNote();
  }

  ngOnInit() {
    let self = this;
    this.initCreditNote();
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
  }

}