/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
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
 * @abstract
 */
export { TsControlValueAccessor };
if (false) {
    /** @type {?} */
    TsControlValueAccessor.prototype.onChangePropagation;
    /** @type {?} */
    TsControlValueAccessor.prototype.onTouchedPropagation;
    /**
     * @abstract
     * @param {?} obj
     * @return {?}
     */
    TsControlValueAccessor.prototype.writeValue = function (obj) { };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtY29udHJvbC12YWx1ZS1hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL2NvcmUvdHMtY29udHJvbC12YWx1ZS1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7OztBQUFBOzttQ0FFNkIsZUFBUztvQ0FLUixlQUFTOzs7Ozs7SUFKckMsaURBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQU87UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztLQUMvQjs7Ozs7SUFHRCxrREFBaUI7Ozs7SUFBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO0tBQ2hDOzs7OztJQUVELGlEQUFnQjs7OztJQUFoQixVQUFpQixVQUFtQjtLQUNuQztpQ0FmSDtJQWtCQyxDQUFBOzs7O0FBaEJELGtDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udHJvbFZhbHVlQWNjZXNzb3J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRzQ29udHJvbFZhbHVlQWNjZXNzb3IgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG5cbiAgb25DaGFuZ2VQcm9wYWdhdGlvbjogYW55ID0gKCkgPT4geyB9O1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlUHJvcGFnYXRpb24gPSBmbjtcbiAgfVxuXG4gIG9uVG91Y2hlZFByb3BhZ2F0aW9uOiBhbnkgPSAoKSA9PiB7IH07XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZFByb3BhZ2F0aW9uID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIGFic3RyYWN0IHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkO1xufVxuIl19