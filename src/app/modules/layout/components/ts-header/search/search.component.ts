import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as algoliaSearchImported from "algoliasearch";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common'
import { HeaderService } from '../ts-header.service';
import { Router } from "@angular/router";

const algoliasearch = algoliaSearchImported;

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    @Input() algoliaIndexName: string = "tsTesting";
    @Input() router: Router;
    @ViewChild('cityInput', { static: false }) cityInput: ElementRef;
    @ViewChild('citySuggestions', { static: false }) citySuggestions: ElementRef;
    searchText: string;
    searchTextChanged: Subject<string> = new Subject<string>();
    searchActive: boolean = false;
    citySearchActive: boolean = false;
    cityPopupActive: boolean = false;
    placeSearchResults: any;
    searchResults: any;
    activeCity: string = "Pune";
    cityQuery: string;
    cityQueryChanged: Subject<string> = new Subject<string>();
    activeCityBackup: string;
    client: any;
    index: any;

    popularPlaces = ['Pune', 'Mumbai', 'Bangalore', 'New Delhi', 'Lucknow', 'Kanpur'];

    constructor(private headerService: HeaderService, private timeService: TimeService, public datepipe: DatePipe) {
        this.searchTextChanged.pipe(
            debounceTime(300)).subscribe(text => this.callAlgolia(text));
        this.client = algoliasearch("AT5UB8FMSR", "c7e946f5b740ef035bd824f69dcc1612");
        this.index = this.client.initIndex(this.algoliaIndexName);
    }
    callAlgolia = (text) => {
        this.index.search({
            query: text,
            hitsPerPage: 6
        }).then((data) => {
            console.log(data);
            this.filterDataForSearchResult(data);
        })
    }
    filterDataForSearchResult = (data) => {
        let results = data.hits;
        let interests = results.filter(ele => {
            return ele.objType == "keyword" ||
                ele.objType == "eventtype" ||
                ele.objType == "category"
        });
        let organizers = results.filter(ele => ele.objType == "organizer");
        let events = results.filter(ele => ele.objType == "event");

        interests.map(interest => {
            interest.name = interest.name + ' Events';
            interest.location = "PUNE";
        });

        organizers.map(organizer => {
            if (!organizer.imageUrl) {
                organizer.imageUrl = "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-organizer.png";
            }
            if (organizer.secondaryTextProperties && organizer.secondaryTextProperties.country) {
                organizer.location = organizer.secondaryTextProperties.country;
            }
        });

        events.map(event => {
            if (!event.imageUrl) {
                event.imageUrl = "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-event.png";
            }
            if (event.secondaryTextProperties && event.secondaryTextProperties.city) {
                event.location = event.secondaryTextProperties.city;
            }
            if (event.secondaryTextProperties && event.secondaryTextProperties.startTime) {
                let startDateTime = event.secondaryTextProperties.startTime;
                startDateTime = this.timeService.convertDateToTimezone(startDateTime, event.secondaryTextProperties.eventTimeZone);
                event.secondaryTextProperties.startTime = this.datepipe.transform(startDateTime, "d MMM yyyy, ' 'h:mma");
            }
        });

        this.searchResults = { "interests": interests, "organizers": organizers, "events": events }
    }

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (!this.citySuggestions.nativeElement.contains(event.target)) {
            this.cityPopupActive = false;
        }
    }
    search = (text) => {
        if (text != undefined && text.length > 0)
            this.searchTextChanged.next(text);
    }
    ngOnInit() {
    }

}
