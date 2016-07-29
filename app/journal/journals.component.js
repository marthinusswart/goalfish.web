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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var journal_service_1 = require('../services/journal/journal.service');
var platform_browser_1 = require('@angular/platform-browser');
var JournalsComponent = (function () {
    function JournalsComponent(_router, _journalService, _document) {
        this._router = _router;
        this._journalService = _journalService;
        this._document = _document;
        this.allJournals = [];
    }
    JournalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._journalService.getJournals().then(function (journals) { return _this.allJournals = journals; });
    };
    JournalsComponent.prototype.gotoNewJournal = function () {
        var link = ['newjournal'];
        this._router.navigate(link);
    };
    JournalsComponent.prototype.selectAll = function (elementId) {
        var element = this._document.getElementById(elementId);
        var body = this._document.body, range, sel;
        if (this._document.createRange && window.getSelection) {
            range = this._document.createRange();
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
        else if (body.createTextRange) {
            range = body.createTextRange();
            range.moveToElementText(element);
            range.select();
        }
    };
    JournalsComponent = __decorate([
        core_1.Component({
            selector: "journals",
            templateUrl: "app/journal/journals.component.html",
            styleUrls: ["app/journal/journals.component.css"]
        }),
        __param(2, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [router_1.Router, journal_service_1.JournalService, Object])
    ], JournalsComponent);
    return JournalsComponent;
}());
exports.JournalsComponent = JournalsComponent;
//# sourceMappingURL=journals.component.js.map