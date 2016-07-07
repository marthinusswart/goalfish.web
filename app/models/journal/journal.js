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
        return this;
    };
    return Journal;
}());
exports.Journal = Journal;
//# sourceMappingURL=journal.js.map