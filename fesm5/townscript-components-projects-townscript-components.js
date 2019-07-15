import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

var ComponentsService = /** @class */ (function () {
    function ComponentsService() {
    }
    ComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
    ComponentsService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsService);
    return ComponentsService;
}());

var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
    }
    ComponentsComponent.prototype.ngOnInit = function () {
    };
    ComponentsComponent = __decorate([
        Component({
            selector: 'lib-components',
            template: "\n    <p>\n      components works!\n    </p>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ComponentsComponent);
    return ComponentsComponent;
}());

var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
            declarations: [ComponentsComponent],
            imports: [],
            exports: [ComponentsComponent]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

export { ComponentsComponent, ComponentsModule, ComponentsService };
//# sourceMappingURL=townscript-components-projects-townscript-components.js.map
