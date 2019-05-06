import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsFormsModule } from '@townscript/elements';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var config = {
    floatLabelOptions: ['auto', 'always', 'never'],
    floatLabel: ''
};
config.floatLabel = config.floatLabelOptions[0];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
TsControlValueAccessor = /** @class */ (function () {
    function TsControlValueAccessor() {
        this.onChangePropagation = function () { };
        this.onTouchedPropagation = function () { };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    TsControlValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangePropagation = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    TsControlValueAccessor.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchedPropagation = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    TsControlValueAccessor.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
    };
    return TsControlValueAccessor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TsHeaderComponent = /** @class */ (function () {
    function TsHeaderComponent() {
        this.Components = ["createEventBtn"];
    }
    /**
     * @return {?}
     */
    TsHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TsHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ts-header',
                    template: "<nav class=\"ts-header flex align-items-center\">\n    <div class=\"container flex align-items-center\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand flex align-items-center\" href=\"/\">\n                <img src=\"assets/images/ts-logo.png\" alt=\"Townscript Event Ticketing Logo\"\n                    title=\"Townscript Event Ticketing Logo\" />\n            </a>\n        </div>\n        <div id=\"navbar\" class=\"nav-right hidden-xs\">\n            <ul>\n                <li>\n                    <a href=\"/signup\" ts-data-analytics prop-event=\"click\" eventLabel=\"Get Started\"\n                        prop-clicked-location=\"Animated Header\">\n                        <ts-button text=\"Create Event\"></ts-button>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>",
                    styles: [".ts-header{min-height:85px;background-color:#fff;width:100%;position:fixed;top:0;z-index:1000;box-shadow:0 15px 40px -20px rgba(40,44,63,.2)}.ts-header .container{display:flex;width:100%;padding:0 10%}.ts-header .container .navbar-header .navbar-brand img{width:165px}.ts-header .container .nav-right{margin-left:auto}.ts-header .container .nav-right li,.ts-header .container .nav-right ul{margin-bottom:0}:host ::ng-deep .mat-button-wrapper{font-size:16px!important}"]
                }] }
    ];
    /** @nocollapse */
    TsHeaderComponent.ctorParameters = function () { return []; };
    TsHeaderComponent.propDecorators = {
        Components: [{ type: Input }]
    };
    return TsHeaderComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        TsFormsModule
                    ],
                    declarations: [
                        TsHeaderComponent
                    ],
                    exports: [
                        TsHeaderComponent
                    ]
                },] }
    ];
    return LayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { config, TsControlValueAccessor, TsHeaderComponent, LayoutModule };

//# sourceMappingURL=townscript-components.js.map