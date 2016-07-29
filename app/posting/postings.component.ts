import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PostingService } from '../services/posting/posting.service';
import { Posting } from '../models/posting/posting';
import { DOCUMENT } from '@angular/platform-browser';

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

  constructor(private _router: Router, private _postingService: PostingService,
  @Inject(DOCUMENT) private _document) { }

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

   selectAll(elementId) {
    var element = this._document.getElementById(elementId);
    var body = this._document.body, range, sel;
    if (this._document.createRange && window.getSelection) {
      range = this._document.createRange();
      sel = window.getSelection();
      sel.removeAllRanges();

      try {
        range.selectNodeContents(element); sel.addRange(range);
      } catch (e) {
        range.selectNode(element); sel.addRange(range);
      }
    } /*else if (body.createTextRange) {
      range = body.createTextRange();
      range.moveToElementText(element);
      range.select();
    }*/
  }
}