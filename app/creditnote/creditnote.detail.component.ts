import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CreditNoteService } from '../services/creditnote/creditnote.service';
import { CreditNote } from '../models/creditnote/creditnote';

@Component({
    selector: "creditnote-detail",
    templateUrl: "app/creditnote/creditnote.detail.component.html",
    styleUrls: ["app/creditnote/creditnote.detail.component.css"],
    inputs:["creditNote"]
})
export class CreditNoteDetailComponent {
   
    private _crNote: CreditNote;

    set creditNote(crNote: CreditNote) {
        this._crNote = crNote;
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
    }

    get creditNote(): CreditNote {
        return this._crNote;
    }

    saveWasSuccessful: boolean = false;
    processingWasSuccessful: boolean = false;
    saveWasUnsuccessful: boolean = false;

    constructor(private _router: Router, private _crNoteService: CreditNoteService) { 
       
    }

    save(){
        this._crNoteService.updateCreditNote(this.creditNote).then(crNote => this.saveWasSuccessful = true);
    }

    process(){
        this._crNoteService.processCreditNote(this.creditNote).then(crNote => this.processingWasSuccessful = true);
    }

}