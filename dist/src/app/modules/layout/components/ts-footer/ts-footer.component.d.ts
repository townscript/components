import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserService } from './../../../../shared/services/user-service';
export declare class TsFooterComponent implements OnInit {
    private dialog;
    private userService;
    city: any;
    placeId: any;
    source: any;
    popularEvents: any;
    recentBlogs: any;
    popularReads: any;
    popularEventsData: any;
    countryCityMap: any;
    myBookingsURL: string;
    constructor(dialog: MatDialog, userService: UserService);
    openContactUs: () => void;
    openMyBooking: () => void;
    redirectToMyBookings: () => void;
    openLogin: () => void;
    ngOnInit(): void;
}
