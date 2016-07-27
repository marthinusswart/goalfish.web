import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Budget } from '../../models/budget/budget';
import { BudgetDeposit } from '../../models/budget/budget.deposit';
import { BudgetWithdrawal } from '../../models/budget/budget.withdrawal';
import { MemberService } from '../member/member.service';
import { SecurityService } from '../security/security.service';
import { ConfigService } from '../config/config.service';

@Injectable()
export class BudgetService {
  url = "";
  api = "/api/v1/budget"

  constructor(private _http: Http, private _memberService: MemberService, 
  private _securityService: SecurityService, private _configService: ConfigService) { 
    this.url = _configService.url;
  }

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

  deposit(budgetDeposit: BudgetDeposit) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': this._securityService.token.token
    });

    return this._http.post(this.url + this.api + '/deposit', JSON.stringify(budgetDeposit), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(budgetDeposit => { return this.toBudgetDeposit(budgetDeposit); })
      .toPromise();
  }

   withdraw(budgetWithdrawal: BudgetWithdrawal) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'x-access-token': this._securityService.token.token
    });

    return this._http.post(this.url + this.api + '/withdraw', JSON.stringify(budgetWithdrawal), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(budgetWithdrawal => { return this.toBudgetWithdrawal(budgetWithdrawal); })
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

   toBudgetDeposit(budgetDepositJson: any) {
    let budgetDeposit: BudgetDeposit = new BudgetDeposit();
    budgetDeposit = budgetDeposit.fromJson(budgetDepositJson);
    return budgetDeposit;
  }

  toBudgetWithdrawal(budgetWithdrawalJson: any) {
    let budgetWithdrawal: BudgetWithdrawal = new BudgetWithdrawal();
    budgetWithdrawal = budgetWithdrawal.fromJson(budgetWithdrawalJson);
    return budgetWithdrawal;
  }

}