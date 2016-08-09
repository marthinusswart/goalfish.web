"use strict";
var express = require('express');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var router = express.Router();
var url = "http://localhost:3010";
var api = "/api/v1/member";
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
    .options('/', function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type,Authorization,Accept,x-access-token");
    res.header("Content-Type", "application/json");
    res.status(200).send("OK");
});
module.exports = router;
//# sourceMappingURL=member.route.js.map