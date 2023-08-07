import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

import * as clampLibImported from 'text-overflow-clamp';

const clampLib = clampLibImported;

// tslint:disable-next-line: directive-selector
@Directive({ selector: '[clamp]' })
export class TextOverflowClampDirective implements AfterViewInit {
    @Input('clamp') lines: number;

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit(): void {
        clampLib(this.el.nativeElement, this.lines);
    }
}