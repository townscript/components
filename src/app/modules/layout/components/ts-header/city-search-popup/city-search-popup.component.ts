import { Component, Input, OnInit, ViewChild, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common'
import { HeaderService } from '../ts-header.service';
import { Router } from '@angular/router';
import { config } from '../../../../../core/app-config';


@Component({
    selector: 'app-city-search-popup',
    templateUrl: './city-search-popup.component.html',
    styleUrls: ['./city-search-popup.component.scss']
})
export class CitySearchPopupComponent implements OnInit {

    @ViewChild('cityInput', { static: true }) cityInput: ElementRef;
    @Input() showArrow: boolean = true;
    @Input() activeCity: string;
    @Output() activeCityChange: EventEmitter<String> = new EventEmitter();
    @Input() cityPopupActive: boolean;
    @Output() cityPopupActiveChange: EventEmitter<boolean> = new EventEmitter();


    citySearchActive: boolean = true;
    placeSearchResults: any;

    router: Router = config.router;
    cityQuery: string;
    cityQueryChanged: Subject<string> = new Subject<string>();
    client: any;
    index: any;

    popularPlaces = ['Pune', 'Mumbai', 'Bangalore', 'New Delhi', 'Lucknow', 'Kanpur'];

    constructor(private headerService: HeaderService, private timeService: TimeService, public datepipe: DatePipe) {
        this.cityQueryChanged.pipe(debounceTime(300)).subscribe(text => this.callSearchCity(text));

    }
    callSearchCity = (query) => {
        this.headerService.getplaceSearchResults(query).subscribe(res => {
            this.placeSearchResults = res['data'];
        });
    }
    placeChanged = (place) => {
        if (place.type == "country") {
            this.router.navigate(["/" + place.twoDigitCode.toLowerCase()], { state: { place: place } })
        }
        if (place.type == "city") {
            this.router.navigate(["/" + place.countryCode.toLowerCase() + "/" + place.cityCode], { state: { place: place } })
        }
        if (place.type == "locality") {
            this.router.navigate(["/" + place.countryCode.toLowerCase() + "/" + place.cityCode + "/" + place.localityCode], { state: { place: place } })
        }
        if (place.type == "unstructured") {
            let name = place.name.replace(/,/g, "").replace(/ /g, "-");
            let secondaryText = place.secondaryText.replace(/,/g, "").replace(/ /g, "-");
            this.router.navigate(["/s/" + name + "--" + secondaryText], { state: { place: place } });
        }
        this.activeCity = place.name;
        this.activeCityChange.emit(place.name);
        this.cityPopupActive = false;
        this.cityPopupActiveChange.emit(false);
    }
    openCityPopup = () => {
        this.cityPopupActive = true;
        this.cityInput.nativeElement.focus()
    }

    searchCity = (text) => {
        if (!text || text.length == 0) {
            this.placeSearchResults = [];
        }
        if (text != undefined && text.length > 0)
            this.cityQueryChanged.next(text);
    }
    ngAfterViewInit() {
        this.citySearchActive = true
        this.cityInput.nativeElement.focus()
    }
    ngOnInit() { }
}


