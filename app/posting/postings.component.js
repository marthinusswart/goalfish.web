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
var posting_service_1 = require('../services/posting/posting.service');
var platform_browser_1 = require('@angular/platform-browser');
var PostingsComponent = (function () {
    function PostingsComponent(_router, _postingService, _document) {
        this._router = _router;
        this._postingService = _postingService;
        this._document = _document;
        this.allPostings = [];
        this.wasSuccess = false;
        this.wasFailure = false;
    }
    PostingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postingService.getPostings().then(function (postings) { return _this.allPostings = postings; });
    };
    PostingsComponent.prototype.gotoNewPosting = function () {
        var link = ['newposting'];
        this._router.navigate(link);
    };
    PostingsComponent.prototype.processJournals = function () {
        var _this = this;
        this.processingMessage = "Journal processing completed successfully";
        this._postingService.processJournals().then(function (result) { return _this.wasSuccess = true; });
    };
    PostingsComponent.prototype.processTransactions = function () {
        var _this = this;
        this.processingMessage = "Transaction processing completed successfully";
        this._postingService.processTransactions().then(function (result) { return _this.wasSuccess = true; });
    };
    PostingsComponent.prototype.selectAll = function (elementId) {
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
        } /*else if (body.createTextRange) {
          range = body.createTextRange();
          range.moveToElementText(element);
          range.select();
        }*/
    };
    PostingsComponent = __decorate([
        core_1.Component({
            selector: "postings",
            templateUrl: "app/posting/postings.component.html",
            styleUrls: ["app/posting/postings.component.css"]
        }),
        __param(2, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [router_1.Router, posting_service_1.PostingService, Object])
    ], PostingsComponent);
    return PostingsComponent;
}());
exports.PostingsComponent = PostingsComponent;
//# sourceMappingURL=postings.component.js.map