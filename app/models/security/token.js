"use strict";
var Token = (function () {
    function Token() {
        this.token = "";
        this.memberId = "";
        this.accounts = [];
    }
    Token.prototype.fromJson = function (token) {
        this.token = token.token;
        this.memberId = token.memberId;
        this.accounts = token.accounts;
        return this;
    };
    return Token;
}());
exports.Token = Token;
//# sourceMappingURL=token.js.map