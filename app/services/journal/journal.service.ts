import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Journal } from '../../models/journal/journal';
import { MemberService } from '../member/member.service';
import { SecurityService } from '../security/security.service';

@Injectable()
export class JournalService {
  url = "http://localhost:3010";
  api = "/api/v1/journal"

  constructor(private _http: Http, private _memberService: MemberService, private _securityService: SecurityService) { }

  getJournals() {
    let headers = new Headers({
      'x-access-token': this._securityService.token.token
    });

    return this._http.get(this.url + this.api, { headers: headers })
      .map((resp: Response) => resp.json())
      .map(journals => { return this.toJournalArray(journals); })
      .toPromise();
  }

  addJournal(journal: Journal) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.url + this.api, JSON.stringify(journal), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(journal => { return this.toJournal(journal); })
      .toPromise();
  }

  getHero(id: string) {
    /*return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );*/
  }

  toJournalArray(journals: any[]) {
    let journalsArray: Journal[] = [];
    journalsArray = journals.map(journal => new Journal().fromJson(journal));
    return journalsArray;
  }

  toJournal(journalJson: any) {
    let journal: Journal = new Journal();
    journal = journal.fromJson(journalJson);
    return journal;
  }

}