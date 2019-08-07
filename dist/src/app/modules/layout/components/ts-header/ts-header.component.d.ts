import { OnInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserService } from '../../../../shared/services/user-service';
export declare class TsHeaderComponent implements OnInit {
    private dialog;
    private userService;
    Components: Array<String>;
    source: string;
    algoliaIndexName: string;
    citySuggestions: ElementRef;
    user: any;
    userMenu: boolean;
    cityPopupActive: boolean;
    constructor(dialog: MatDialog, userService: UserService);
    clickout(event: any): void;
    openLogin(): void;
    openMyProfileComponent: () => void;
    ngOnInit(): void;
}
