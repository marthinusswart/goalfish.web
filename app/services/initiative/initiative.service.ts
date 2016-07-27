import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Initiative } from '../../models/initiative/initiative';
import { InitiativeDeposit } from '../../models/initiative/initiative.deposit';
import { MemberService } from '../member/member.service';
import { SecurityService } from '../security/security.service';
import { ConfigService } from '../config/config.service';

@Injectable()
export class InitiativeService {
  url = "";
  api = "/api/v1/initiative"

  constructor(private _http: Http, private _memberService: MemberService, 
  private _securityService: SecurityService, private _configService: ConfigService) {
    this.url = _configService.url;
   }

  getInitiatives() {
    let headers = new Headers({
      'x-access-token': this._securityService.token.token
    });

    return this._http.get(this.url + this.api, { headers: headers })
      .map((resp: Response) => resp.json())
      .map(initiatives => { return this.toInitiativeArray(initiatives); })
      .toPromise();
  }

  addInitiative(initiative: Initiative) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.url + this.api, JSON.stringify(initiative), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(initiative => { return this.toInitiative(initiative); })
      .toPromise();
  }

   deposit(initiativeDeposit: InitiativeDeposit) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': this._securityService.token.token
    });

    return this._http.post(this.url + this.api + '/deposit', JSON.stringify(initiativeDeposit), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(budgetDeposit => { return this.toInitiativeDeposit(budgetDeposit); })
      .toPromise();
  }

  updateInitiative(initiative: Initiative) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.put(this.url + this.api + "/" + initiative.externalRef, JSON.stringify(initiative), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(initiative => { return this.toInitiative(initiative); })
      .toPromise();
  }

  reconcile() {

    let headers = new Headers({
      'x-access-token': this._securityService.token.token
    });

    return this._http.post(this.url + this.api + "/reconcile", "{}", { headers: headers })
      .map((resp: Response) => resp.json())
      .map(initiatives => { return this.toInitiativeArray(initiatives); })
      .toPromise();
  }

  toInitiativeArray(initiatives: any[]) {
    let initiativesArray: Initiative[] = [];
    initiativesArray = initiatives.map(initiative => new Initiative().fromJson(initiative));
    return initiativesArray;
  }

  toInitiative(initiativeJson: any) {
    let initiative: Initiative = new Initiative();
    initiative = initiative.fromJson(initiativeJson);
    return initiative;
  }

   toInitiativeDeposit(initiativeDepositJson: any) {
    let initiativeDeposit: InitiativeDeposit = new InitiativeDeposit();
    initiativeDeposit = initiativeDeposit.fromJson(initiativeDepositJson);
    return initiativeDeposit;
  }

}