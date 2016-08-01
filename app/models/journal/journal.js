"use strict";
var Journal = (function () {
    function Journal() {
        this.externalRef = "";
        this.id = "";
        this.name = "";
        this.description = "";
        this.amount = 0;
        this.date = new Date();
        this.accountNumber = "";
        this.isPosted = "N";
        this.memberId = "";
    }
    Journal.prototype.fromJson = function (journal) {
        this.externalRef = journal.externalRef;
        this.id = journal.id;
        this.name = journal.name;
        this.description = journal.description;
        this.amount = journal.amount;
        this.date = journal.date;
        this.accountNumber = journal.accountNumber;
        this.isPosted = journal.isPosted;
        this.memberId = journal.memberId;
        return this;
    };
    Journal.prototype.createIdFromKey = function (key) {
        var keyStr = "JNL" + key;
        if (key < 1000) {
            keyStr = "JNL" + ("0000" + key).slice(-4);
        }
        return keyStr;
    };
    return Journal;
}());
exports.Journal = Journal;
//# sourceMappingURL=journal.js.map