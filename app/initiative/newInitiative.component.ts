import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InitiativeService } from '../services/initiative/initiative.service';
import { Initiative } from '../models/initiative/initiative'

@Component({
  selector: "newInitiative",
  templateUrl: "app/initiative/newInitiative.component.html",
  styleUrls: ["app/initiative/newInitiative.component.css"]
})
export class NewInitiativeComponent implements OnInit {

  initiative: Initiative;

  constructor(private _router: Router, private _initiativeService: InitiativeService) { 
    this.initiative = new Initiative();
  }

  ngOnInit() {
    
  }

  save(){
    this._initiativeService.addInitiative(this.initiative).then(initiative => alert("Initiative _id is: " + initiative.externalRef));
  }

}