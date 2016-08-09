import express = require('express');
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Subject, BehaviorSubject } from 'rxjs/Rx';

let router = express.Router();
let url = "http://localhost:3010";
let api = "/api/v1/member";

router
    .get('/', function (req, res, next) {

/*
        let headers = new Headers({
            'x-access-token': ""
        });

        return this._http.get(url + api, { headers: headers })
            .map((resp: Response) => {res.status(200).send(resp.json());})
            .map(members => { return this.toMemberArray(members); })
            .toPromise();
            */
    })
    
    /*
    .get('/:id', function (req, res, next) {
       

        memberDataAcccessService.findById(req.params.id, function (err, member) {
            res.status(200).send(member);
        });

    })
    .put('/:id', function (req, res, next) {
        
        memberDataAcccessService.update(req.params.id, req.body, function (err, member) {
            res.status(200).send(member);
        });
    })
    .post('/', function (req, res, next) {
       
        memberDataAcccessService.save(req.body, function (err, member) {
            if (err === null) {
                res.status(201).send(member);
            }
            else {
                res.status(500).send(err.message);
            }
        });
    })*/
    .options('/', function (req, res, next) {
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
        res.header("Access-Control-Allow-Headers", "Origin,Content-Type,Authorization,Accept,x-access-token");
        res.header("Content-Type", "application/json");

        res.status(200).send("OK");
    })
    /*
    .post('/ping', function (req, res, next) {
        
        res.status(200).send("[" + Date.now() + "] pong");
    })
    .post('/longprocess', function (req, res, next) {
        
        res.status(200).send("[" + Date.now() + "] Not implemented yet");
    })*/
    ;

module.exports = router;