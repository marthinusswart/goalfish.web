import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { Token } from '../../models/security/token';
import { Credentials } from '../../models/security/credentials';
import { ConfigService } from '../config/config.service';

@Injectable()
export class SecurityService {
    url = "";
    api = "/api/v1/security";
    activeTokenSubject: Subject<Token> = new BehaviorSubject<Token>(null);
    token: Token;

    constructor(private _http: Http, private _configService: ConfigService) {
        this.url = _configService.url;
     }

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
                self.activeTokenSubject.next(self.token);
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