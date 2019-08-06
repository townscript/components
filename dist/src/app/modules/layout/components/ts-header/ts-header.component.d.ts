import { OnInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
export declare class TsHeaderComponent implements OnInit {
    private dialog;
    Components: Array<String>;
    source: string;
    algoliaIndexName: string;
    router: Router;
    citySuggestions: ElementRef;
    cityPopupActive: boolean;
    constructor(dialog: MatDialog);
    clickout(event: any): void;
    openLogin(type: any): void;
    ngOnInit(): void;
}
