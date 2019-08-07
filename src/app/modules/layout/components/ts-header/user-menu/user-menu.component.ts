import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

    @Input("panelOpen1") panelOpen1: boolean = false;
    @Input("panelOpen2") panelOpen2: boolean = false;
    constructor() {

    }

    ngAfterViewInit() {
    }
    ngOnInit() { }

}
