import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InitiativeService } from '../services/initiative/initiative.service';
import { Initiative } from '../models/initiative/initiative'

@Component({
  selector: "initiatives",
  templateUrl: "app/initiative/initiatives.component.html",
  styleUrls: ["app/initiative/initiatives.component.css"]
})
export class InitiativesComponent implements OnInit {

  allInitiatives: Initiative[] = [];

  constructor(private _router: Router, private _initiativeService: InitiativeService) { }

  ngOnInit() {
    this._initiativeService.getInitiatives().then(initiatives => this.allInitiatives = initiatives);
  }

  gotoNewInitiative() {
    let link = ['newinitiative'];
    this._router.navigate(link);
  }

}