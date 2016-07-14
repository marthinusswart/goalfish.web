import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MemberService } from '../services/member/member.service';
import { Member } from '../models/member/member'

@Component({
  selector: "members",
  templateUrl: "app/member/members.component.html",
  styleUrls: ["app/member/members.component.css"]
})
export class MembersComponent implements OnInit {

  allMembers: Member[] = [];

  constructor(private _router: Router, private _memberService: MemberService) { }

  ngOnInit() {
    this._memberService.getMembers().then(members => this.allMembers = members);
  }

  onSelect(member: Member){
    this._memberService.activeMemberSubject.next(member);
  }

}