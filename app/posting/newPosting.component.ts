import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostingService } from '../services/posting/posting.service';
import { Posting } from '../models/posting/posting'

@Component({
  selector: "newPosting",
  templateUrl: "app/posting/newPosting.component.html",
  styleUrls: ["app/posting/newPosting.component.css"]
})
export class NewPostingComponent implements OnInit {

  posting: Posting;

  constructor(private _router: Router, private _postingService: PostingService) { 
    this.posting = new Posting();
  }

  ngOnInit() {
    
  }

  save(){
    this._postingService.addPosting(this.posting).then(posting => alert("Posting _id is: " + posting.externalRef));
  }

}