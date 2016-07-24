import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InitiativeService } from '../services/initiative/initiative.service';
import { Initiative } from '../models/initiative/initiative';
import { KeyService } from '../services/key/key.service';
import { SecurityService } from '../services/security/security.service';
import { Token } from '../models/security/token';

@Component({
  selector: "newInitiative",
  templateUrl: "app/initiative/newInitiative.component.html",
  styleUrls: ["app/initiative/newInitiative.component.css"]
})
export class NewInitiativeComponent implements OnInit {

  initiative: Initiative;
  saveWasSuccessful: boolean = false;
  saveWasUnsuccessful: boolean = false;

  constructor(private _router: Router, private _initiativeService: InitiativeService,
    private _securityService: SecurityService, private _keyService: KeyService) {
    this.initiative = new Initiative();
  }

  ngOnInit() {
    let self = this;
    this.initInitiative();
  }

  save() {
    this._initiativeService.addInitiative(this.initiative).then(Initiative => {
      this.saveWasSuccessful = true;
      this.initInitiative();
    }
    );
  }

  initInitiative() {
    this._keyService.getNextKeyByName("initiative").then(key => { this.initiative.id = this.initiative.createIdFromKey(key.key) });
    this.initiative.balance = 0;
    this.initiative.description = "";
    this.initiative.name = "";
  }

}