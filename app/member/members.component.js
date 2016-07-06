"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var member_service_1 = require('../services/member/member.service');
var MembersComponent = (function () {
    function MembersComponent(_router, _memberService) {
        this._router = _router;
        this._memberService = _memberService;
        this.allMembers = [];
    }
    MembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._memberService.getMembers().then(function (members) { return _this.allMembers = members; });
    };
    MembersComponent = __decorate([
        core_1.Component({
            selector: "members",
            templateUrl: "app/member/members.component.html",
            styleUrls: ["app/member/members.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, member_service_1.MemberService])
    ], MembersComponent);
    return MembersComponent;
}());
exports.MembersComponent = MembersComponent;
//# sourceMappingURL=members.component.js.map