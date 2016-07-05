import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { Hero } from './hero';
//import { HeroDetailComponent } from './hero-detail.component';
//import { HeroService } from './hero.service';

@Component({
  selector: "members",
  templateUrl: "app/member/members.component.html",
  styleUrls:  ["app/member/members.component.css"]
})
export class MembersComponent implements OnInit {
  //heroes: Hero[];
  //selectedHero: Hero;

  constructor(
    private _router: Router) { }
/*
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
*/
  
  ngOnInit() {
    //this.getHeroes();
  }

  //onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    //this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}