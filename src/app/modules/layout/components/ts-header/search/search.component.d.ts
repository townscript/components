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
    constructor(timeService: TimeService, datepipe: DatePipe);
    callAlgolia: (text: any) => void;
    filterDataForSearchResult: (data: any) => void;
    toggleCityPopup: () => void;
    setCityOnEmpty: () => void;
    search: (text: any) => void;
    ngOnInit(): void;
}
