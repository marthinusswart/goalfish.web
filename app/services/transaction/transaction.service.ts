import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Transaction } from '../../models/transaction/transaction';
import { MemberService } from '../member/member.service';
import { SecurityService } from '../security/security.service';
import { ConfigService } from '../config/config.service';

@Injectable()
export class TransactionService {
  url = "";
  api = "/api/v1/transaction"

  constructor(private _http: Http, private _memberService: MemberService, 
  private _securityService: SecurityService, private _configService: ConfigService) {
    this.url = _configService.url;
   }

  getTransactions() {
    let headers = new Headers({
      'x-access-token': this._securityService.token.token
    });

    return this._http.get(this.url + this.api, { headers: headers })
      .map((resp: Response) => resp.json())
      .map(transactions => { return this.toTransactionArray(transactions); })
      .toPromise();
  }

  addTransaction(transaction: Transaction) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.url + this.api, JSON.stringify(transaction), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(posting => { return this.toTransaction(posting); })
      .toPromise();
  }

  getHero(id: string) {
    /*return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );*/
  }

  toTransactionArray(transactions: any[]) {
    let transactionsArray: Transaction[] = [];
    transactionsArray = transactions.map(transaction => new Transaction().fromJson(transaction));
    return transactionsArray;
  }

  toTransaction(transactionJson: any) {
    let transaction: Transaction = new Transaction();
    transaction = transaction.fromJson(transactionJson);
    return transaction;
  }

}