import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "postings",
  templateUrl: "app/posting/postings.component.html",
  styleUrls: ["app/posting/postings.component.css"]
})
export class PostingsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {

  }

}