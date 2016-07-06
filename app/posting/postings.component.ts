import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostingService } from '../services/posting/posting.service';
import { Posting } from '../models/posting/posting'

@Component({
  selector: "postings",
  templateUrl: "app/posting/postings.component.html",
  styleUrls: ["app/posting/postings.component.css"]
})
export class PostingsComponent implements OnInit {

  allPostings: Posting[] = [];

  constructor(private _router: Router, private _postingService: PostingService) { }

  ngOnInit() {
    this._postingService.getPostings().then(postings => this.allPostings = postings);
  }
  gotoNewPosting() {
    let link = ['newposting'];
    this._router.navigate(link);
  }
}