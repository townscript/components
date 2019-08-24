import { ElementRef } from '@angular/core';
export declare class AppPasswordDirective {
    private el;
    private _shown;
    constructor(el: ElementRef);
    toggle(span: HTMLElement): void;
    setup(): void;
}
