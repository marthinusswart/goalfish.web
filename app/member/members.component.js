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
//import { Hero } from './hero';
//import { HeroDetailComponent } from './hero-detail.component';
//import { HeroService } from './hero.service';
var MembersComponent = (function () {
    //heroes: Hero[];
    //selectedHero: Hero;
    function MembersComponent(_router) {
        this._router = _router;
    }
    /*
      getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
      }
    */
    MembersComponent.prototype.ngOnInit = function () {
        //this.getHeroes();
    };
    //onSelect(hero: Hero) { this.selectedHero = hero; }
    MembersComponent.prototype.gotoDetail = function () {
        //this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    };
    MembersComponent = __decorate([
        core_1.Component({
            selector: "members",
            templateUrl: "app/member/members.component.html",
            styleUrls: ["app/member/members.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MembersComponent);
    return MembersComponent;
}());
exports.MembersComponent = MembersComponent;
//# sourceMappingURL=members.component.js.map