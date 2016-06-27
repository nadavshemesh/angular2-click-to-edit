System.register(['@angular/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var EditButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EditButtonComponent = (function () {
                function EditButtonComponent(el) {
                    this.show = false;
                    this.save = new core_1.EventEmitter;
                    this.el = el;
                }
                EditButtonComponent.prototype.ngOnInit = function () {
                    this.originalText = this.text;
                };
                EditButtonComponent.prototype.makeEditable = function () {
                    if (this.show == false) {
                        this.show = true;
                    }
                };
                EditButtonComponent.prototype.compareEvent = function (globalEvent) {
                    if (this.tracker != globalEvent && this.show) {
                        this.cancelEditable();
                    }
                };
                EditButtonComponent.prototype.trackEvent = function (newHostEvent) {
                    this.tracker = newHostEvent;
                };
                EditButtonComponent.prototype.cancelEditable = function () {
                    this.show = false;
                    this.text = this.originalText;
                };
                EditButtonComponent.prototype.callSave = function () {
                    var _this = this;
                    var data = {};
                    data["" + this.fieldName] = this.text;
                    var oldText = this.text;
                    setTimeout(function () { _this.originalText = oldText; _this.text = oldText; }, 0);
                    this.save.emit(data);
                    this.show = false;
                };
                __decorate([
                    core_1.Input('placeholder'), 
                    __metadata('design:type', Object)
                ], EditButtonComponent.prototype, "text", void 0);
                __decorate([
                    core_1.Input('title'), 
                    __metadata('design:type', Object)
                ], EditButtonComponent.prototype, "fieldName", void 0);
                EditButtonComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-text',
                        template: "<span class='edit-comp' [ngClass]='{activeB:show}'>\n                    <input *ngIf='show' type='text' [(ngModel)]='text' />\n                    <span *ngIf='!show' (click)='makeEditable()'>{{text || '\u05E9\u05D3\u05D4 \u05E8\u05D9\u05E7'}}</span>\n                    <i id='e-ic' *ngIf='!show' class='fa fa-pencil'></i>\n                </span>\n                <div class='e-buttons' *ngIf='show'>\n                    <button class='btn-x-sm' (click)='callSave()'><i class='fa fa-check'></i></button>\n                    <button class='btn-x-sm' (click)='cancelEditable()'><i class='fa fa-remove'></i></button>\n                </div>",
                        directives: [],
                        host: {
                            "(document: click)": "compareEvent($event)",
                            "(click)": "trackEvent($event)"
                        },
                        outputs: ['save : saved']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], EditButtonComponent);
                return EditButtonComponent;
            })();
            exports_1("EditButtonComponent", EditButtonComponent);
        }
    }
});
//# sourceMappingURL=edit.button.component.js.map