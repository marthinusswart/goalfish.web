import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Key } from '../../models/key/key'
import { ConfigService } from '../config/config.service';

@Injectable()
export class KeyService {
  url = "";
  api = "/api/v1/key"

  constructor(private _http: Http, private _configService: ConfigService) {
    this.url = _configService.url;
  }

  getNextKeyByName(keyName: string) {
    return this._http.get(this.url + this.api + "/nextkey/" + keyName)
      .map((resp: Response) => resp.json())
      .map(key => { return this.toKey(key); })
      .toPromise();
  }

  toKey(keyJson: any) {
    let key: Key = new Key();
    key = key.fromJson(keyJson);
    return key;
  }

}