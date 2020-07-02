import { Component, OnInit, ViewChild, ElementRef, HostListener, Input, ViewChildren, QueryList, Output } from '@angular/core';
import * as algoliaSearchImported from 'algoliasearch';
import { DatePipe } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { TimeService } from '../../../../../shared/services/time.service';
import { config } from '../../../../../core/app-config';
import { PlaceService } from '../place.service';
import { HeaderService } from '../ts-header.service';
import { UtilityService } from '../../../../../shared/services/utilities.service';
import { ListKeyManager } from '@angular/cdk/a11y';
import { SearchSuggestionComponent } from '../search-suggestion/search-suggestion.component';
import { EventEmitter } from 'protractor';

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
    @ViewChild('searchTextInputEle', { static : false }) searchTextInputEle: ElementRef;
    @ViewChildren(SearchSuggestionComponent) listItems!: QueryList<SearchSuggestionComponent>;
    @Input()searchText: string = '';
    algoliaIndexName = config.algoliaIndexName;
    // searchText: string = "";
    keyboardEventsManager: ListKeyManager<any>;
    typedSearchText: string = "";
    searchTextChanged: Subject<string> = new Subject<string>();
    searchActive = false;
    citySearchActive = false;
    cityPopupActive = false;
    placeSearchResults: any;
    searchResults: any;
    activePlace = 'Pune';
    emptyResult = false;
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
    intentSelected: boolean = false;

    constructor(private utilityService: UtilityService, private headerService: HeaderService, private placeService: PlaceService, private timeService: TimeService, public datepipe: DatePipe) {
        this.searchTextChanged.pipe(
            debounceTime(300)).subscribe(text => this.fetchSuggestions(text));
        this.client = algoliasearch('AT5UB8FMSR', 'c7e946f5b740ef035bd824f69dcc1612');
        this.index = this.client.initIndex(this.algoliaIndexName);
        this.buildUrlArray();
    }

    buildUrlArray = (): void => {
        if (this.router.url) {
            this.urlArray = this.router.url.split("?")[0].replace('/', '').split('/');
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

    fetchSuggestions = (text) => {
        this.intentSelected = false;
        this.headerService.getSuggestions(text).then((data) => {
            this.searchResults = data.data;
            this.keyboardEventsManager = new ListKeyManager<any>(this.listItems);
            this.initKeyManagerHandlers();
        });
    }

    suggestionSelected = (event) => {
        this.chooseSuggestion(event.suggestion);
    }

    initKeyManagerHandlers = () => {
        this.keyboardEventsManager
            .change
            .subscribe((activeIndex) => {
            this.listItems.map((item, index) => {
                item.setActive(activeIndex === index);
                // if(item.isActive == true && index !== activeIndex) {
                //     item.setActive(false);
                // }
                return item;
            });
        });
    }

    hoverOnSuggestion = (indexOfItemhoveredOn) => {
        console.log(indexOfItemhoveredOn);
        this.searchActive = true;
        var activeItem = this.keyboardEventsManager.activeItem;
        if(activeItem)activeItem.setActive(false);
        this.keyboardEventsManager.setActiveItem(indexOfItemhoveredOn);
        this.keyboardEventsManager.activeItem.setActive(true);
    }

    chooseSuggestion = (text) => {
        if(!this.searchText)return;
        this.typedSearchText = this.searchText;
        this.searchText = text;
        this.addOrUpdateTSSuggestions();
        this.goToSearchResultsPage();
    }

    addOrUpdateTSSuggestions = () => {
        this.headerService.postSuggestions(this.searchText);
    }


    goToSearchResultsPage = () => {
        this.searchActive = false;
        this.intentSelected = true;
        var encodedSearchText = this.searchText.replace(/ +/g,'-');
        var encodedCurrentPlace = this.activePlace.replace(/ +/g,'-')
        var queryParams = {};
        if(this.activePlace) {
            queryParams['currentplace'] = encodedCurrentPlace;
        } 
        if(encodedSearchText) {
            queryParams['searchtext'] = encodedSearchText;
        }
        const navigationExtras : NavigationExtras = {
            state : {
                typedText : this.typedSearchText,
                suggestions: this.searchResults
            },
            queryParams : queryParams
        };
        this.router.navigate(['/search'], navigationExtras);
    }

    filterDataForSearchResult = (data) => {
        const results = data.hits;
        this.emptyResult = data.hits.length === 0;
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
        if (interest['secondaryTextProperties'] && interest['secondaryTextProperties']['isOnline']) {
            this.router.navigate(['/online']);
            return;
        }
        this.buildUrlArray();
        const stopWords = ['e', 'o'];
        let listingUrl = this.urlArray[0] + '/' + this.urlArray[1];
        if (this.urlArray && this.urlArray.length > 1 && stopWords.indexOf(this.urlArray[0]) === -1) {
            this.router.navigate([listingUrl + '/' + interest['urlCode']]);
        } else {
            this.router.navigate([this.homeUrl + '/' + interest['urlCode']]);
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

    handleKeydown(event: KeyboardEvent) {
        this.searchActive = true;
        if (this.keyboardEventsManager) {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                this.keyboardEventsManager.onKeydown(event);
                return false;
            } else if (event.key === "Enter") {
                if(this.keyboardEventsManager.activeItem) {
                    this.keyboardEventsManager.activeItem.selectItem();
                } else {
                    this.chooseSuggestion(this.searchText);
                }
                return false;
            }
        }
    }

    getPopularPlaces = async () => {
        this.placeService.place.subscribe(async (res) => {
            if (res) {
                if (this.utilityService.IsJsonString(res)) {
                    const country = JSON.parse(<any>res)['country'];
                    const data = await this.headerService.getPopularCities(country || this.urlArray[0]);
                    this.popularPlaces = data['data'].slice(0, 6).map(ele => {
                        ele.type = 'city';
                        ele.cityCode = ele.code;
                        return ele;
                    });
                }
            }
        });
    }
    ngOnInit() {
        this.getPopularPlaces();
        this.placeService.place.subscribe(res => {
            if (res) {
                if (this.utilityService.IsJsonString(res)) {
                    const data = JSON.parse(<any>res);
                    if (data['currentPlace'] != undefined) {
                        this.activePlace = data['currentPlace'];
                    }
                    if (data && data['country'] && data['city']) {
                        this.homeUrl = ('/' + data['country'] + '/' + data['city']).toLowerCase();
                    }
                    
                }
            }
        });
    }

}
