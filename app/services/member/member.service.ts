import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { Member } from '../../models/member/member';
import { Token } from '../../models/security/token';

//import { Hero } from './hero';
//import { HEROES } from './mock-heroes';

@Injectable()
export class MemberService {
  url = "http://localhost:3010";
  api = "/api/v1/member";
  activeMemberSubject: Subject<Member> = new BehaviorSubject<Member>(null);
  activeMember: Member;

  constructor(private _http: Http) {
    let member = new Member();
    member.name = "anonymous";
    this.activeMemberSubject.next(member);

    this.activeMemberSubject.subscribe((member: Member) => {
      this.activeMember = member;
    });
  }

  getMembers(token: Token) {
    let headers = new Headers({
      'x-access-token': token.token
    });

    return this._http.get(this.url + this.api, { headers:headers })
      .map((resp: Response) => resp.json())
      .map(members => { return this.toMemberArray(members); })
      .toPromise();
  }

  toMemberArray(members: any[]) {
    let membersArray: Member[] = [];
    membersArray = members.map(member => { return new Member().init(member) });
    return membersArray;
  }

}