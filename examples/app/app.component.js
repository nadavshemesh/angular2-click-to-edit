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
var components_1 = require('angular2-click-to-edit/components');
var AppComponent = (function () {
    function AppComponent() {
        this.firstName = 'Robert';
        this.lastName = 'Johnson';
        this.age = 23;
    }
    AppComponent.prototype.saveMethod = function (obj) {
        alert(' saved! the obj  - ' + JSON.stringify(obj));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: ["\n\n        h3 {\n            padding:6px;\n            border-radius: 3px;\n        }\n    "],
            template: "\n\n<div class=\"container\">\n      <div class=\"header clearfix\">\n        <h3 class=\"text-muted\">Angular2-Click-to-Edit Example</h3>\n      </div>\n      <div class=\"jumbotron\" style='background:white;'>\n        <h3>Click on a binding to edit it! </h3>\n        <h4>First Name</h4><p><ndv-edit [title]=\"'firstName'\" [placeholder]=\"firstName\" (onSave)=\"saveMethod($event)\"></ndv-edit></p>\n        <h4>Last Name</h4><p><ndv-edit [title]=\"'lastName'\" [placeholder]=\"lastName\" (onSave)=\"saveMethod($event)\"></ndv-edit></p>\n        <h4>Age</h4><p><ndv-edit [title]=\"'age'\" [placeholder]=\"age\" (onSave)=\"saveMethod($event)\"></ndv-edit></p>\n      </div>\n    \n\n      <footer class=\"footer\">\n        <p>angular2-click-to-edit</p>\n      </footer>\n\n    </div>\n    ",
            directives: [components_1.NDV_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map