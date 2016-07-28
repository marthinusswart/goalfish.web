import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { CreditNote } from '../../models/creditnote/creditnote';
import { MemberService } from '../member/member.service';
import { SecurityService } from '../security/security.service';
import { ConfigService } from '../config/config.service';

@Injectable()
export class CreditNoteService {
  url = "";
  api = "/api/v1/creditnote"

  constructor(private _http: Http, private _memberService: MemberService, 
  private _securityService: SecurityService, private _configService: ConfigService) { 
    this.url = _configService.url;
  }

  getCreditNotes() {
    let headers = new Headers({
      'x-access-token': this._securityService.token.token
    });

    return this._http.get(this.url + this.api, { headers: headers })
      .map((resp: Response) => resp.json())
      .map(budgets => { return this.toCreditNoteArray(budgets); })
      .toPromise();
  }

  addCreditNote(creditNote: CreditNote) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.url + this.api, JSON.stringify(creditNote), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(crNote => { return this.toCreditNote(crNote); })
      .toPromise();
  }

  updateCreditNote(creditNote: CreditNote) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.put(this.url + this.api + "/" + creditNote.externalRef, JSON.stringify(creditNote), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(crNote => { return this.toCreditNote(crNote); })
      .toPromise();
  }

  processCreditNote(creditNote: CreditNote) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let creditNoteArray = [creditNote.id];
    return this._http.post(this.url + this.api + "/process", JSON.stringify(creditNoteArray), { headers: headers })
      .map((resp: Response) => creditNote.state = "Processed")
      .toPromise();
  }

  toCreditNoteArray(creditNotes: any[]) {
    let crNoteArray: CreditNote[] = [];
    crNoteArray = creditNotes.map(crNote => new CreditNote().fromJson(crNote));
    return crNoteArray;
  }

  toCreditNote(creditNoteJson: any) {
    let crNote: CreditNote = new CreditNote();
    crNote = crNote.fromJson(creditNoteJson);
    return crNote;
  }

}