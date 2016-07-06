"use strict";
var Budget = (function () {
    function Budget() {
    }
    Budget.prototype.fromJsonBudget = function (budget) {
        this.externalRef = budget.externalRef;
        this.id = budget.id;
        this.name = budget.name;
        this.description = budget.description;
        this.balance = budget.balance;
        this.underlyingAccount = budget.underlyingAccount;
        this.instalmentAmount = budget.instalmentAmount;
        this.frequency = budget.frequency;
        this.memberId = budget.memberId;
        return this;
    };
    return Budget;
}());
exports.Budget = Budget;
//# sourceMappingURL=budget.js.map