import { OnInit, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
export declare class TsHeaderComponent implements OnInit {
    datepipe: DatePipe;
    Components: Array<String>;
    source: string;
    algoliaIndexName: string;
    router: Router;
    citySuggestions: ElementRef;
    cityPopupActive: boolean;
    constructor(datepipe: DatePipe);
    clickout(event: any): void;
    ngOnInit(): void;
}
