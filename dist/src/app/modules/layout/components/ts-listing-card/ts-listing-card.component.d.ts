import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BrowserService } from '../../../../core/browser.service';
export declare class TsListingCardComponent implements OnInit {
    dialog: MatDialog;
    private browser;
    eventData: any;
    type: any;
    urgencyMessage: boolean;
    goingCounter: boolean;
    moreIcons: boolean;
    keywords: {
        keyCode: string;
    }[];
    showRegularCard: boolean;
    featuredCard: boolean;
    constructor(dialog: MatDialog, browser: BrowserService);
    shareEvent: () => void;
    ngOnInit(): void;
}
