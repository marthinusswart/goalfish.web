"use strict";
var Budget = (function () {
    function Budget() {
        this.externalRef = "";
        this.id = "";
        this.name = "";
        this.description = "";
        this.balance = 0;
        this.underlyingAccount = "";
        this.instalmentAmount = 0;
        this.frequency = "";
        this.memberId = "";
        this.isReconciled = false;
        this.calculatedBalance = 0;
    }
    Budget.prototype.fromJson = function (budget) {
        this.externalRef = budget.externalRef;
        this.id = budget.id;
        this.name = budget.name;
        this.description = budget.description;
        this.balance = budget.balance;
        this.underlyingAccount = budget.underlyingAccount;
        this.instalmentAmount = budget.instalmentAmount;
        this.frequency = budget.frequency;
        this.memberId = budget.memberId;
        if (budget.isReconciled !== undefined) {
            this.isReconciled = budget.isReconciled;
            this.calculatedBalance = budget.calculatedBalance;
        }
        return this;
    };
    Budget.prototype.createIdFromKey = function (key) {
        var keyStr = "BGT" + key;
        if (key < 1000) {
            keyStr = "BGT" + ("0000" + key).slice(-4);
        }
        return keyStr;
    };
    return Budget;
}());
exports.Budget = Budget;
//# sourceMappingURL=budget.js.map