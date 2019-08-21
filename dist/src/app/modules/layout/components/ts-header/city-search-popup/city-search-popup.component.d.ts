import { OnInit, ElementRef, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common';
import { HeaderService } from '../ts-header.service';
import { Router } from '@angular/router';
export declare class CitySearchPopupComponent implements OnInit {
    private headerService;
    private timeService;
    datepipe: DatePipe;
    cityInput: ElementRef;
    showArrow: boolean;
    activeCity: string;
    activeCityChange: EventEmitter<String>;
    cityPopupActive: boolean;
    cityPopupActiveChange: EventEmitter<boolean>;
    citySearchActive: boolean;
    placeSearchResults: any;
    router: Router;
    cityQuery: string;
    cityQueryChanged: Subject<string>;
    client: any;
    index: any;
    popularPlaces: string[];
    constructor(headerService: HeaderService, timeService: TimeService, datepipe: DatePipe);
    callSearchCity: (query: any) => void;
    placeChanged: (place: any) => void;
    openCityPopup: () => void;
    searchCity: (text: any) => void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
}