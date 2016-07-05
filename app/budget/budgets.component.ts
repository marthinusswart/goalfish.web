import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "budgets",
  templateUrl: "app/budget/budgets.component.html",
  styleUrls: ["app/budget/budgets.component.css"]
})
export class BudgetsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

  }

}