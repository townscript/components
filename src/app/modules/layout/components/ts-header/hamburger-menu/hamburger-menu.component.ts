import { Component, Input, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';


@Component({
    selector: 'app-hamburger-menu',
    templateUrl: './hamburger-menu.component.html',
    styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent implements OnInit {

    panelOpen: any;
    panelOpen2: any;
    active: any;
    constructor() {

    }

    ngAfterViewInit() {

    }
    ngOnInit() {
    }

}
