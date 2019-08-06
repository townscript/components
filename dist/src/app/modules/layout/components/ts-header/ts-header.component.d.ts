import { OnInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
export declare class TsHeaderComponent implements OnInit {
    private dialog;
    Components: Array<String>;
    source: string;
    algoliaIndexName: string;
    citySuggestions: ElementRef;
    cityPopupActive: boolean;
    constructor(dialog: MatDialog);
    clickout(event: any): void;
    openLogin(): void;
    ngOnInit(): void;
}
