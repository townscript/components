import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as algoliaSearchImported from 'algoliasearch';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { TimeService } from '../../../../../shared/services/time.service';
import { config } from '../../../../../core/app-config';
import { PlaceService } from '../place.service';
import { HeaderService } from '../ts-header.service';

const algoliasearch = algoliaSearchImported;

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    @ViewChild('cityInput', { static: false }) cityInput: ElementRef;
    @ViewChild('citySuggestions', { static: false }) citySuggestions: ElementRef;
    @ViewChild('searchResultsEle', { static: false }) searchResultsEle: ElementRef;

    algoliaIndexName = config.algoliaIndexName;
    searchText: string;
    searchTextChanged: Subject<string> = new Subject<string>();
    searchActive = false;
    citySearchActive = false;
    cityPopupActive = false;
    placeSearchResults: any;
    searchResults: any;
    activePlace = 'Pune';
    cityQuery: string;
    cityQueryChanged: Subject<string> = new Subject<string>();
    activePlaceBackup: string;
    client: any;
    index: any;
    homeUrl: string;
    router: Router = config.router;
    urlArray;
    host = config.baseUrl;
    popularPlaces: any;

    constructor(private headerService: HeaderService, private placeService: PlaceService, private timeService: TimeService, public datepipe: DatePipe) {
        this.searchTextChanged.pipe(
            debounceTime(300)).subscribe(text => this.callAlgolia(text));
        this.client = algoliasearch('AT5UB8FMSR', 'c7e946f5b740ef035bd824f69dcc1612');
        this.index = this.client.initIndex(this.algoliaIndexName);
        if (this.router.url) {
            this.urlArray = this.router.url.replace('/', '').split('/');
        } else {
            this.urlArray = ['in'];
        }
    }

    callAlgolia = (text) => {
        this.index.search({
            query: text,
            hitsPerPage: 6
        }).then((data) => {
            this.filterDataForSearchResult(data);
        });
    }

    filterDataForSearchResult = (data) => {
        const results = data.hits;
        const interests = results.filter(ele => {
            return ele.objType === 'keyword' ||
                ele.objType === 'eventtype' ||
                ele.objType === 'category';
        });
        const organizers = results.filter(ele => ele.objType === 'organizer');
        const events = results.filter(ele => ele.objType === 'event');

        interests.map(interest => {
            interest.name = interest.name + ' Events';
            interest.location = this.activePlace;
        });

        organizers.map(organizer => {
            if (!organizer.imageUrl) {
                organizer.imageUrl = 'https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-organizer.png';
            }
            if (organizer.secondaryTextProperties && organizer.secondaryTextProperties.country) {
                organizer.location = organizer.secondaryTextProperties.country;
            }
        });

        events.map(event => {
            if (!event.imageUrl) {
                event.imageUrl = 'https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-event.png';
            }
            if (event.secondaryTextProperties && event.secondaryTextProperties.city) {
                event.location = event.secondaryTextProperties.city;
            }
            if (event.secondaryTextProperties && event.secondaryTextProperties.startTime) {
                let startDateTime = event.secondaryTextProperties.startTime;
                startDateTime = this.timeService.convertDateToTimezone(startDateTime, event.secondaryTextProperties.eventTimeZone);
                event.secondaryTextProperties.startTime = this.datepipe.transform(startDateTime, 'd MMM yyyy, \' \'h:mma');
            }
        });

        this.searchResults = { 'interests': interests, 'organizers': organizers, 'events': events };
    }

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (!this.citySuggestions.nativeElement.contains(event.target)) {
            this.cityPopupActive = false;
        }
        if (this.searchResultsEle && !this.searchResultsEle.nativeElement.contains(event.target)) {
            this.searchActive = false;
        }
    }

    navigateToListing = (interest: string) => {
        let listingUrl = this.urlArray[0]+ '/'+this.urlArray[1];
        if(this.urlArray && this.urlArray.length > 1){
          this.router.navigate([listingUrl + '/' + interest]);
        } else {
          this.router.navigate([this.homeUrl + '/' + interest]);
        }
        this.searchActive = false;
    }

    navigateToEventPage = (eventCode: string) => {
        this.router.navigate(['/e/' + eventCode]);
        this.searchActive = false;
    }

    search = (text) => {
        if (text !== undefined && text.length > 0) {
            this.searchTextChanged.next(text);
        }
    }
    getPopularPlaces = async () => {
        this.placeService.place.subscribe(async (res) => {
            if (res) {
                const country = JSON.parse(<any>res)['country'];
                const data = await this.headerService.getPopularCities(country || this.urlArray[0]);
                this.popularPlaces = data['data'].slice(0, 6).map(ele => {
                    ele.type = 'city';
                    ele.cityCode = ele.code;
                    return ele;
                });
            }
        });
    }
    ngOnInit() {
        this.getPopularPlaces();
        this.placeService.place.subscribe(res => {
            if (res) {
                const data = JSON.parse(<any>res);
                if(data['currentPlace'] != undefined){
                  this.activePlace = data['currentPlace'];
                }
                if(data['country'] != undefined && data['city'] != undefined){
                  this.homeUrl = ('/' + data['country'] + '/' + data['city']).toLowerCase();
                }
            }
        });
    }

}
