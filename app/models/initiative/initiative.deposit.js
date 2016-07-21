"use strict";
var InitiativeDeposit = (function () {
    function InitiativeDeposit() {
        this.initiativeId = "";
        this.fromAccountId = "";
        this.toAccountId = "";
        this.description = "";
        this.amount = 0;
        this.depositDate = new Date();
    }
    InitiativeDeposit.prototype.fromJson = function (deposit) {
        this.initiativeId = deposit.budgetId;
        this.fromAccountId = deposit.fromAccountId;
        this.toAccountId = deposit.toAccountId;
        this.description = deposit.description;
        this.amount = deposit.amount;
        this.depositDate = deposit.depositDate;
        return this;
    };
    return InitiativeDeposit;
}());
exports.InitiativeDeposit = InitiativeDeposit;
//# sourceMappingURL=initiative.deposit.js.map