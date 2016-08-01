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
var creditnote_detail_component_1 = require('./creditnote.detail.component');
var CreditNotesComponent = (function () {
    function CreditNotesComponent(_router, _crNoteService) {
        this._router = _router;
        this._crNoteService = _crNoteService;
        this.allCreditNotes = [];
    }
    CreditNotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._crNoteService.getCreditNotes().then(function (crNotes) { return _this.allCreditNotes = crNotes; });
    };
    CreditNotesComponent.prototype.gotoNewCreditNote = function () {
        var link = ['newcreditnote'];
        this._router.navigate(link);
    };
    CreditNotesComponent.prototype.onSelect = function (creditNote) {
        this.selectedCreditNote = creditNote;
    };
    CreditNotesComponent.prototype.selectAll = function (elementId) {
        var element = document.getElementById(elementId);
        var body = document.body, range, sel;
        if (document.createRange && window.getSelection) {
            range = document.createRange();
            sel = window.getSelection();
            sel.removeAllRanges();
            try {
                range.selectNodeContents(element);
                sel.addRange(range);
            }
            catch (e) {
                range.selectNode(element);
                sel.addRange(range);
            }
        }
    };
    CreditNotesComponent = __decorate([
        core_1.Component({
            selector: "creditnotes",
            templateUrl: "app/creditnote/creditnotes.component.html",
            styleUrls: ["app/creditnote/creditnotes.component.css"],
            directives: [creditnote_detail_component_1.CreditNoteDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router, creditnote_service_1.CreditNoteService])
    ], CreditNotesComponent);
    return CreditNotesComponent;
}());
exports.CreditNotesComponent = CreditNotesComponent;
//# sourceMappingURL=creditnotes.component.js.map