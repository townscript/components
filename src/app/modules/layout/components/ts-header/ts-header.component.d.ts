import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
export declare class TsHeaderComponent implements OnInit {
    datepipe: DatePipe;
    Components: Array<String>;
    source: string;
    algoliaIndexName: string;
    constructor(datepipe: DatePipe);
    ngOnInit(): void;
}
