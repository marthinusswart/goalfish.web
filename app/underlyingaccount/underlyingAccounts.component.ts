import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "underlyingaccounts",
  templateUrl: "app/underlyingaccount/underlyingaccounts.component.html",
  styleUrls: ["app/underlyingaccount/underlyingaccounts.component.css"]
})
export class UnderlyingAccountsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

  }

}