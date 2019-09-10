import { OnInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserService } from '../../../../shared/services/user-service';
import { PlaceService } from './place.service';
export declare class TsHeaderComponent implements OnInit {
    private placeService;
    private dialog;
    private userService;
    Components: Array<String>;
    source: string;
    algoliaIndexName: string;
    shadow: boolean;
    citySuggestions: ElementRef;
    userMenuEle: ElementRef;
    user: any;
    router: any;
    userMenu: any;
    activeCity: any;
    s3BucketUrl: any;
    cityPopupActive: boolean;
    constructor(placeService: PlaceService, dialog: MatDialog, userService: UserService);
    clickout(event: any): void;
    openLogin(): void;
    navigateToMobileSearch(): void;
    openMyProfileComponent: () => void;
    ngOnInit(): void;
}
