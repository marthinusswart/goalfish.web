"use strict";
var UnderlyingAccount = (function () {
    function UnderlyingAccount() {
        this.externalRef = "";
        this.id = "";
        this.name = "";
        this.description = "";
        this.productName = "";
        this.balance = 0;
        this.accountNumber = "";
        this.holdingInstitution = "";
        this.interestRate = 0;
        this.memberId = "";
    }
    UnderlyingAccount.prototype.fromJson = function (underlyingAccount) {
        this.externalRef = underlyingAccount.externalRef;
        this.id = underlyingAccount.id;
        this.name = underlyingAccount.name;
        this.productName = underlyingAccount.productName;
        this.description = underlyingAccount.description;
        this.balance = underlyingAccount.balance;
        this.interestRate = underlyingAccount.interestRate;
        this.accountNumber = underlyingAccount.accountNumber;
        this.holdingInstitution = underlyingAccount.holdingInstitution;
        this.memberId = underlyingAccount.memberId;
        return this;
    };
    return UnderlyingAccount;
}());
exports.UnderlyingAccount = UnderlyingAccount;
//# sourceMappingURL=underlyingAccount.js.map