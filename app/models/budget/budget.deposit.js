"use strict";
var BudgetDeposit = (function () {
    function BudgetDeposit() {
        this.budgetId = "";
        this.fromAccountId = "";
        this.toAccountId = "";
        this.description = "";
        this.amount = 0;
        this.depositDate = new Date();
    }
    BudgetDeposit.prototype.fromJson = function (deposit) {
        this.budgetId = deposit.budgetId;
        this.fromAccountId = deposit.fromAccountId;
        this.toAccountId = deposit.toAccountId;
        this.description = deposit.description;
        this.amount = deposit.amount;
        this.depositDate = deposit.depositDate;
        return this;
    };
    return BudgetDeposit;
}());
exports.BudgetDeposit = BudgetDeposit;
//# sourceMappingURL=budget.deposit.js.map