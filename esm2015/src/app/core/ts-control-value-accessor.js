export class TsControlValueAccessor {
    constructor() {
        this.onChangePropagation = () => { };
        this.onTouchedPropagation = () => { };
    }
    registerOnChange(fn) {
        this.onChangePropagation = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedPropagation = fn;
    }
    setDisabledState(isDisabled) {
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtY29udHJvbC12YWx1ZS1hY2Nlc3Nvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL2NvcmUvdHMtY29udHJvbC12YWx1ZS1hY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQWdCLHNCQUFzQjtJQUE1QztRQUVFLHdCQUFtQixHQUFRLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUtyQyx5QkFBb0IsR0FBUSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFTeEMsQ0FBQztJQWJDLGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBR0QsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtJQUNwQyxDQUFDO0NBR0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUc0NvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gIG9uQ2hhbmdlUHJvcGFnYXRpb246IGFueSA9ICgpID0+IHsgfTtcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZVByb3BhZ2F0aW9uID0gZm47XG4gIH1cblxuICBvblRvdWNoZWRQcm9wYWdhdGlvbjogYW55ID0gKCkgPT4geyB9O1xuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWRQcm9wYWdhdGlvbiA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICBhYnN0cmFjdCB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZDtcbn1cbiJdfQ==