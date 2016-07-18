import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Budget } from '../../models/budget/budget';
import { MemberService } from '../member/member.service';
import { SecurityService } from '../security/security.service';

@Injectable()
export class BudgetService {
  url = "http://localhost:3010";
  api = "/api/v1/budget"

  constructor(private _http: Http, private _memberService: MemberService, private _securityService: SecurityService) { }

  getBudgets() {
    let headers = new Headers({
      'x-access-token': this._securityService.token.token
    });

    return this._http.get(this.url + this.api, { headers: headers })
      .map((resp: Response) => resp.json())
      .map(budgets => { return this.toBudgetArray(budgets); })
      .toPromise();
  }

  addBudget(budget: Budget) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.post(this.url + this.api, JSON.stringify(budget), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(budget => { return this.toBudget(budget); })
      .toPromise();
  }

  updateBudget(budget: Budget) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.put(this.url + this.api + "/" + budget.externalRef, JSON.stringify(budget), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(budget => { return this.toBudget(budget); })
      .toPromise();
  }

 reconcile() {
    console.log(this._securityService.token.token);
    
    let headers = new Headers({
      'x-access-token': this._securityService.token.token
    });

    return this._http.post(this.url + this.api + "/reconcile", "{}", { headers: headers })
      .map((resp: Response) => resp.json())
      .map(budgets => { return this.toBudgetArray(budgets); })
      .toPromise();
  }

  toBudgetArray(budgets: any[]) {
    let budgetsArray: Budget[] = [];
    budgetsArray = budgets.map(budget => new Budget().fromJson(budget));
    return budgetsArray;
  }

  toBudget(budgetJson: any) {
    let budget: Budget = new Budget();
    budget = budget.fromJson(budgetJson);
    return budget;
  }

}