import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Initiative } from '../../models/initiative/initiative'

@Injectable()
export class InitiativeService {
  url = "http://localhost:3010";
  api = "/api/v1/initiative"

  constructor(private _http: Http) {

  }

  getInitiatives() {
    let headers = new Headers({
      'x-access-token': 'MEM0001'
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

  updateInitiative(initiative: Initiative){
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this._http.put(this.url + this.api + "/" + initiative.externalRef, JSON.stringify(initiative), { headers: headers })
      .map((resp: Response) => resp.json())
      .map(initiative => { return this.toInitiative(initiative); })
      .toPromise();
  }

  getHero(id: string) {
    /*return Promise.resolve(HEROES).then(
      heroes => heroes.filter(hero => hero.id === id)[0]
    );*/
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

}