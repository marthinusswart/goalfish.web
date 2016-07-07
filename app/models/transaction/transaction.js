"use strict";
var Transaction = (function () {
    function Transaction() {
        this.externalRef = "";
        this.id = "";
        this.referenceId = "";
        this.description = "";
        this.classification = "";
        this.amount = 0;
        this.date = new Date();
        this.underlyingAccount = "";
    }
    Transaction.prototype.fromJson = function (transaction) {
        this.externalRef = transaction.externalRef;
        this.id = transaction.id;
        this.classification = transaction.classification;
        this.referenceId = transaction.referenceId;
        this.description = transaction.description;
        this.amount = transaction.amount;
        this.date = transaction.date;
        this.underlyingAccount = transaction.underlyingAccount;
        return this;
    };
    return Transaction;
}());
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map