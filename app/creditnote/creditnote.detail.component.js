"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var creditnote_service_1 = require('../services/creditnote/creditnote.service');
var CreditNoteDetailComponent = (function () {
    function CreditNoteDetailComponent(_router, _crNoteService) {
        this._router = _router;
        this._crNoteService = _crNoteService;
        this.saveWasSuccessful = false;
        this.processingWasSuccessful = false;
        this.saveWasUnsuccessful = false;
    }
    Object.defineProperty(CreditNoteDetailComponent.prototype, "creditNote", {
        get: function () {
            return this._crNote;
        },
        set: function (crNote) {
            this._crNote = crNote;
            this.saveWasSuccessful = false;
            this.saveWasUnsuccessful = false;
        },
        enumerable: true,
        configurable: true
    });
    CreditNoteDetailComponent.prototype.save = function () {
        var _this = this;
        this._crNoteService.updateCreditNote(this.creditNote).then(function (crNote) { return _this.saveWasSuccessful = true; });
    };
    CreditNoteDetailComponent.prototype.process = function () {
        var _this = this;
        this._crNoteService.processCreditNote(this.creditNote).then(function (crNote) { return _this.processingWasSuccessful = true; });
    };
    CreditNoteDetailComponent = __decorate([
        core_1.Component({
            selector: "creditnote-detail",
            templateUrl: "app/creditnote/creditnote.detail.component.html",
            styleUrls: ["app/creditnote/creditnote.detail.component.css"],
            inputs: ["creditNote"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, creditnote_service_1.CreditNoteService])
    ], CreditNoteDetailComponent);
    return CreditNoteDetailComponent;
}());
exports.CreditNoteDetailComponent = CreditNoteDetailComponent;
//# sourceMappingURL=creditnote.detail.component.js.map