import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InitiativeService } from '../services/initiative/initiative.service';
import { Initiative } from '../models/initiative/initiative'

@Component({
    selector: "initiative-detail",
    templateUrl: "app/initiative/initiativeDetail.component.html",
    styleUrls: ["app/initiative/initiativeDetail.component.css"],
    inputs:["initiative"]
})
export class InitiativeDetailComponent {

    private _initiative: Initiative;

     set initiative(initiative: Initiative) {
        this._initiative = initiative;
        this.saveWasSuccessful = false;
        this.saveWasUnsuccessful = false;
    }

    get initiative(): Initiative {
        return this._initiative;
    }

    saveWasSuccessful: boolean = false;
    saveWasUnsuccessful: boolean = false;

    constructor(private _router: Router, private _initiativeService: InitiativeService) { 
       
    }

    save(){
        this._initiativeService.updateInitiative(this.initiative).then(initiative => this.saveWasSuccessful = true);
    }

}