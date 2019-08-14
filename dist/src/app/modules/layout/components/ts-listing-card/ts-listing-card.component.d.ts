import { OnInit } from '@angular/core';
export declare class TsListingCardComponent implements OnInit {
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
    constructor();
    ngOnInit(): void;
}
