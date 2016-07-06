"use strict";
var Posting = (function () {
    function Posting() {
        this.externalRef = "";
        this.id = "";
        this.referenceId = "";
        this.description = "";
        this.type = "";
        this.amount = 0;
        this.date = new Date();
        this.accountNumber = "";
    }
    Posting.prototype.fromJson = function (posting) {
        this.externalRef = posting.externalRef;
        this.id = posting.id;
        this.type = posting.type;
        this.referenceId = posting.referenceId;
        this.description = posting.description;
        this.amount = posting.amount;
        this.date = posting.date;
        this.accountNumber = posting.accountNumber;
        return this;
    };
    return Posting;
}());
exports.Posting = Posting;
//# sourceMappingURL=posting.js.map