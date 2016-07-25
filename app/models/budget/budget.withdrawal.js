"use strict";
var BudgetWithdrawal = (function () {
    function BudgetWithdrawal() {
        this.budgetId = "";
        this.fromAccountId = "";
        this.description = "";
        this.amount = 0;
        this.withdrawalDate = new Date();
    }
    BudgetWithdrawal.prototype.fromJson = function (deposit) {
        this.budgetId = deposit.budgetId;
        this.fromAccountId = deposit.fromAccountId;
        this.description = deposit.description;
        this.amount = deposit.amount;
        this.withdrawalDate = deposit.depositDate;
        return this;
    };
    return BudgetWithdrawal;
}());
exports.BudgetWithdrawal = BudgetWithdrawal;
//# sourceMappingURL=budget.withdrawal.js.map