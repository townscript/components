import { Component, Input, OnInit, ViewChild, ElementRef, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { HeaderService } from '../../../modules/layout/components/ts-header/ts-header.service';
import { config } from '../../../core/app-config';
import { PlaceService } from '../../../modules/layout/components/ts-header/place.service';

@Component({
    selector: 'app-city-search-popup',
    templateUrl: './city-search-popup.component.html',
    styleUrls: ['./city-search-popup.component.scss']
})
export class CitySearchPopupComponent implements OnInit, AfterViewInit {

    @ViewChild('cityInput', { static: true }) cityInput: ElementRef;
    @Input() showArrow = true;
    @Input() activePlace: string;
    @Output() activePlaceChange: EventEmitter<String> = new EventEmitter();
    @Input() cityPopupActive: boolean;
    @Output() cityPopupActiveChange: EventEmitter<boolean> = new EventEmitter();
    @Input() popularPlaces: any;
    @Input() closeSuggestions = false;
    @Output() closeSuggestionsChange: EventEmitter<boolean> = new EventEmitter();

    citySearchActive = true;
    placeSearchResults: any;

    router: Router = config.router;
    urlArray: any;
    cityQuery: string;
    cityQueryChanged: Subject<string> = new Subject<string>();
    client: any;
    cityLoading = false;
    index: any;



    constructor(private placeService: PlaceService, private headerService: HeaderService, public datepipe: DatePipe) {
        this.cityQueryChanged.pipe(debounceTime(300)).subscribe(text => this.callSearchCity(text));
        this.buildUrlArray();
    }

    buildUrlArray = (): void => {
        if (this.router.url) {
            this.urlArray = this.router.url.split('?')[0].replace('/', '').split('/');
        } else {
            this.urlArray = ['in'];
        }
    }

    callSearchCity = (query) => {
        this.cityLoading = true;
        this.headerService.getplaceSearchResults(query).subscribe(res => {
            this.placeSearchResults = res['data'];
            this.cityLoading = false;
        });
    }

    placeChangedToOnline = () => {
        const currentPlace = this.placeService.getCurrentValue();
        const twoDigitCode = currentPlace['country']?.toLowerCase() || this.urlArray[0];
        const tsType = this.urlArray[2];
        let tsTypeUrl = '';
        if (tsType !== 'upcoming-events') {
            tsTypeUrl = tsType && tsType.length > 0 ? '/' + tsType.toLowerCase() : '';
        }
        const finalUrl = `/${twoDigitCode}/online${tsTypeUrl}`;
        console.log(finalUrl);
        this.router.navigate([finalUrl], { state: { place: currentPlace } });
        this.activePlace = 'Online';
        this.activePlaceChange.emit('Online');
        this.cityPopupActive = false;
        this.cityPopupActiveChange.emit(false);
    }

    placeChanged = (place) => {
        const tsType = this.urlArray[2];
        let tsTypeUrl = '';
        if (tsType !== 'upcoming-events') {
            tsTypeUrl = tsType && tsType.length > 0 ? '/' + tsType.toLowerCase() : '';
        }
        let finalUrl = '';
        if (place.type === 'country') {
            finalUrl = '/' + place.twoDigitCode.toLowerCase() +
                '/' + place.country.split(' ').join('-').toLowerCase() + tsTypeUrl;
        }
        if (place.type === 'city') {
            finalUrl = '/' + place.countryCode.toLowerCase() + '/' + place.cityCode + tsTypeUrl;
        }
        if (place.type === 'locality') {
            finalUrl = '/' + place.countryCode.toLowerCase() + '/' + place.localityCode + '--' + place.cityCode + tsTypeUrl;
        }
        if (place.type === 'unstructured') {
            const name = place.name.replace(/,/g, '').replace(/ /g, '-');
            let secondaryText = '';
            if (place.secondaryText) {
                secondaryText = '--' + place.secondaryText.replace(/,/g, '').replace(/ /g, '-');
            }
            finalUrl = '/s/' + name + secondaryText + tsTypeUrl;
        }
        console.log(finalUrl);
        this.router.navigate([finalUrl], { state: { place: place } });
        // this.placeService.updatePlace(place.name);
        this.activePlace = place.name;
        this.activePlaceChange.emit(place.name);
        this.cityPopupActive = false;
        this.cityPopupActiveChange.emit(false);
    }

    openCityPopup = () => {
        this.cityPopupActive = true;
        this.cityInput.nativeElement.focus();
    }

    searchCity = (text) => {
        if (!text || text.length === 0) {
            this.placeSearchResults = [];
        }
        if (text != undefined && text.length > 0) {
            this.cityQueryChanged.next(text);
        }
        this.updateAndEmitCloseCitySuggestion(false);
    }

    updateAndEmitCloseCitySuggestion = (val: boolean): void => {
        this.closeSuggestions = val;
        this.closeSuggestionsChange.emit(this.closeSuggestions);
    }

    ngAfterViewInit() {
        this.citySearchActive = true;
        this.cityInput.nativeElement.focus();
    }
    ngOnInit() {
    }
}
