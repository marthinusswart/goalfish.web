import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Subject, BehaviorSubject } from 'rxjs/Rx';
import { Token } from '../../models/security/token';
import { Credentials } from '../../models/security/credentials';
import { AppConfig } from '../../app.config';

@Injectable()
export class ConfigService {
    url:string = "http://localhost:3010";
    
    constructor(){        
    }
}