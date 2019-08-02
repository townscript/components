import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
export declare class TsHeaderComponent implements OnInit {
    datepipe: DatePipe;
    Components: Array<String>;
    source: string;
    algoliaIndexName: string;
    router: Router;
    constructor(datepipe: DatePipe);
    ngOnInit(): void;
}
