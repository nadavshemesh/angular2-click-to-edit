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
var NdvEditAreaComponent = (function () {
    function NdvEditAreaComponent(el) {
        this.permission = true;
        this.show = false;
        this.save = new core_1.EventEmitter;
        this.el = el;
    }
    NdvEditAreaComponent.prototype.ngOnInit = function () {
        this.originalText = this.text; //Saves a copy of the original field info.
    };
    NdvEditAreaComponent.prototype.makeEditable = function () {
        if (this.show == false) {
            this.show = true;
        }
    };
    NdvEditAreaComponent.prototype.compareEvent = function (globalEvent) {
        if (this.tracker != globalEvent && this.show) {
            this.cancelEditable();
        }
    };
    NdvEditAreaComponent.prototype.trackEvent = function (newHostEvent) {
        this.tracker = newHostEvent;
    };
    NdvEditAreaComponent.prototype.cancelEditable = function () {
        this.show = false;
        this.text = this.originalText;
    };
    NdvEditAreaComponent.prototype.callSave = function () {
        var _this = this;
        var data = {}; //BUILD OBJ FOR EXPORT.
        data["" + this.fieldName] = this.text;
        var oldText = this.text;
        setTimeout(function () { _this.originalText = oldText; _this.text = oldText; }, 0); //Sets the field with the new text;
        this.save.emit(data);
        this.show = false;
    };
    __decorate([
        core_1.Input('placeholder'), 
        __metadata('design:type', Object)
    ], NdvEditAreaComponent.prototype, "text");
    __decorate([
        core_1.Input('title'), 
        __metadata('design:type', Object)
    ], NdvEditAreaComponent.prototype, "fieldName");
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NdvEditAreaComponent.prototype, "permission");
    NdvEditAreaComponent = __decorate([
        core_1.Component({
            selector: 'ndv-area',
            styles: ["\n       #ndv-ic {\n        margin-left: 10px;\n        color: #d9d9d9;\n        }\n        .ndv-comp {\n            padding:6px;\n            border-radius: 3px;\n        }\n        .active-ndv {\n            background-color: #f0f0f0;\n            border: 1px solid #d9d9d9;\n        }\n        input {\n            border-radius: 5px;\n            box-shadow: none;\n            border: 1px solid #dedede;\n            min-width: 5px;\n        }\n        .ndv-buttons {\n            background-color: #f0f0f0;\n            border: 1px solid #ccc;\n            border-top: none;\n            border-radius: 0 0 3px 3px;\n            box-shadow: 0 3px 6px rgba(111,111,111,0.2);\n            outline: none;\n            padding: 3px;\n            position: absolute;\n            margin-left: 6px;\n            z-index: 1;\n        }\n        .ndv-comp:hover {\n            border: 1px solid grey;\n        }\n        .ndv-comp:hover > ndv-ic {\n            display:block;\n        }\n        .ndv-save {\n            margin-right:3px;\n        }\n        .ndv-active {\n            background-color: #f0f0f0;\n            border: 1px solid #d9d9d9;\n        }\n    "],
            template: "<span *ngIf=\"!permission\">{{text}}</span><form *ngIf=\"permission\" class='ndv-comp' [ngClass]=\"{'ndv-active':show}\" name='areaForm'><span>\n                    <textarea name='area' rows=\"6\" cols=\"55\" *ngIf='show' [(ngModel)]='text'></textarea>\n                    <i id='ndv-ic' *ngIf='!show'>\u270E</i>\n                    <span *ngIf='!show' style='line-height:1.5em;word-wrap: break-word;' (click)='makeEditable()'>{{text || '-Empty Field-'}}</span>\n                </span>\n                <div class='ndv-buttons' *ngIf='show'>\n                    <button class='btn-x-sm' (click)='callSave()'><i>\u2714</i></button>\n                    <button class='btn-x-sm' (click)='cancelEditable()'><i>\u2716</i></button>\n                </div></form>",
            host: {
                "(document: click)": "compareEvent($event)",
                "(click)": "trackEvent($event)"
            },
            outputs: ['save : onSave']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], NdvEditAreaComponent);
    return NdvEditAreaComponent;
    var _a;
}());
exports.NdvEditAreaComponent = NdvEditAreaComponent;
