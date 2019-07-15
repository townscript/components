import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

let ComponentsService = class ComponentsService {
    constructor() { }
};
ComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
ComponentsService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], ComponentsService);

let ComponentsComponent = class ComponentsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ComponentsComponent = __decorate([
    Component({
        selector: 'lib-components',
        template: `
    <p>
      components works!
    </p>
  `
    }),
    __metadata("design:paramtypes", [])
], ComponentsComponent);

let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        declarations: [ComponentsComponent],
        imports: [],
        exports: [ComponentsComponent]
    })
], ComponentsModule);

export { ComponentsComponent, ComponentsModule, ComponentsService };
//# sourceMappingURL=townscript-components-projects-townscript-components.js.map
