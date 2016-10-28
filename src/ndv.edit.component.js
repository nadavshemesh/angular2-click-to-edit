"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var NdvEditComponent = (function () {
    function NdvEditComponent(el) {
        this.show = false;
        this.save = new core_1.EventEmitter;
        this.permission = false;
        this.m = 3;
        this.min = 0;
        this.max = 10000;
        this.invalid = false;
        this.el = el;
    }
    NdvEditComponent.prototype.ngOnInit = function () {
        this.originalText = this.text; //Saves a copy of the original field info.
    };
    NdvEditComponent.prototype.validate = function (text) {
        if (this.regex) {
            var re = new RegExp('' + this.regex, "ig");
            if (re.test(text)) {
                this.invalid = false;
            }
            else {
                this.invalid = true;
            }
        }
        else {
            if ((text.length <= this.max) && (text.length >= this.min)) {
                this.invalid = false;
            }
            else {
                this.invalid = true;
            }
        }
        //console.log(this.invalid);
    };
    NdvEditComponent.prototype.makeEditable = function () {
        if (this.show == false) {
            this.show = true;
        }
    };
    NdvEditComponent.prototype.compareEvent = function (globalEvent) {
        if (this.tracker != globalEvent && this.show) {
            this.cancelEditable();
        }
    };
    NdvEditComponent.prototype.trackEvent = function (newHostEvent) {
        this.tracker = newHostEvent;
    };
    NdvEditComponent.prototype.cancelEditable = function () {
        this.show = false;
        this.text = this.originalText;
    };
    NdvEditComponent.prototype.callSave = function () {
        var _this = this;
        var data = {}; //BUILD OBJ FOR EXPORT.
        data["" + this.fieldName] = this.text;
        var oldText = this.text;
        setTimeout(function () { _this.originalText = oldText; _this.text = oldText; }, 0); //Sets the field with the new text;
        this.save.emit(data);
        this.show = false;
    };
    __decorate([
        core_1.Input('placeholder')
    ], NdvEditComponent.prototype, "text");
    __decorate([
        core_1.Input('title')
    ], NdvEditComponent.prototype, "fieldName");
    __decorate([
        core_1.Input()
    ], NdvEditComponent.prototype, "permission");
    __decorate([
        core_1.Input()
    ], NdvEditComponent.prototype, "min");
    __decorate([
        core_1.Input()
    ], NdvEditComponent.prototype, "max");
    __decorate([
        core_1.Input()
    ], NdvEditComponent.prototype, "error");
    __decorate([
        core_1.Input()
    ], NdvEditComponent.prototype, "regex");
    NdvEditComponent = __decorate([
        core_1.Component({
            selector: 'ndv-edit',
            styles: ["\n       #ndv-ic {\n        margin-left: 10px;\n        color: #d9d9d9;\n        }\n\n        .ndv-comp {\n            padding:6px;\n            border-radius: 3px;\n        }\n        .active-ndv {\n            background-color: #f0f0f0;\n            border: 1px solid #d9d9d9;\n        }\n        input {\n            border-radius: 5px;\n            box-shadow: none;\n            border: 1px solid #dedede;\n            min-width: 5px;\n        }\n        .ndv-buttons {\n            background-color: #f0f0f0;\n            border: 1px solid #ccc;\n            border-top: none;\n            border-radius: 0 0 3px 3px;\n            box-shadow: 0 3px 6px rgba(111,111,111,0.2);\n            outline: none;\n            padding: 3px;\n            position: absolute;\n            margin-left: 6px;\n            z-index: 1;\n        }\n        .ndv-comp:hover {\n            border: 1px solid grey;\n        }\n        .ndv-comp:hover > ndv-ic {\n            display:block;\n        }\n\n        .ndv-save {\n            margin-right:3px;\n        }\n        .ndv-active {\n            background-color: #f0f0f0;\n            border: 1px solid #d9d9d9;\n        }\n        .ng-invalid {\n                background: #ffb8b8;\n            }\n        .err-bubble {\n            position: absolute;\n            margin: 16px 100px;\n            border: 1px solid red;\n            font-size: 14px;\n            background: #ffb8b8;\n            padding: 10px;\n            border-radius: 7px;\n        }\n\n    "],
            template: "<span *ngIf=\"!permission\">{{text}}</span><span *ngIf=\"permission\" class='ndv-comp' [ngClass]=\"{'ndv-active':show}\">\n                    <input *ngIf='show' [ngClass]=\"{'ng-invalid': invalid}\" (ngModelChange)=\"validate($event)\" type='text' [(ngModel)]='text' />\n                    <div class='err-bubble' *ngIf=\"invalid\">{{error || \"must contain \" + min + \"to -\" + max +\" chars.\"}}</div>\n                    <i id='ndv-ic' *ngIf='!show'>\u270E</i>\n                    <span *ngIf='!show' (click)='makeEditable()'>{{text || '-Empty Field-'}}</span>\n                </span>\n                <div class='ndv-buttons' *ngIf='show'>\n                    <button class='btn-x-sm' (click)='callSave()'><i>\u2714</i></button>\n                    <button class='btn-x-sm' (click)='cancelEditable()'><i>\u2716</i></button>\n                </div>",
            host: {
                "(document: click)": "compareEvent($event)",
                "(click)": "trackEvent($event)"
            },
            outputs: ['save : onSave']
        })
    ], NdvEditComponent);
    return NdvEditComponent;
}());
exports.NdvEditComponent = NdvEditComponent;
