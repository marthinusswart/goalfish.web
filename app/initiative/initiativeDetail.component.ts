import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { InitiativeService } from '../services/initiative/initiative.service';
import { Initiative } from '../models/initiative/initiative'

@Component({
    selector: "initiative-detail",
    templateUrl: "app/initiative/initiativeDetail.component.html",
    styleUrls: ["app/initiative/initiativeDetail.component.css"]
})
export class InitiativeDetailComponent {

    @Input()
    initiative: Initiative;

    constructor(private _router: Router, private _initiativeService: InitiativeService) { 
       
    }

    save(){
        this._initiativeService.updateInitiative(this.initiative).then(initiative => alert("Initiative _id is: " + initiative.externalRef));
    }

}