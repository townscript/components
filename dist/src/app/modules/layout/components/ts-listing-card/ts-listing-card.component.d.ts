import { OnInit } from '@angular/core';
export declare class TsListingCardComponent implements OnInit {
    eventData: any;
    urgencyMessage: boolean;
    goingCounter: boolean;
    keywords: {
        keyCode: string;
    }[];
    constructor();
    ngOnInit(): void;
}
