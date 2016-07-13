"use strict";
var Key = (function () {
    function Key() {
    }
    Key.prototype.fromJson = function (key) {
        this.externalRef = key.externalRef;
        this.name = key.name;
        this.key = key.key;
        return this;
    };
    return Key;
}());
exports.Key = Key;
//# sourceMappingURL=key.js.map