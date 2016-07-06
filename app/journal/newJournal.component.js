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
var journal_service_1 = require('../services/journal/journal.service');
var journal_1 = require('../models/journal/journal');
var NewJournalComponent = (function () {
    function NewJournalComponent(_router, _journalService) {
        this._router = _router;
        this._journalService = _journalService;
        this.journal = new journal_1.Journal();
    }
    NewJournalComponent.prototype.ngOnInit = function () {
    };
    NewJournalComponent.prototype.save = function () {
        this._journalService.addJournal(this.journal).then(function (journal) { return alert("Journal _id is: " + journal.externalRef); });
    };
    NewJournalComponent = __decorate([
        core_1.Component({
            selector: "newJournal",
            templateUrl: "app/journal/newJournal.component.html",
            styleUrls: ["app/journal/newJournal.component.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, journal_service_1.JournalService])
    ], NewJournalComponent);
    return NewJournalComponent;
}());
exports.NewJournalComponent = NewJournalComponent;
//# sourceMappingURL=newJournal.component.js.map