"use strict";
var Member = (function () {
    function Member(member) {
        this.externalRef = member.externalRef;
        this.id = member.id;
        this.salutation = member.salutation;
        this.name = member.name;
        this.surname = member.surname;
        this.email = member.email;
    }
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=member.js.map