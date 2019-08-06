import { OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common';
export declare class SearchComponent implements OnInit {
    private timeService;
    datepipe: DatePipe;
    algoliaIndexName: string;
    searchText: string;
    searchTextChanged: Subject<string>;
    searchActive: boolean;
    citySearchActive: boolean;
    searchResults: any;
    activeCity: string;
    activeCityBackup: string;
    client: any;
    index: any;
<<<<<<< HEAD
    constructor(timeService: TimeService, datepipe: DatePipe);
    callAlgolia: (text: any) => void;
    filterDataForSearchResult: (data: any) => void;
    toggleCityPopup: () => void;
    setCityOnEmpty: () => void;
=======
    popularPlaces: string[];
    constructor(headerService: HeaderService, timeService: TimeService, datepipe: DatePipe);
    callAlgolia: (text: any) => void;
    filterDataForSearchResult: (data: any) => void;
    clickout(event: any): void;
>>>>>>> 07f57e85b8effbe501dcbd4b75bd1760319195d6
    search: (text: any) => void;
    ngOnInit(): void;
}
