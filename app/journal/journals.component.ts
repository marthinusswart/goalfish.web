import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "journals",
  templateUrl: "app/journal/journals.component.html",
  styleUrls: ["app/journal/journals.component.css"]
})
export class JournalsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

  }

}