"use strict";
var Initiative = (function () {
    function Initiative() {
        this.externalRef = "";
        this.id = "";
        this.name = "";
        this.description = "";
        this.balance = 0;
        this.underlyingAccount = "";
        this.instalmentAmount = 0;
        this.frequency = "";
        this.memberId = "";
        this.targetDate = new Date();
        this.targetBalance = 0;
    }
    Initiative.prototype.fromJson = function (initiative) {
        this.externalRef = initiative.externalRef;
        this.id = initiative.id;
        this.name = initiative.name;
        this.targetBalance = initiative.targetBalance;
        this.targetDate = initiative.targetDate;
        this.description = initiative.description;
        this.balance = initiative.balance;
        this.underlyingAccount = initiative.underlyingAccount;
        this.instalmentAmount = initiative.instalmentAmount;
        this.frequency = initiative.frequency;
        this.memberId = initiative.memberId;
        return this;
    };
    return Initiative;
}());
exports.Initiative = Initiative;
//# sourceMappingURL=initiative.js.map