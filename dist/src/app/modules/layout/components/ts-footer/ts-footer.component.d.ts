import { OnInit } from '@angular/core';
export declare class TsFooterComponent implements OnInit {
    placeId: any;
    city: any;
    popularEventsData: any;
    countryCityMap: any;
    constructor();
    setFromTownscript: (value: any) => void;
    onChangeCity: (city: any) => void;
    openContactUs: () => void;
    openMyBooking: () => void;
    ngOnInit(): void;
}
