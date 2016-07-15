import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Token } from '../../models/security/token';
import { Credentials } from '../../models/security/credentials';

@Injectable()
export class SecurityService {
    url = "http://localhost:3010";
    api = "/api/v1/security";
    token: Token;

    constructor(private _http: Http) { }

    login(email: string, password: string) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let credentials = new Credentials();
        credentials.email = email;
        credentials.password = password;
        let self = this;

        return this._http.post(this.url + this.api + "/login", JSON.stringify(credentials), { headers:headers })
            .map((resp: Response) => resp.json())
            .map(tokenJson => {
                self.token = this.toToken(tokenJson)
                return self.token;
            })
            .toPromise();
    }

    toToken(tokenJson: any) {
        let token: Token = new Token();
        token = new Token().fromJson(tokenJson);
        return token;
    }

}