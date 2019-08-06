import { OnInit } from '@angular/core';
import { TimeService } from '../../../../../shared/services/time.service';
import { DatePipe } from '@angular/common';
import { HeaderService } from '../ts-header.service';
export declare class HamburgerMenuComponent implements OnInit {
    private headerService;
    private timeService;
    datepipe: DatePipe;
    panelOpen: any;
    panelOpen2: any;
    active: any;
    constructor(headerService: HeaderService, timeService: TimeService, datepipe: DatePipe);
    ngAfterViewInit(): void;
    ngOnInit(): void;
}
