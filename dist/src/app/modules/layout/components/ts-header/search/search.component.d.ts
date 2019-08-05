import { OnInit, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common';
import { HeaderService } from '../ts-header.service';
import { Router } from "@angular/router";
export declare class SearchComponent implements OnInit {
    private headerService;
    private timeService;
    datepipe: DatePipe;
    algoliaIndexName: string;
    router: Router;
    cityInput: ElementRef;
    citySuggestions: ElementRef;
    searchText: string;
    searchTextChanged: Subject<string>;
    searchActive: boolean;
    citySearchActive: boolean;
    cityPopupActive: boolean;
    placeSearchResults: any;
    searchResults: any;
    activeCity: string;
    cityQuery: string;
    cityQueryChanged: Subject<string>;
    activeCityBackup: string;
    client: any;
    index: any;
    popularPlaces: string[];
    constructor(headerService: HeaderService, timeService: TimeService, datepipe: DatePipe);
    callAlgolia: (text: any) => void;
    filterDataForSearchResult: (data: any) => void;
    clickout(event: any): void;
    search: (text: any) => void;
    ngOnInit(): void;
}
