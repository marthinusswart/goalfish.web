import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "initiatives",
  templateUrl: "app/initiative/initiatives.component.html",
  styleUrls: ["app/initiative/initiatives.component.css"]
})
export class InitiativesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

  }

}