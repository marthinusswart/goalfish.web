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
        this.isReconciled = false;
        this.calculatedBalance = 0;
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
        if (initiative.isReconciled !== undefined) {
            this.isReconciled = initiative.isReconciled;
            this.calculatedBalance = initiative.calculatedBalance;
        }
        return this;
    };
    Initiative.prototype.createIdFromKey = function (key) {
        var keyStr = "INI" + key;
        if (key < 1000) {
            keyStr = "INI" + ("0000" + key).slice(-4);
        }
        return keyStr;
    };
    return Initiative;
}());
exports.Initiative = Initiative;
//# sourceMappingURL=initiative.js.map