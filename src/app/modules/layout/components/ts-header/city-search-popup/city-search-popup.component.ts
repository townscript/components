import { Component, Input, OnInit, ViewChild, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common';
import { HeaderService } from '../ts-header.service';
import { Router } from '@angular/router';
import { config } from '../../../../../core/app-config';
import { PlaceService } from '../place.service';


@Component({
    selector: 'app-city-search-popup',
    templateUrl: './city-search-popup.component.html',
    styleUrls: ['./city-search-popup.component.scss']
})
export class CitySearchPopupComponent implements OnInit {

    @ViewChild('cityInput', { static: true }) cityInput: ElementRef;
    @Input() showArrow = true;
    @Input() activeCity: string;
    @Output() activeCityChange: EventEmitter<String> = new EventEmitter();
    @Input() cityPopupActive: boolean;
    @Output() cityPopupActiveChange: EventEmitter<boolean> = new EventEmitter();


    citySearchActive = true;
    placeSearchResults: any;

    router: Router = config.router;
    urlArray: any;
    cityQuery: string;
    cityQueryChanged: Subject<string> = new Subject<string>();
    client: any;
    cityLoading = false;
    index: any;

    popularPlaces: any;

    constructor(private placeService: PlaceService, private headerService: HeaderService, private timeService: TimeService, public datepipe: DatePipe) {
        this.cityQueryChanged.pipe(debounceTime(300)).subscribe(text => this.callSearchCity(text));
        if (this.router.url) {
            this.urlArray = this.router.url.replace('/', '').split('/')
        } else {
            this.urlArray = ['in']
        }
    }
    callSearchCity = (query) => {
        this.cityLoading = true;
        this.headerService.getplaceSearchResults(query).subscribe(res => {
            this.placeSearchResults = res['data'];
            this.cityLoading = false;
        });
    }
    placeChanged = (place) => {
        if (place.type === 'country') {
            this.router.navigate(['/' + place.twoDigitCode.toLowerCase()], { state: { place: place } });
        }
        if (place.type === 'city') {
            this.router.navigate(['/' + place.countryCode.toLowerCase() + '/' + place.cityCode], { state: { place: place } });
        }
        if (place.type === 'locality') {
            this.router.navigate(['/' + place.countryCode.toLowerCase() + '/' + place.cityCode + '/' + place.localityCode],
                { state: { place: place } });
        }
        if (place.type === 'unstructured') {
            const name = place.name.replace(/,/g, '').replace(/ /g, '-');
            const secondaryText = place.secondaryText.replace(/,/g, '').replace(/ /g, '-');
            this.router.navigate(['/s/' + name + '--' + secondaryText], { state: { place: place } });
        }
        this.placeService.updatePlace(place.name);
        this.activeCity = place.name;
        this.activeCityChange.emit(place.name);
        this.cityPopupActive = false;
        this.cityPopupActiveChange.emit(false);
    }
    openCityPopup = () => {
        this.cityPopupActive = true;
        this.cityInput.nativeElement.focus();
    }

    searchCity = (text) => {
        if (!text || text.length == 0) {
            this.placeSearchResults = [];
        }
        if (text != undefined && text.length > 0) {
            this.cityQueryChanged.next(text);
        }
    }
    getPopularPlaces = () => {
        this.headerService.getPopularCities(this.urlArray[0]).subscribe(res => {
            this.popularPlaces = res['data'].slice(0, 6).map(ele => {
                ele.type = 'city';
                ele.cityCode = ele.code;
                return ele;
            });
        });
    }
    ngAfterViewInit() {
        this.citySearchActive = true;
        this.cityInput.nativeElement.focus();
        this.getPopularPlaces();
    }
    ngOnInit() {

    }
}


