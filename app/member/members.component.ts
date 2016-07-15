import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../services/member/member.service';
import { SecurityService } from '../services/security/security.service';
import { Member } from '../models/member/member';
import { Token } from '../models/security/token';

@Component({
  selector: "members",
  templateUrl: "app/member/members.component.html",
  styleUrls: ["app/member/members.component.css"]
})
export class MembersComponent implements OnInit {

  allMembers: Member[] = [];

  constructor(private _router: Router, private _memberService: MemberService,
  private _securityService: SecurityService) { }

  ngOnInit() {
    this._memberService.getMembers(new Token()).then(members => this.allMembers = members);
  }

  onSelect(member: Member){
    this._securityService.login(member.email, "");
    this._memberService.activeMemberSubject.next(member);
  }

}