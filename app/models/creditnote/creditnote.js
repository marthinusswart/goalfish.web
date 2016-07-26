"use strict";
var CreditNote = (function () {
    function CreditNote() {
        this.externalRef = "";
        this.id = "";
        this.name = "";
        this.description = "";
        this.amount = 0;
        this.fromAccount = "";
        this.toAccount = "";
        this.date = new Date();
        this.memberId = "";
        this.state = "Pending";
    }
    CreditNote.prototype.fromJson = function (creditNote) {
        this.externalRef = creditNote.externalRef;
        this.id = creditNote.id;
        this.name = creditNote.name;
        this.description = creditNote.description;
        this.amount = creditNote.amount;
        this.fromAccount = creditNote.fromAccount;
        this.toAccount = creditNote.toAccount;
        this.date = creditNote.date;
        this.memberId = creditNote.memberId;
        this.state = creditNote.state;
        return this;
    };
    CreditNote.prototype.createIdFromKey = function (key) {
        var keyStr = "CRN" + key;
        if (key < 1000) {
            keyStr = "CRN" + ("0000" + key).slice(-4);
        }
        return keyStr;
    };
    return CreditNote;
}());
exports.CreditNote = CreditNote;
//# sourceMappingURL=creditnote.js.map