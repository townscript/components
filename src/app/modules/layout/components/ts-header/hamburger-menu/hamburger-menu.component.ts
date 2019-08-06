import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as algoliaSearchImported from "algoliasearch";
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common'
import { HeaderService } from '../ts-header.service';
import { Router } from "@angular/router";


@Component({
    selector: 'app-hamburger-menu',
    templateUrl: './hamburger-menu.component.html',
    styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

    constructor(private headerService: HeaderService, private timeService: TimeService, public datepipe: DatePipe) {

    }

    ngAfterViewInit() {

    }
    ngOnInit() {
        console.log("init");

    }

}
