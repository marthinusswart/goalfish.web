import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Member } from '../../models/member/member'

//import { Hero } from './hero';
//import { HEROES } from './mock-heroes';

@Injectable()
export class MemberService {
  url = "http://localhost:3010";
  api = "/api/v1/member"

  constructor(private _http: Http) {

  }

  getMembers() {
    return this._http.get(this.url + this.api)
    .map((resp: Response) => resp.json())
    .map(members => {return this.toMemberArray(members);})
    .toPromise();
  }

  getHero(id: string) {
    /*return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );*/
  }

  toMemberArray(members: any[]){
    let membersArray: Member[] = [];
    return membersArray;
  }
  
}