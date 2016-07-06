import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Posting } from '../../models/posting/posting'

@Injectable()
export class PostingService {
  url = "http://localhost:3010";
  api = "/api/v1/posting"

  constructor(private _http: Http) {

  }

  getPostings() {
    return this._http.get(this.url + this.api)
      .map((resp: Response) => resp.json())
      .map(postings => { return this.toPostingArray(postings); })
      .toPromise();
  }

  addPosting(posting: Posting) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.url + this.api, JSON.stringify(posting), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(posting => { return this.toPosting(posting); })
      .toPromise();
  }

  getHero(id: string) {
    /*return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );*/
  }

  toPostingArray(postings: any[]) {
    let postingsArray: Posting[] = [];
    postingsArray = postings.map(posting => new Posting().fromJson(posting));
    return postingsArray;
  }

  toPosting(postingJson: any) {
    let posting: Posting = new Posting();
    posting = posting.fromJson(postingJson);
    return posting;
  }

}