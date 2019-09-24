import {
    Directive,
    ElementRef,
    Input,
    AfterViewInit
} from '@angular/core';

import * as clampLibImported from 'text-overflow-clamp';

const clampLib = clampLibImported;

@Directive({ selector: '[clamp]' })
export class TextOverflowClampDirective implements AfterViewInit {
    @Input('clamp') lines: number;

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit(): void {
        clampLib(this.el.nativeElement, this.lines);
    }
}