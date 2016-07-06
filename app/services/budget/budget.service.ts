import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Budget } from '../../models/budget/budget'

@Injectable()
export class BudgetService {
  url = "http://localhost:3010";
  api = "/api/v1/budget"

  constructor(private _http: Http) {

  }

  getBudgets() {
    return this._http.get(this.url + this.api)
      .map((resp: Response) => resp.json())
      .map(budgets => { return this.toBudgetArray(budgets); })
      .toPromise();
  }

  getHero(id: string) {
    /*return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );*/
  }

  toBudgetArray(budgets: any[]) {
    let budgetsArray: Budget[] = [];
    budgetsArray = budgets.map(budget => new Budget().fromJsonBudget(budget));
    return budgetsArray;
  }

}