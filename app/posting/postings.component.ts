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
  wasSuccess: boolean = false;
  wasFailure: boolean = false;
  processingMessage: string;

  constructor(private _router: Router, private _postingService: PostingService) { }

  ngOnInit() {
    this._postingService.getPostings().then(postings => this.allPostings = postings);
  }

  gotoNewPosting() {
    let link = ['newposting'];
    this._router.navigate(link);
  }

  processJournals(){
    this.processingMessage = "Journal processing completed successfully";
    this._postingService.processJournals().then(result => this.wasSuccess = true);
  }

  processTransactions(){
    this.processingMessage = "Transaction processing completed successfully";
    this._postingService.processTransactions().then(result => this.wasSuccess = true);
  }
}