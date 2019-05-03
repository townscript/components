/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class TsControlValueAccessor {
    constructor() {
        this.onChangePropagation = () => { };
        this.onTouchedPropagation = () => { };
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangePropagation = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedPropagation = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtY29udHJvbC12YWx1ZS1hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL2NvcmUvdHMtY29udHJvbC12YWx1ZS1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsTUFBTTs7bUNBRXVCLEdBQUcsRUFBRSxJQUFJO29DQUtSLEdBQUcsRUFBRSxJQUFJOzs7Ozs7SUFKckMsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0tBQy9COzs7OztJQUdELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztLQUNoQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtLQUNuQztDQUdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3Nvcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVHNDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICBvbkNoYW5nZVByb3BhZ2F0aW9uOiBhbnkgPSAoKSA9PiB7IH07XG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VQcm9wYWdhdGlvbiA9IGZuO1xuICB9XG5cbiAgb25Ub3VjaGVkUHJvcGFnYXRpb246IGFueSA9ICgpID0+IHsgfTtcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkUHJvcGFnYXRpb24gPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgYWJzdHJhY3Qgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQ7XG59XG4iXX0=