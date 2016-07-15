import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { UnderlyingAccount } from '../../models/underlyingaccount/underlyingAccount';
import { MemberService } from '../member/member.service';
import { SecurityService } from '../security/security.service';

@Injectable()
export class UnderlyingAccountService {
  url = "http://localhost:3010";
  api = "/api/v1/underlyingaccount"

  constructor(private _http: Http, private _memberService: MemberService, private _securityService: SecurityService) { }

  getAccounts() {
    let headers = new Headers({
      'x-access-token': this._securityService.token.token
    });

    return this._http.get(this.url + this.api, { headers: headers })
      .map((resp: Response) => resp.json())
      .map(accounts => { return this.toAccountArray(accounts); })
      .toPromise();
  }

  addAccount(account: UnderlyingAccount) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.url + this.api, JSON.stringify(account), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(account => { return this.toAccount(account); })
      .toPromise();
  }

  updateAccount(account: UnderlyingAccount) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.put(this.url + this.api + "/" + account.externalRef, JSON.stringify(account), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(account => { return this.toAccount(account); })
      .toPromise();
  }

  getHero(id: string) {
    /*return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );*/
  }

  toAccountArray(accounts: any[]) {
    let accountArray: UnderlyingAccount[] = [];
    accountArray = accounts.map(account => new UnderlyingAccount().fromJson(account));
    return accountArray;
  }

  toAccount(accountJson: any) {
    let account: UnderlyingAccount = new UnderlyingAccount();
    account = account.fromJson(accountJson);
    return account;
  }

}