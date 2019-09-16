import { __decorate, __metadata, __param } from 'tslib';
import { Injectable, Inject, PLATFORM_ID, InjectionToken, ɵɵdefineInjectable, ɵɵinject, Input, Component, ViewEncapsulation, ViewChild, ElementRef, HostListener, EventEmitter, Output, Directive, Pipe, NgModule } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar, MatDialogConfig, MatDialog, MAT_DIALOG_DATA, MatDialogRef as MatDialogRef$1, MatRippleModule, MatSnackBarModule } from '@angular/material';
import { DateTime } from 'luxon';
import { BehaviorSubject, Subject } from 'rxjs';
import { isPlatformBrowser, DOCUMENT, DatePipe, CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams, HttpClientModule } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import * as algoliaSearchImported from 'algoliasearch';
import { debounceTime, map } from 'rxjs/operators';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaComponent, RecaptchaModule } from 'ng-recaptcha';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { TsFormsModule } from '@townscript/elements';
import { MatRippleModule as MatRippleModule$1 } from '@angular/material/core';
import { MatSnackBarModule as MatSnackBarModule$1 } from '@angular/material/snack-bar';

const config = {
    baseUrl: "",
    router: "",
    activatedRoute: "",
    betaHostName: "",
    s3BaseUrl: "",
    s3Bucket: ""
};

let BrowserService = class BrowserService {
    constructor() {
        this.isMobile = function () {
            let check = false;
            (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true; })(navigator.userAgent || navigator.vendor || window['opera']);
            return check;
        };
    }
};
BrowserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], BrowserService);

let CookieService = class CookieService {
    constructor() { }
    getCookie(name) {
        const ca = document.cookie.split(';');
        const caLen = ca.length;
        const cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return null;
    }
    deleteCookie(name) {
        this.setCookie(name, '', -1);
    }
    setCookie(name, value, expireDays, path = '') {
        const d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        const expires = 'expires=' + d.toUTCString();
        document.cookie = name + '=' + value + '; ' + expires + (path.length > 0 ? '; path=' + path : '');
    }
};
CookieService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], CookieService);

class TsControlValueAccessor {
    constructor() {
        this.onChangePropagation = () => { };
        this.onTouchedPropagation = () => { };
    }
    registerOnChange(fn) {
        this.onChangePropagation = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedPropagation = fn;
    }
    setDisabledState(isDisabled) {
    }
}

let ApiService = class ApiService {
    constructor() {
        this.FB_APP_ID = '303059286557418';
        this.hostName = config.baseUrl;
        this.betaHostName = config.betaHostName || 'beta.tsdugout.in/';
        this.S3_BUCKET_NAME = 'townscript-testing';
        this.GA_TRACKER_CODE = 'UA-68181318-1';
        this.SERVER_URL = config.baseUrl;
        this.API_SERVER = config.baseUrl + 'api/';
        this.algoliaIndexName = 'tsTesting';
        this.IPINFO_ACCESS_TOKEN = 'a27cfbcc77e854'; // change afterwards
        this.RECORD_FOR_KINESIS = true; // temporary
        this.PAYMENT_PAGE_URL = config.baseUrl + 'payment/';
    }
};
ApiService = __decorate([
    Injectable()
], ApiService);

let NotificationService = class NotificationService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    success(message, duration, action) {
        const config = new MatSnackBarConfig();
        config.panelClass = ['ts-notification-success'];
        config.duration = duration;
        this.snackBar.open(message, action, config);
    }
};
NotificationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MatSnackBar])
], NotificationService);

let TimeService = class TimeService {
    constructor() {
        this.convertDateToTimezone = (date, timeZoneOffset) => {
            var date = DateTime.fromISO(date, { zone: timeZoneOffset });
            var dateString = DateTime.fromISO(date).toString();
            return this.formatLocalDate(new Date(dateString));
        };
        this.formatLocalDate = (now) => {
            var tzo = -now.getTimezoneOffset(), dif = tzo >= 0 ? '+' : '-', pad = function (num) {
                var norm = Math.abs(Math.floor(num));
                return (norm < 10 ? '0' : '') + norm;
            };
            return now.getFullYear()
                + '-' + pad(now.getMonth() + 1)
                + '-' + pad(now.getDate())
                + 'T' + pad(now.getHours())
                + ':' + pad(now.getMinutes())
                + ':' + pad(now.getSeconds())
                + '.000'
                + dif + pad(tzo / 60)
                + pad(tzo % 60);
        };
    }
};
TimeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], TimeService);

let UserService = class UserService {
    constructor(cookieService, document, platformId) {
        this.cookieService = cookieService;
        this.document = document;
        this.platformId = platformId;
        this.user$ = new BehaviorSubject(null);
        this.user = this.user$.asObservable();
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
        if (this.documentIsAccessible) {
            let user = this.cookieService.getCookie("townscript-user");
            console.log("got user from cookie" + user);
            if (user != null && user.length > 0) {
                this.updateUser(JSON.parse(user));
            }
        }
    }
    updateUser(data) {
        this.user$.next(data);
    }
};
UserService = __decorate([
    Injectable(),
    __param(1, Inject(DOCUMENT)),
    __param(2, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [CookieService, Object, InjectionToken])
], UserService);

let FollowService = class FollowService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.baseUrl = config.baseUrl;
        this.apiServerUrl = this.baseUrl + 'api/';
        this.listingsUrl = this.baseUrl + 'listings/';
        this.followData$ = new BehaviorSubject(null);
        this.followData = this.followData$.asObservable();
        this.userService.user.subscribe(data => {
            this.user = data;
            if (this.user && this.user.userId) {
                this.getFollowData(this.user.userId);
            }
        });
    }
    createFollowData(type, typeId, userId) {
        const data = {
            type: type,
            typeId: typeId,
            userId: userId
        };
        return this.http.post(this.listingsUrl + 'followData/follow', data);
    }
    getFollowData(id) {
        this.http.get(this.listingsUrl + 'followData/?userId=' + id).subscribe(res => {
            this.updateFollowData(res['data']);
        });
    }
    unfollow(followDataId) {
        return this.http.post(this.listingsUrl + 'followData/unfollow/' + followDataId, {});
    }
    updateFollowData(data) {
        this.followData$.next(data);
    }
};
FollowService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient, UserService])
], FollowService);

let PlaceService = class PlaceService {
    constructor(cookieService, document, platformId) {
        this.cookieService = cookieService;
        this.document = document;
        this.platformId = platformId;
        this.currentPlace$ = new BehaviorSubject(null);
        this.place = this.currentPlace$.asObservable();
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
        if (this.documentIsAccessible) {
            const location = this.cookieService.getCookie('location');
            console.log('got location from cookie' + location);
            if (location != null && location.length > 0) {
                this.updatePlace(JSON.parse(location));
            }
        }
    }
    updatePlace(data) {
        data = JSON.stringify(data);
        this.cookieService.setCookie('location', data, 100000000, '/');
        console.log("sending to observable");
        this.currentPlace$.next(data);
    }
};
PlaceService.ngInjectableDef = ɵɵdefineInjectable({ factory: function PlaceService_Factory() { return new PlaceService(ɵɵinject(CookieService), ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID)); }, token: PlaceService, providedIn: "root" });
PlaceService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(1, Inject(DOCUMENT)),
    __param(2, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [CookieService, Object, InjectionToken])
], PlaceService);

let HeaderService = class HeaderService {
    constructor(http) {
        this.http = http;
        this.baseUrl = config.baseUrl;
        this.apiServerUrl = this.baseUrl + 'api/';
        this.getplaceSearchResults = (query) => {
            return this.http.get(this.baseUrl + 'listings/place/autocomplete?query=' + query);
        };
    }
    getPopularCities(countryCode) {
        return this.http.get(this.baseUrl + 'listings/city/popular/' + countryCode);
    }
};
HeaderService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], HeaderService);

let TsFooterComponent = class TsFooterComponent {
    constructor() {
        this.source = "landingPages";
        this.popularEvents = [];
        this.recentBlogs = [];
        this.popularReads = [];
        this.openContactUs = () => {
            window.open('/contact-us');
        };
        this.openMyBooking = () => {
            window.open('/signin?rdurl=/dashboard/mybookings', '_self');
        };
    }
    ngOnInit() {
        if (this.source == "landingPages") ;
    }
};
__decorate([
    Input("source"),
    __metadata("design:type", Object)
], TsFooterComponent.prototype, "source", void 0);
__decorate([
    Input("popularEvents"),
    __metadata("design:type", Object)
], TsFooterComponent.prototype, "popularEvents", void 0);
__decorate([
    Input("recentBlogs"),
    __metadata("design:type", Object)
], TsFooterComponent.prototype, "recentBlogs", void 0);
__decorate([
    Input("popularReads"),
    __metadata("design:type", Object)
], TsFooterComponent.prototype, "popularReads", void 0);
TsFooterComponent = __decorate([
    Component({
        selector: 'ts-footer',
        template: "<footer class=\"ts-footer text-center pt-32 pb-24\" [class.new-footer]=\"source=='marketplace'\">\n    <div class=\"ts-container content-footer\">\n        <div class=\"flex mb-4\">\n            <div class=\"w-1/5 hidden-xs px-4\">\n                <h5>ORGANISE EVENTS</h5>\n                <ul class=\"list-unstyled\">\n                    <li><a href=\"/i/conference-registration\">Conferences</a></li>\n                    <li><a href=\"/i/workshops-and-trainings\">Workshops and Trainings</a></li>\n                    <li><a href=\"/i/college-fest-payment-portal\">College Festivals</a></li>\n                    <li><a href=\"/i/marathon-cycling-trips-treks-registration\">Sports and Fitness Events</a></li>\n                    <li><a href=\"/i/entertainment-events-ticketing\">Entertainment Events</a></li>\n                    <li><a href=\"/i/meetup-registration\">Meetups and Reunions</a></li>\n                    <li><a href=\"/i/treks-trips-registration\">Treks and Trips</a></li>\n                    <!-- <li><a href=\"/i/fundraising-crowdfunding\">Fundraisings</a></li> -->\n                </ul>\n            </div>\n            <div class=\"w-1/5 px-4 hidden-xs\">\n                <h5>POPULAR SEARCHES</h5>\n                <ul class=\"list-unstyled\">\n                    <!--<li><a href=\"/pune/new-year-party\">New Year Parties In Pune</a></li>\n\t\t\t\t<li><a href=\"/mumbai/new-year-party\">New Year Parties In Mumbai</a></li>\n\t\t\t\t<li><a href=\"/delhi/new-year-party\">New Year Parties In Delhi</a></li>\n\t\t\t\t<li><a href=\"/bangalore/new-year-party\">New Year Parties In Bangalore</a></li>-->\n                    <li><a\n                            href=\"http://support.townscript.com/support/solutions/articles/1000265220-list-of-countries-supported-by-townscript-\">\n                            List of Countries supported by Townscript</a></li>\n                    <li><a href=\"/i/sell-event-tickets-online\">Sell Event Tickets Online</a></li>\n                    <li><a href=\"/i/event-management-software\">Event Management Software</a></li>\n                    <li><a href=\"/i/event-registration-software\">Event Registration Software</a></li>\n                    <li><a href=\"/i/conference-management-system\">Conference management System</a></li>\n                    <li><a href=\"/i/event-planning-software\">Event Planning Software</a></li>\n                    <li><a href=\"/i/online-event-ticketing\">Online Event Ticketing</a></li>\n                    <li><a href=\"/i/corporate-event-management\">Corporate Event Management</a></li>\n                </ul>\n            </div>\n            <div class=\"w-1/5 px-4 hidden-xs\" *ngIf=\"source=='landingPages'\">\n                <h5>RECENT BLOGS</h5>\n                <ul class=\"list-unstyled blog-links\">\n                    <li *ngFor=\"let blog of recentBlogs\"><a [href]=\"blog.url\">{{blog.title}}</a></li>\n                </ul>\n            </div>\n            <div class=\"w-1/5 px-4 hidden-xs\" *ngIf=\"source=='marketplace'\">\n                <h5>POPULAR EVENTS</h5>\n                <ul class=\"list-unstyled blog-links\">\n                    <li *ngFor=\"let event of popularEvents\"><a [href]=\"event.url\">{{event.title}}</a></li>\n                </ul>\n            </div>\n            <div class=\"w-1/5 px-4 hidden-xs\">\n                <h5>POPULAR READS</h5>\n                <ul class=\"list-unstyled blog-links\">\n                    <li *ngFor=\"let read of popularReads\"><a [href]=\"read.url\" target=\"_blank\">{{read.title}}</a></li>\n                </ul>\n            </div>\n            <div class=\"w-1/5 hidden-xs pl-12\">\n                <h5>BOOKINGS</h5>\n                <ul class=\"list-unstyled\">\n                    <li>\n                        <a href (click)=\"openMyBooking()\">My Bookings</a>\n                    </li>\n                </ul>\n                <h5 (click)=\"openContactUs()\">GET IN TOUCH</h5>\n                <!--<h5><a href=\"mailto:service@townscript.com\" target=\"_blank\" class=\"mail-to visible-xs\">service@townscript.com</a></h5>-->\n                <ul class=\"list-unstyled\">\n                    <!-- \t\t\t\t<li class=\"hidden-xs\">\n\t\t\t\t\t<a href=\"#\">Contact us</a>\n\t\t\t\t</li> -->\n                    <li class=\"social-list-item\">\n                        <ul class=\"social-list clearfix\">\n                            <li>\n                                <a href=\"https://www.facebook.com/townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-facebook\"></i></a>\n                            </li>\n                            <li>\n                                <a href=\"https://twitter.com/townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-twitter\"></i></a>\n                            </li>\n                            <li>\n                                <a href=\"https://plus.google.com/+Townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-google-plus\"></i></a>\n                            </li>\n                            <li>\n                                <a href=\"https://www.linkedin.com/company/townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-linkedin\"></i></a>\n                            </li>\n                            <!--<li>\n\t\t\t\t\t\t\t<a href=\"mailto:service@townscript.com\" target=\"_blank\"><i class=\"ion-email\"></i></a>\n\t\t\t\t\t\t</li>-->\n                        </ul>\n                    </li>\n                </ul>\n                <h5 class=\"hidden-xs\">ORGANIZER APP</h5>\n                <ul class=\"list-apps hidden-xs\">\n                    <li>\n                        <a href=\"//play.google.com/store/apps/details?id=com.dyulok.android.organizerapp&hl=en_IN\"\n                            title=\"Download on Google play\" class=\"store-icon google-play-icon\" target=\"_blank\">Download\n                            on Google\n                            play</a>\n                    </li>\n                    <li>\n                        <a href=\"//itunes.apple.com/in/app/townscript-event-manager/id1441088900?mt=8\"\n                            title=\"Download on App Store\" target=\"_blank\" class=\"store-icon app-store-icon\">Download on\n                            App Store</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"ts-container\">\n        <div class=\"brand-footer\">\n            <div class=\"flex mb-4\">\n                <div class=\"w-1/4\">\n                    <img src=\"assets/images/ts-logoBMS.png\" alt=\"Townscript Event Ticketing Logo\"\n                        title=\"Townscript Event Ticketing Logo\" />\n                    <a class=\"ts-footer__copyright\">Copyright@2019</a>\n                    <!--<a href=\"mailto:service@townscript.com\" target=\"_blank\" class=\"ts-footer__mail hidden-xs\">service@townscript.com</a>-->\n                </div>\n                <div class=\"w-2/3 linear-footer hidden-xs\">\n                    <h5>LEARN MORE</h5>\n                    <br>\n                    <ul class=\"list-linear\">\n                        <!-- <li><a href=\"#\">Features</a></li> -->\n                        <li><a href=\"/pricing\">Pricing</a></li>\n                        <li><a href=\"/how-it-works\" ts-data-analytics prop-event=\"click\" eventLabel=\"How It Works\"\n                                prop-clicked-location=\"Footer\">How it works</a></li>\n                        <!-- <li><a href=\"#\">Mobile Apps</a></li> -->\n                        <li><a href=\"//townscript-api.readme.io/\" target=\"_blank\">APIs for Developers</a></li>\n                        <li><a href=\"/terms-and-conditions\">Policies</a></li>\n                        <li><a href=\"/privacy-policy\">Privacy</a></li>\n                        <li><a href=\"http://support.townscript.com/support/home\" target=\"_blank\">Support / FAQs</a></li>\n                    </ul>\n                    <div class=\"linear-footer hidden-xs\" *ngIf=\"source=='marketplace'\">\n                        <h5>POPULAR CITIES</h5>\n                        <br>\n                        <ul class=\"list-linear\">\n                            <!-- <li *ngFor=\"let city of countryCityMap\">\n                                <div (click)=\"onChangeCity(city)\"><a href=\"/{{city | lowercase}}\">{{city}}</a></div>\n                            </li> -->\n                        </ul>\n                    </div>\n                    <div class=\"linear-footer hidden-xs\">\n                        <h5>ABOUT</h5>\n                        <br>\n                        <ul class=\"list-linear\">\n                            <li><a href=\"/about-us\">About us</a></li>\n                            <li><a href=\"/contact-us\">Contact us</a></li>\n                            <!-- <li><a href=\"#\">Career</a></li> -->\n                            <!-- <li><a href=\"#\">Media</a></li> -->\n                            <li><a href=\"http://blog.townscript.com\" target=\"_blank\">Blog</a></li>\n                            <li><a href=\"http://eventmagazine.townscript.com/\" target=\"_blank\">Event Magazine</a></li>\n                            <li><a href=\"https://productblog.townscript.com/\" target=\"_blank\">Product Diary</a></li>\n                            <li><a href=\"/sitemap\" target=\"_blank\">Sitemap</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"w-1/12 mixpanel-button align-text hidden-xs\">\n                    <a href=\"https://mixpanel.com/f/partner\" target=\"_blank\"><img\n                            src=\"//cdn.mxpnl.com/site_media/images/partner/badge_blue.png\" alt=\"Mobile Analytics\"\n                            width=\"100\"></a>\n                    <a href=\"https://www.g2crowd.com/products/townscript/reviews\" target=\"_blank\">\n                        <img src=\"https://s3-ap-southeast-1.amazonaws.com/common-resources/assets/g2badge.png\"\n                            alt=\"G2Crowd Townscript Reviews\" width=\"100\">\n                        <span>30 Reviews</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <br>\n</footer>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}footer{background-color:#ebebeb}footer.new-footer{background-color:#f7f7f7}footer.new-footer a,footer.new-footer h5{color:#3e3e3e;text-decoration:none;margin-bottom:0}footer h5{font-size:14px!important;font-weight:600}footer li,footer ul{margin-bottom:0}footer .content-footer{padding-bottom:20px}footer .m-l-8per{margin-left:8%}footer .brand-footer{border-top:1px solid #e5d7f1;padding-top:30px}footer img{width:165px}footer .bookmyshow-logo{width:140px}footer .mixpanel-button{padding:0;position:relative;left:-71px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}footer .mixpanel-button a,footer .mixpanel-button span{white-space:nowrap;display:block}footer .mixpanel-button img{width:100px!important}footer .mail-to{font-weight:600}footer a,footer h5{color:#683594;text-decoration:none;margin-bottom:0}footer a{letter-spacing:.4px;font-size:13px;font-weight:400}footer ul.social-list{list-style-type:none;padding:0;margin:0}footer ul.social-list li{display:inline-block;margin-right:10px}footer ul.social-list li i{font-size:17px}.ts-footer__copyright{display:block;text-indent:50px}@media (min-width:768px){.ts-footer__copyright{text-align:left}.ts-footer__mail{display:block;text-align:left;text-indent:50px;font-weight:700;line-height:36px}.ts-footer .container-fluid .row>div:first-child{padding-left:0}.ts-footer .container-fluid .row>div:nth-child(2){padding:0}.ts-footer .container-fluid .row>div:last-child{padding-right:0}footer{margin-top:100px;text-align:left;background-image:url(//s3.ap-south-1.amazonaws.com/townscript-common-resources/assets/footer-skyline.png);background-repeat:repeat-x;background-position:left top}footer .brand-footer .linear-footer h5,footer .brand-footer .linear-footer ul{display:inline-block;margin:2px 25px 2px 0;vertical-align:middle}footer .brand-footer .linear-footer .list-linear{list-style-type:none;padding:0}footer .brand-footer .linear-footer .list-linear li{float:left;margin-right:35px}footer ul.social-list{list-style-type:none;padding:0}footer ul.social-list li{display:block;float:left;margin-right:10px}footer ul.list-apps{list-style-type:none;padding:0}footer ul.list-apps li{line-height:50px;margin:10px 0}footer ul.list-apps li .store-icon{background-size:auto 45px;background-image:url(//s3.ap-south-1.amazonaws.com/townscript-common-resources/assets/store.png);background-repeat:no-repeat;display:block;width:150px;text-indent:-9999px}footer ul.list-apps li .store-icon.google-play-icon{background-position:0 0}footer ul.list-apps li .store-icon.app-store-icon{background-position:-172px 0}footer ul li{line-height:31px}footer ul li>a{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block}}.blog-links li{line-height:1.5;margin-bottom:18px}.blog-links li a{white-space:normal}"]
    }),
    __metadata("design:paramtypes", [])
], TsFooterComponent);

let LoginModalComponent = class LoginModalComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close();
    }
};
LoginModalComponent = __decorate([
    Component({
        selector: 'app-login-modal',
        template: "<app-ts-login-signup [mode]=\"'dialog'\" (closeDialog)='close()'></app-ts-login-signup>",
        encapsulation: ViewEncapsulation.None,
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.mat-dialog-bkg-container{background:#414243;opacity:.7!important}@media (max-width:480px){.cdk-overlay-pane{height:100vh!important;max-width:100vw!important}}"]
    }),
    __metadata("design:paramtypes", [MatDialogRef])
], LoginModalComponent);

let TsHeaderComponent = class TsHeaderComponent {
    constructor(placeService, dialog, userService) {
        this.placeService = placeService;
        this.dialog = dialog;
        this.userService = userService;
        this.Components = ['icon', 'createEventBtn', 'eventSearch',
            'userMenu', 'mobileSearch', 'mobileProfile', 'mobileCitySearch', 'mobileBack'];
        this.backState = false;
        this.source = 'marketplace';
        this.algoliaIndexName = 'tsTesting';
        this.shadow = true;
        this.router = config.router;
        this.s3BucketUrl = config.s3BaseUrl + config.s3Bucket;
        this.cityPopupActive = false;
        this.openMyProfileComponent = () => {
            this.router.navigate(['/profile']);
        };
        this.goBack = () => {
            this.router.navigate(['../']);
        };
        this.goToHomePage = () => {
            this.router.navigate([this.homePageUrl]);
        };
    }
    clickout(event) {
        if (!this.citySuggestions.nativeElement.contains(event.target)) {
            this.cityPopupActive = false;
        }
        if (!this.userMenuEle.nativeElement.contains(event.target)) {
            this.userMenu = false;
        }
    }
    openLogin() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;
        dialogConfig.backdropClass = 'mat-dialog-bkg-container';
        this.dialog.open(LoginModalComponent, dialogConfig);
    }
    navigateToMobileSearch() {
        this.router.navigate(['/mobile/search']);
    }
    ngOnInit() {
        this.userService.user.subscribe(data => {
            this.user = data;
        });
        this.placeService.place.subscribe(res => {
            console.log("subs to", res);
            if (res) {
                this.activePlace = JSON.parse(res)['currentPlace'];
                this.activeCity = JSON.parse(res)['city'];
                this.activeCountryCode = JSON.parse(res)['country'];
                this.homePageUrl = '/' + this.activeCountryCode.toLowerCase() + '/' + this.activeCity.toLowerCase();
            }
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], TsHeaderComponent.prototype, "Components", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TsHeaderComponent.prototype, "backState", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TsHeaderComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TsHeaderComponent.prototype, "algoliaIndexName", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TsHeaderComponent.prototype, "shadow", void 0);
__decorate([
    ViewChild('citySuggestions', { static: false }),
    __metadata("design:type", ElementRef)
], TsHeaderComponent.prototype, "citySuggestions", void 0);
__decorate([
    ViewChild('userMenuEle', { static: false }),
    __metadata("design:type", ElementRef)
], TsHeaderComponent.prototype, "userMenuEle", void 0);
__decorate([
    HostListener('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TsHeaderComponent.prototype, "clickout", null);
TsHeaderComponent = __decorate([
    Component({
        selector: 'ts-header',
        template: "<nav class=\"ts-header flex align-items-center\" *ngIf=\"source!='marketplace'\">\n    <div class=\"container flex align-items-center\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand flex align-items-center\" href=\"/\">\n                <img src=\"assets/images/ts-logo.svg\" alt=\"Townscript Event Ticketing Logo\"\n                    title=\"Townscript Event Ticketing Logo\" />\n            </a>\n        </div>\n        <div id=\"navbar\" class=\"nav-right hidden-xs\">\n            <ul>\n                <li>\n                    <a href=\"/signup\" ts-data-analytics prop-event=\"click\" eventLabel=\"Get Started\"\n                        prop-clicked-location=\"Animated Header\">\n                        <!-- <ts-button text=\"Create Event\"></ts-button> -->\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<nav class=\"ts-header-new w-screen fixed flex items-center\" [class.shadow]=\"shadow\" *ngIf=\"source=='marketplace'\">\n    <div class=\"ts-container flex items-center w-full\">\n        <div class=\"hidden md:block lg:w-1/6\">\n            <img (click)=\"goToHomePage()\" *ngIf=\"Components.indexOf('icon')>-1\" class=\"ts-logo cursor-pointer\"\n                src=\"assets/images/ts-logo.svg\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n        </div>\n        <div class=\"sm:w-1/4 max-50 flex md:hidden lg:hidden items-center\">\n            <!-- <i class=\"mdi mdi-menu mr-3 text-3xl color-blue\"></i> -->\n            <!-- <app-hamburger-menu class=\"mr-3\"></app-hamburger-menu> -->\n            <!-- <img class=\"ts-logo mr-3\" src=\"assets/images/ts-icon.svg\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" /> -->\n            <div *ngIf=\"backState\" (click)=\"goBack()\"\n                class=\"rounded-full flex py-1 px-3 mr-1 justify-center items-center\" matRipple>\n                <i class=\"mdi mdi-arrow-left text-2xl color-blue\"></i>\n            </div>\n            <i *ngIf=\"Components.indexOf('mobileCitySearch')>-1 && !backState\"\n                class=\"mdi mdi-map-marker color-blue text-2xl mr-2\"></i>\n            <div *ngIf=\"Components.indexOf('mobileCitySearch')>-1\" #citySuggestions\n                class=\"city-selection text-lg cursor-pointer w-full\" (click)=\"cityPopupActive=true\">\n                <div class=\"flex items-center w-full\" matRipple>\n                    <span class=\"mr-1 text-gray-700 truncate\">{{activePlace}}</span>\n                    <i class=\"mdi mdi-menu-down color-blue\"></i>\n                </div>\n                <app-city-search-popup [(cityPopupActive)]=\"cityPopupActive\" [(activePlace)]=\"activePlace\"\n                    [showArrow]=\"false\" class=\"popup\" *ngIf=\"cityPopupActive\">\n                </app-city-search-popup>\n            </div>\n        </div>\n        <div class=\"lg:w-5/12 ml-3 hidden sm:hidden md:hidden lg:flex\">\n            <app-search *ngIf=\"Components.indexOf('eventSearch')>-1\" class=\"w-full\"\n                [algoliaIndexName]=\"algoliaIndexName\"></app-search>\n        </div>\n        <div class=\"invisible sm:w-1/4 lg:w-1/12 flex items-center ml-6 view-type text-xl color-blue\">\n            <!-- <i class=\"active text-xl mdi mdi-book-open mr-4\"></i>\n            <i class=\"mdi mdi-map-legend mr-4\"></i>\n            <i class=\"mdi mdi-calendar-today mr-4\"></i> -->\n        </div>\n        <div class=\"lg:w-1/6 hidden sm:hidden md:hidden h-full lg:flex items-center pr-8\">\n            <div *ngIf=\"Components.indexOf('createEventBtn')>-1\"\n                class=\"create-btn cursor-pointer flex h-full justify-center items-center\">\n                <span class=\"text-base mr-2\">CREATE EVENT</span>\n                <i class=\"mdi mdi-ticket text-2xl\"></i>\n            </div>\n        </div>\n        <div #userMenuEle *ngIf=\"Components.indexOf('userMenu')>-1\"\n            class=\"position-relative sm:w-1/1 lg:w-1/6 justify-end hidden sm:hidden md:hidden lg:flex items-center\">\n            <div class=\"flex items-center cursor-pointer px-2\" (click)=\"openLogin()\" *ngIf=\"!user\" matRipple>\n                <i class=\"mdi mdi-account-circle text-4xl mr-2 color-blue\"></i>\n                <span>Login | Signup</span>\n            </div>\n            <div class=\"flex items-center cursor-pointer\" (click)=\"userMenu=!userMenu\" *ngIf=\"user\" matRipple>\n                <img class=\"rounded-full mr-2\" width=\"36\" [src]=\"s3BucketUrl+'/images/'+user?.s3imagename\" />\n                <!-- <span>{{user.user}}</span> -->\n            </div>\n            <div class=\"user-menu position-absolute shadow-md px-2 enter-slide-bottom\" *ngIf=\"userMenu\">\n                <app-user-menu [user]=\"user\" (close)=\"userMenu=!userMenu\"></app-user-menu>\n            </div>\n            <!-- <ts-button text=\"Login | Signup\" class=\"text-base\"></ts-button> -->\n        </div>\n\n        <!-- Mobile Menu -->\n        <div class=\"sm:w-1/1 ml-auto mr-2 flex  sm:flex md:flex lg:hidden items-center\">\n            <div *ngIf=\"Components.indexOf('mobileSearch')>-1\" class=\"rounded-full flex items-center\" matRipple\n                (click)=\"navigateToMobileSearch()\">\n                <i class=\"mdi mdi-magnify text-2xl ml-2 mr-2 color-blue\"></i>\n            </div>\n            <div *ngIf=\"Components.indexOf('mobileProfile')>-1\" class=\"rounded-full flex items-center\" matRipple>\n                <i class=\"mdi mdi-account text-2xl  ml-2 color-blue\" matRipple (click)=\"openMyProfileComponent()\"></i>\n            </div>\n        </div>\n    </div>\n</nav>\n<nav class=\"ts-header-new w-screen flex items-center\" [class.shadow]=\"shadow\" *ngIf=\"source=='marketplace'\">\n\n</nav>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ts-header{min-height:85px;background-color:#fff;width:100%;position:fixed;top:0;z-index:1000;box-shadow:0 15px 40px -20px rgba(40,44,63,.2)}.ts-header .container{display:-webkit-box;display:flex;width:100%;padding:0 10%}.ts-header .container .navbar-header .navbar-brand img{width:165px}.ts-header .container .nav-right{margin-left:auto}.ts-header .container .nav-right li,.ts-header .container .nav-right ul{margin-bottom:0}.ts-header-new{min-height:56px;background-color:#f7f7f7;top:0;z-index:1000}.ts-header-new .shadow{box-shadow:0 2px 4px 0 rgba(0,0,0,.11)}.ts-header-new .ts-logo{height:28px}.ts-header-new .popup{position:absolute;top:90%;width:100%;left:0}.ts-header-new .max-50{max-width:50%}@media (min-width:991px){.ts-container{padding:0 80px!important}.ts-header-new{min-height:68px}.ts-header-new .ts-logo{height:35px}.ts-header-new .view-type i{opacity:.8;padding:3px 9px}.ts-header-new .view-type i.active{opacity:1;background:#3782c4;border-radius:50%;color:#fff;box-shadow:0 0 5px 0 #8ec0ec}.ts-header-new .create-btn{width:100%;min-width:200px;border-radius:20.5px;color:#fff;white-space:nowrap;background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0;-webkit-transition:.1s;transition:.1s}.ts-header-new .create-btn:hover{box-shadow:0 4px 6px 0 #d4b1f0;-webkit-transform:translateY(-2px);transform:translateY(-2px)}.ts-header-new .user-menu{position:absolute;top:145%;width:300px;left:-42%;background:#fff}.ts-header-new .user-menu:before{content:\" \";width:0;height:0;position:absolute;top:-11px;left:84%;border-left:15px solid transparent;border-right:15px solid transparent;border-bottom:15px solid #fff;-webkit-filter:drop-shadow(0 -2px 1px rgba(0, 0, 0, .09));filter:drop-shadow(0 -2px 1px rgba(0, 0, 0, .09))}}:host ::ng-deep .mat-button-wrapper{font-size:16px!important}"]
    }),
    __metadata("design:paramtypes", [PlaceService, MatDialog, UserService])
], TsHeaderComponent);

let UserMenuComponent = class UserMenuComponent {
    constructor(notificationService, userService, cookieService) {
        this.notificationService = notificationService;
        this.userService = userService;
        this.cookieService = cookieService;
        this.panelOpen1 = false;
        this.panelOpen2 = false;
        this.close = new EventEmitter();
        this.s3BucketUrl = config.s3BaseUrl + config.s3Bucket;
    }
    logout() {
        this.close.emit();
        this.cookieService.deleteCookie("townscript-user");
        this.userService.updateUser(null);
        this.notificationService.success("You are logged out successfully!", 2000, "Dismiss");
    }
    ngAfterViewInit() {
    }
    ngOnInit() { }
};
__decorate([
    Input("panelOpen1"),
    __metadata("design:type", Boolean)
], UserMenuComponent.prototype, "panelOpen1", void 0);
__decorate([
    Input("panelOpen2"),
    __metadata("design:type", Boolean)
], UserMenuComponent.prototype, "panelOpen2", void 0);
__decorate([
    Input("user"),
    __metadata("design:type", Object)
], UserMenuComponent.prototype, "user", void 0);
__decorate([
    Output("close"),
    __metadata("design:type", Object)
], UserMenuComponent.prototype, "close", void 0);
UserMenuComponent = __decorate([
    Component({
        selector: 'app-user-menu',
        template: "<div class=\"user-menu  px-2 cursor-pointer\">\n    <div class=\"flex items-center border-b py-2 border-gray-300\">\n        <div class=\"mr-1 leading-none\">\n            <img class=\"rounded-full mr-2\" width=\"45\" [src]=\"s3BucketUrl+'/images/'+user?.s3imagename\" />\n        </div>\n        <div class=\"leading-tight\">\n            <span class=\"block text-lg text-gray-800\">{{user?.user}}</span>\n            <span class=\"text-xs text-gray-600 whitespace-nowrap\">View and edit profile</span>\n        </div>\n    </div>\n    <div class=\"menu mt-2 px-1\">\n        <ts-panel [disable]=\"false\">\n            <ts-panel-header (click)=\"panelOpen1=!panelOpen1\">\n                <div class=\"px-1 py-2 flex items-center border-b  border-gray-300 justify-between\"\n                    [class.border-dashed]=\"panelOpen1\" matRipple>\n                    <span class=\"text-gray-700\">\n                        Organizing Events\n                    </span>\n                    <i class=\"mdi mdi-chevron-down text-2xl color-blue\" [class.rotate-180]=\"panelOpen1\"></i>\n                </div>\n            </ts-panel-header>\n            <ts-panel-body [open]=\"panelOpen1\">\n                <div class=\"text-sm text-gray-800\">\n                    <div matRipple class=\"px-1 py-1 flex items-center\">\n                        <i class=\"mdi mdi-calendar-today mr-2 color-blue text-xl\"></i>\n                        Manage Event\n                    </div>\n                    <div matRipple class=\"px-1 py-1 flex items-center\">\n                        <i class=\"mdi mdi-cash mr-2 color-blue text-xl\"></i>\n                        Billings\n                    </div>\n                    <div matRipple class=\"px-1 py-1 flex items-center\">\n                        <i class=\"mdi mdi-chart-line mr-2 color-blue text-xl\"></i>\n                        Reports\n                    </div>\n                    <div matRipple class=\"px-1 py-1 pb-2 flex items-center border-b border-gray-300\">\n                        <i class=\"mdi mdi-bullhorn mr-2 color-blue text-xl\"></i>\n                        Promotions\n                    </div>\n                </div>\n            </ts-panel-body>\n        </ts-panel>\n        <ts-panel [disable]=\"false\">\n            <ts-panel-header (click)=\"panelOpen2=!panelOpen2\">\n                <div class=\"px-1 py-2 flex items-center border-b  border-gray-300 justify-between\"\n                    [class.border-dashed]=\"panelOpen2\" matRipple>\n                    <span class=\"text-gray-700\">\n                        Attending Events\n                    </span>\n                    <i class=\"mdi mdi-chevron-down text-2xl color-blue\" [class.rotate-180]=\"panelOpen2\"></i>\n                </div>\n            </ts-panel-header>\n            <ts-panel-body [open]=\"panelOpen2\">\n                <div class=\"text-sm text-gray-800\">\n                    <div matRipple class=\"px-1 py-1 flex items-center\">\n                        <i class=\"mdi mdi-ticket-account mr-2 color-blue text-xl\"></i>\n                        My Bookings\n                    </div>\n                    <div matRipple class=\"px-1 py-1 pb-2 flex items-center border-b border-gray-300\">\n                        <i class=\"mdi mdi-heart mr-2 color-blue text-xl \"></i>\n                        Following\n                    </div>\n                </div>\n            </ts-panel-body>\n        </ts-panel>\n        <div class=\"px-1 py-2 flex items-center justify-between\" (click)=\"logout()\" matRipple>\n            <span class=\"text-gray-700\">\n                Logout\n            </span>\n            <i class=\"mdi mdi-logout-variant text-2xl color-blue\"></i>\n        </div>\n    </div>\n</div>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}"]
    }),
    __metadata("design:paramtypes", [NotificationService, UserService, CookieService])
], UserMenuComponent);

const algoliasearch = algoliaSearchImported;
let SearchComponent = class SearchComponent {
    constructor(placeService, timeService, datepipe) {
        this.placeService = placeService;
        this.timeService = timeService;
        this.datepipe = datepipe;
        this.algoliaIndexName = 'tsTesting';
        this.searchTextChanged = new Subject();
        this.searchActive = false;
        this.citySearchActive = false;
        this.cityPopupActive = false;
        this.activePlace = 'Pune';
        this.cityQueryChanged = new Subject();
        this.router = config.router;
        this.popularPlaces = ['Pune', 'Mumbai', 'Bangalore', 'New Delhi', 'Lucknow', 'Kanpur'];
        this.callAlgolia = (text) => {
            this.index.search({
                query: text,
                hitsPerPage: 6
            }).then((data) => {
                this.filterDataForSearchResult(data);
            });
        };
        this.filterDataForSearchResult = (data) => {
            const results = data.hits;
            const interests = results.filter(ele => {
                return ele.objType == 'keyword' ||
                    ele.objType == 'eventtype' ||
                    ele.objType == 'category';
            });
            const organizers = results.filter(ele => ele.objType == 'organizer');
            const events = results.filter(ele => ele.objType == 'event');
            interests.map(interest => {
                interest.name = interest.name + ' Events';
                interest.location = 'PUNE';
            });
            organizers.map(organizer => {
                if (!organizer.imageUrl) {
                    organizer.imageUrl = 'https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-organizer.png';
                }
                if (organizer.secondaryTextProperties && organizer.secondaryTextProperties.country) {
                    organizer.location = organizer.secondaryTextProperties.country;
                }
            });
            events.map(event => {
                if (!event.imageUrl) {
                    event.imageUrl = 'https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-event.png';
                }
                if (event.secondaryTextProperties && event.secondaryTextProperties.city) {
                    event.location = event.secondaryTextProperties.city;
                }
                if (event.secondaryTextProperties && event.secondaryTextProperties.startTime) {
                    let startDateTime = event.secondaryTextProperties.startTime;
                    startDateTime = this.timeService.convertDateToTimezone(startDateTime, event.secondaryTextProperties.eventTimeZone);
                    event.secondaryTextProperties.startTime = this.datepipe.transform(startDateTime, 'd MMM yyyy, \' \'h:mma');
                }
            });
            this.searchResults = { 'interests': interests, 'organizers': organizers, 'events': events };
        };
        this.navigateToListing = (interest) => {
            this.router.navigate(['../' + interest], { relativeTo: config.activatedRoute.parent });
            this.searchActive = false;
        };
        this.navigateToEventPage = (eventCode) => {
            this.router.navigate(['/e/' + eventCode]);
            this.searchActive = false;
        };
        this.search = (text) => {
            if (text !== undefined && text.length > 0) {
                this.searchTextChanged.next(text);
            }
        };
        this.searchTextChanged.pipe(debounceTime(300)).subscribe(text => this.callAlgolia(text));
        this.client = algoliasearch('AT5UB8FMSR', 'c7e946f5b740ef035bd824f69dcc1612');
        this.index = this.client.initIndex(this.algoliaIndexName);
    }
    clickout(event) {
        if (!this.citySuggestions.nativeElement.contains(event.target)) {
            this.cityPopupActive = false;
        }
        if (this.searchResultsEle && !this.searchResultsEle.nativeElement.contains(event.target)) {
            this.searchActive = false;
        }
    }
    ngOnInit() {
        this.placeService.place.subscribe(res => {
            if (res) {
                this.activePlace = JSON.parse(res)['currentPlace'];
            }
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], SearchComponent.prototype, "algoliaIndexName", void 0);
__decorate([
    ViewChild('cityInput', { static: false }),
    __metadata("design:type", ElementRef)
], SearchComponent.prototype, "cityInput", void 0);
__decorate([
    ViewChild('citySuggestions', { static: false }),
    __metadata("design:type", ElementRef)
], SearchComponent.prototype, "citySuggestions", void 0);
__decorate([
    ViewChild('searchResultsEle', { static: false }),
    __metadata("design:type", ElementRef)
], SearchComponent.prototype, "searchResultsEle", void 0);
__decorate([
    HostListener('document:click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SearchComponent.prototype, "clickout", null);
SearchComponent = __decorate([
    Component({
        selector: 'app-search',
        template: "<div class=\"w-full lg:flex search-container relative\" [class.active]=\"searchActive\">\n    <div #searchResultsEle class=\"w-2/3 p-2 flex items-center relative left-section\">\n        <i class=\"mdi mdi-magnify text-2xl color-blue p-2\"></i>\n        <input [(ngModel)]=\"searchText\" (ngModelChange)=\"search($event)\"\n            (focus)=\"searchActive = true;citySearchActive=false\" class=\"text-sm w-full h-full bg-transparent  p-2\"\n            type=\"text\" placeholder=\"Search for an Event, Interest or Organizer\" />\n        <div class=\"suggestions enter-slide-bottom w-full p-2 absolute\" *ngIf=\"searchResults && searchActive\">\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.interests.length>0\">\n                <li class=\"list-head\">\n                    INTERESTS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" (click)=\"navigateToListing(interest.name)\"\n                    *ngFor=\"let interest of searchResults.interests\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ interest.imageUrl +')'\">\n                        </div>\n                        <div>\n                            <span class=\"mb-1 block\">{{interest.name | titlecase}} </span>\n                            <div class=\"flex items-center\" *ngIf=\"interest.location\">\n                                <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                <small>{{interest.location}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.events.length>0\">\n                <li class=\"list-head\">\n                    EVENTS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let event of searchResults.events\"\n                    (click)=\"navigateToEventPage(event.urlCode)\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ event.imageUrl +')'\"></div>\n                        <div>\n                            <span class=\"mb-1 block\">{{event.name | titlecase}} </span>\n                            <div class=\"flex items-center\">\n                                <div class=\"flex items-center\" *ngIf=\"event.location\">\n                                    <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                    <small>{{event.location}}</small>\n                                </div>\n                                <div class=\"flex items-center ml-2\" *ngIf=\"event?.secondaryTextProperties?.startTime\">\n                                    <i class=\"mdi mdi-calendar-today color-blue mr-1\"></i>\n                                    <small>{{event.secondaryTextProperties.startTime}}</small>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.organizers.length>0\">\n                <li class=\"list-head\">\n                    ORGANIZERS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let organizer of searchResults.organizers\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ organizer.imageUrl +')'\">\n                        </div>\n                        <div>\n                            <span class=\"mb-1 block\">{{organizer.name | titlecase}} </span>\n                            <div class=\"flex items-center\" *ngIf=\"organizer.location\">\n                                <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                <small>{{organizer.location}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div #citySuggestions class=\"w-auto flex items-center py-2  px-4 cursor-pointer relative city-search-container\"\n        [class.active]=\"cityPopupActive\" (click)=\"cityPopupActive = true\">\n        <div class=\"flex items-center w-10/12 mr-2 \" [title]=\" activePlace\">\n            <i class=\"mdi mdi-map-marker text-2xl color-blue\"></i>\n            <span class=\"truncate\">{{activePlace}}</span>\n        </div>\n        <i class=\"mdi mdi-chevron-down text-2xl\"></i>\n        <app-city-search-popup class=\"popup\" [(cityPopupActive)]=\"cityPopupActive\" [(activePlace)]=\"activePlace\"\n            *ngIf=\"cityPopupActive\">\n        </app-city-search-popup>\n    </div>\n</div>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}@media (min-width:991px){.search-container{height:42px;border-radius:2px;-webkit-transition:.3s;transition:.3s}.search-container .left-section{background-color:#ededed;border-radius:4px}.search-container .left-section input{-webkit-transition:.3s;transition:.3s}.search-container .left-section input:focus{background:#fafafa}.search-container .left-section .suggestions{top:100%;left:0;background:#fafafa;border-top:1px solid rgba(151,151,151,.4)}.search-container .left-section .suggestions ul{margin:2% 0}.search-container .left-section .suggestions ul li{color:#636363;-webkit-transition:.15s;transition:.15s;border-bottom:1px solid rgba(151,151,151,.25)}.search-container .left-section .suggestions ul li.list-head{font-size:10px;color:#636363;border:none;font-weight:400}.search-container .left-section .suggestions ul li.list-head:hover{background:#fafafa}.search-container .left-section .suggestions ul li .avatar{border-radius:50%;height:41px;width:41px}.search-container .left-section .suggestions ul li:hover{background:#ededed}.search-container .city-search-container{-webkit-transition:.3s;transition:.3s;max-width:33.33%}.search-container .city-search-container.active{background:#fafafa;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container .city-search-container .popup{position:absolute;top:135%;width:135%;left:-34%}.search-container.active .left-section{background:#fafafa;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container.active .suggestions{box-shadow:0 11px 15px 0 rgba(0,0,0,.15)}}"]
    }),
    __metadata("design:paramtypes", [PlaceService, TimeService, DatePipe])
], SearchComponent);

let HamburgerMenuComponent = class HamburgerMenuComponent {
    constructor() {
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
    }
};
HamburgerMenuComponent = __decorate([
    Component({
        selector: 'app-hamburger-menu',
        template: "<nav role=\"navigation\">\n    <div class=\"ham-container position-relative cursor-pointer\">\n        <div class=\"hamburger position-relative\">\n            <!-- <input type=\"checkbox\" /> -->\n            <div class=\"spans\" (click)=\"active=!active\">\n                <span class=\"block background-blue\" [class.active]=\"active\"></span>\n                <span class=\"block background-blue\" [class.active]=\"active\"></span>\n                <span class=\"block background-blue\" [class.active]=\"active\"></span>\n            </div>\n            <div class=\"overlay fixed bg-black w-full h-full\" *ngIf=\"active\"></div>\n            <ul class=\"menu fixed h-full px-4\" [class.active]=\"active\">\n                <img class=\"mb-10\" src=\"assets/images/ts-logo.svg\" class=\"logo\" />\n                <ts-panel [disable]=\"false\">\n                    <ts-panel-header (click)=\"panelOpen=!panelOpen\">\n                        <div>Organizing Events</div>\n                    </ts-panel-header>\n                    <ts-panel-body [open]=\"panelOpen\">\n                        <div>\n                            <div>Manage Event</div>\n                            <div>Billings</div>\n                            <div>Reports</div>\n                            <div>Promotions</div>\n                        </div>\n                    </ts-panel-body>\n                </ts-panel>\n                <ts-panel [disable]=\"false\">\n                    <ts-panel-header (click)=\"panelOpen2=!panelOpen2\">\n                        <div>Attending Events</div>\n                    </ts-panel-header>\n                    <ts-panel-body [open]=\"panelOpen2\">\n                        <div>\n                            <div>My Bookings</div>\n                            <div>Following</div>\n                        </div>\n                    </ts-panel-body>\n                </ts-panel>\n                <a href=\"#\">\n                    <li>My Profile</li>\n                </a>\n                <a href=\"#\">\n                    <li>Logout</li>\n                </a>\n            </ul>\n        </div>\n    </div>\n</nav>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ham-container{z-index:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ham-container .hamburger span{width:28px;height:3.2px;margin-bottom:5px;position:relative;border-radius:3px;z-index:1;-webkit-transform-origin:4px 0;transform-origin:4px 0;-webkit-transition:background .5s cubic-bezier(.77,.2,.05,1),margin .5s cubic-bezier(.77,.2,.05,1),opacity .55s,-webkit-transform .5s cubic-bezier(.77,.2,.05,1);transition:transform .5s cubic-bezier(.77,.2,.05,1),background .5s cubic-bezier(.77,.2,.05,1),margin .5s cubic-bezier(.77,.2,.05,1),opacity .55s,-webkit-transform .5s cubic-bezier(.77,.2,.05,1)}.ham-container .hamburger span:first-child{-webkit-transform-origin:0 0;transform-origin:0 0}.ham-container .hamburger span:last-child{margin-bottom:0}.ham-container .hamburger span:nth-last-child(2){-webkit-transform-origin:0 100%;transform-origin:0 100%}.ham-container .hamburger span.active{opacity:1;margin-left:240px;-webkit-transform:rotate(45deg) translate(-14px,-16px);transform:rotate(45deg) translate(-14px,-16px);background:#8c8c8c}.ham-container .hamburger span.active:nth-last-child(3){opacity:0;-webkit-transform:rotate(0) scale(.2,.2);transform:rotate(0) scale(.2,.2)}.ham-container .hamburger span.active:nth-last-child(2){-webkit-transform:rotate(-45deg) translate(0,4px);transform:rotate(-45deg) translate(0,4px)}.ham-container .hamburger span.active~ul{-webkit-transform:none;transform:none}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:.5}}@keyframes fadeIn{0%{opacity:0}100%{opacity:.5}}.ham-container .overlay{top:0;left:0;opacity:.5;-webkit-animation-name:fadeIn;animation-name:fadeIn;-webkit-animation-duration:.5s;animation-duration:.5s}.ham-container .menu{top:0;left:0;width:300px;padding-top:15px;background:#fafafa;box-shadow:0 2px 4px 0 rgba(0,0,0,.11);list-style-type:none;-webkit-font-smoothing:antialiased;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:translate(-100%,0);transform:translate(-100%,0);-webkit-transition:-webkit-transform .5s cubic-bezier(.77,.2,.05,1);transition:transform .5s cubic-bezier(.77,.2,.05,1);transition:transform .5s cubic-bezier(.77,.2,.05,1),-webkit-transform .5s cubic-bezier(.77,.2,.05,1)}.ham-container .menu .logo{height:40px}.ham-container .menu.active{-webkit-transform:none;transform:none}.ham-container .menu li{padding:10px 0}"]
    }),
    __metadata("design:paramtypes", [])
], HamburgerMenuComponent);

let CitySearchPopupComponent = class CitySearchPopupComponent {
    constructor(placeService, headerService, timeService, datepipe) {
        this.placeService = placeService;
        this.headerService = headerService;
        this.timeService = timeService;
        this.datepipe = datepipe;
        this.showArrow = true;
        this.activePlaceChange = new EventEmitter();
        this.cityPopupActiveChange = new EventEmitter();
        this.citySearchActive = true;
        this.router = config.router;
        this.cityQueryChanged = new Subject();
        this.cityLoading = false;
        this.callSearchCity = (query) => {
            this.cityLoading = true;
            this.headerService.getplaceSearchResults(query).subscribe(res => {
                this.placeSearchResults = res['data'];
                this.cityLoading = false;
            });
        };
        this.placeChanged = (place) => {
            if (place.type === 'country') {
                this.router.navigate(['/' + place.twoDigitCode.toLowerCase()], { state: { place: place } });
            }
            if (place.type === 'city') {
                this.router.navigate(['/' + place.countryCode.toLowerCase() + '/' + place.cityCode], { state: { place: place } });
            }
            if (place.type === 'locality') {
                this.router.navigate(['/' + place.countryCode.toLowerCase() + '/' + place.cityCode + '/' + place.localityCode], { state: { place: place } });
            }
            if (place.type === 'unstructured') {
                const name = place.name.replace(/,/g, '').replace(/ /g, '-');
                const secondaryText = place.secondaryText.replace(/,/g, '').replace(/ /g, '-');
                this.router.navigate(['/s/' + name + '--' + secondaryText], { state: { place: place } });
            }
            //this.placeService.updatePlace(place.name);
            this.activePlace = place.name;
            this.activePlaceChange.emit(place.name);
            this.cityPopupActive = false;
            this.cityPopupActiveChange.emit(false);
        };
        this.openCityPopup = () => {
            this.cityPopupActive = true;
            this.cityInput.nativeElement.focus();
        };
        this.searchCity = (text) => {
            if (!text || text.length == 0) {
                this.placeSearchResults = [];
            }
            if (text != undefined && text.length > 0) {
                this.cityQueryChanged.next(text);
            }
        };
        this.getPopularPlaces = () => {
            this.headerService.getPopularCities(this.urlArray[0]).subscribe(res => {
                this.popularPlaces = res['data'].slice(0, 6).map(ele => {
                    ele.type = 'city';
                    ele.cityCode = ele.code;
                    return ele;
                });
            });
        };
        this.cityQueryChanged.pipe(debounceTime(300)).subscribe(text => this.callSearchCity(text));
        if (this.router.url) {
            this.urlArray = this.router.url.replace('/', '').split('/');
        }
        else {
            this.urlArray = ['in'];
        }
    }
    ngAfterViewInit() {
        this.citySearchActive = true;
        this.cityInput.nativeElement.focus();
        this.getPopularPlaces();
    }
    ngOnInit() {
    }
};
__decorate([
    ViewChild('cityInput', { static: true }),
    __metadata("design:type", ElementRef)
], CitySearchPopupComponent.prototype, "cityInput", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CitySearchPopupComponent.prototype, "showArrow", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], CitySearchPopupComponent.prototype, "activePlace", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CitySearchPopupComponent.prototype, "activePlaceChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], CitySearchPopupComponent.prototype, "cityPopupActive", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CitySearchPopupComponent.prototype, "cityPopupActiveChange", void 0);
CitySearchPopupComponent = __decorate([
    Component({
        selector: 'app-city-search-popup',
        template: "<div class=\"city-suggestions enter-slide-bottom\" [class.arrow]=\"showArrow\">\n    <div class=\"suggestions-container\">\n        <ul>\n            <li [class.active]=\"citySearchActive\" class=\"p-2 capitalize cursor-pointer flex items-center truncate\">\n                <i class=\"mdi mdi-magnify mr-2\"></i>\n                <input #cityInput autocomplete=\"off\" id=\"cityInput\" type=\"text\" placeholder=\"Type here to search...\"\n                    [(ngModel)]=\"cityQuery\" (ngModelChange)=\"searchCity($event)\" (focus)=\"citySearchActive=true\"\n                    class=\"w-full bg-transparent text-sm\" />\n                <i *ngIf=\"cityLoading\" class=\"mdi mdi-loading mdi-spin\"></i>\n            </li>\n            <li matRipple (click)=\"placeChanged(place);\"\n                class=\"p-2 capitalize cursor-pointer flex items-center truncate\"\n                *ngFor=\"let place of placeSearchResults\">\n                <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                <span class=\"text-sm flex items-end truncate\">\n                    <span class=\"mr-1 whitespace-no-wrap\">{{place.name}} </span>\n                    <small class=\"text-2xs text-gray-600\"\n                        *ngIf=\"place.city && place?.city.length>0 && place?.type!='city'\">\n                        {{place.city}},\n                    </small>\n                    <small class=\"text-2xs text-gray-600\"\n                        *ngIf=\"place.country && place?.country.length>0 && place?.type!='country'\">{{place.country}}\n                    </small>\n                    <small class=\"text-2xs truncate text-gray-600\">{{place.secondaryText}}</small>\n                </span>\n            </li>\n            <ng-container matRipple *ngIf=\"!placeSearchResults || placeSearchResults.length==0\">\n                <li (click)=\"placeChanged(city);\" class=\"p-2 px-4 cursor-pointer capitalize\"\n                    *ngFor=\"let city of popularPlaces\">\n                    <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                    <span class=\"text-base\">{{city.name}}</span>\n                </li>\n            </ng-container>\n        </ul>\n    </div>\n</div>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.city-suggestions{width:100%;background:#fafafa;position:absolute;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.city-suggestions .mdi-spin::before{-webkit-animation-duration:.5s;animation-duration:.5s}.city-suggestions li.active,.city-suggestions li:hover{background:#ededed}.city-suggestions.arrow{border-top:3px solid #3782c4}.city-suggestions.arrow:before{content:\" \";width:10px;position:absolute;top:-7px;left:88%;height:10px;-webkit-filter:drop-shadow(0 -5px 10px rgba(0, 0, 0, .15));filter:drop-shadow(0 -5px 10px rgba(0, 0, 0, .15));background:#ededed;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-top:3px solid #3782c4;border-left:3px solid #3782c4}@media (min-width:991px){.city-suggestions{width:140%;left:-40%}}"]
    }),
    __metadata("design:paramtypes", [PlaceService, HeaderService, TimeService, DatePipe])
], CitySearchPopupComponent);

let AppPasswordDirective = class AppPasswordDirective {
    constructor(el) {
        this.el = el;
        this._shown = false;
        this.setup();
    }
    toggle(span) {
        this._shown = !this._shown;
        if (this._shown) {
            this.el.nativeElement.setAttribute('type', 'text');
            span.innerHTML = 'Hide password';
        }
        else {
            this.el.nativeElement.setAttribute('type', 'password');
            span.innerHTML = 'Show password';
        }
    }
    setup() {
        const parent = this.el.nativeElement.parentNode;
        const span = document.createElement('span');
        span.innerHTML = `Show password`;
        span.addEventListener('click', (event) => {
            this.toggle(span);
        });
        parent.appendChild(span);
    }
};
AppPasswordDirective = __decorate([
    Directive({
        selector: '[appPassword]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], AppPasswordDirective);

const headers = new HttpHeaders().set('Authorization', 'eyJhbGciOiJIUzUxMiJ9.eyJST0xFIjoiUk9MRV9VU0VSIiwic3ViIjoidGVzdGluZ0B0b3duc2NyaXB0LmNvbSIsImF1ZGllbmNlIjoid2ViIiwiY3JlYXRlZCI6MTU2NjkwODg0NjE2MCwiVVNFUl9JRCI6NDkwNiwiZXhwIjoxNTc0Njg0ODQ2fQ.ge-O16ZPw9wHvjoJrmTKbJRhfOkvAdI57N_YBZ5yr_IwymKOhPAyQpD8vHxIqhJGJ4tfJ_jez4xh3vQoWwngZw');
let TsLoginSignupComponent = class TsLoginSignupComponent {
    constructor(apiService, http, fb, cookieService, userService, notificationService) {
        this.apiService = apiService;
        this.http = http;
        this.fb = fb;
        this.cookieService = cookieService;
        this.userService = userService;
        this.notificationService = notificationService;
        this.closeDialog = new EventEmitter();
        this.showSocial = true;
        this.show = false;
        this.showPassword = false;
        this.rdurl = 'http://' + this.apiService.betaHostName + 'marketplace';
        this.ifSignIn = false;
        this.ifUnverified = true;
        this.ifSignUp = false;
        this.showVerifyEmail = false;
        this.showResetPassword = false;
        this.CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY = '6LcAq4QUAAAAABrOnp0xwsaRk7PgnCgmE-FDcbLG';
        this.userTimezone = DateTime.local().zoneName;
        this.loginForm = this.fb.group({
            firstName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            phoneNumber: ['', Validators.required]
        });
        this.captchaResponse = '';
        this.correctPhoneNumber = null;
        this.phoneError = false;
        this.socialLoginMsg = false;
        this.password = () => {
            this.show = !this.show;
        };
        this.onLoginWithFB = () => {
            const url = 'http://' + this.apiService.betaHostName + 'api/user/signinwithfacebook' +
                (this.rdurl === undefined ? '' : '?rdurl=' + this.rdurl);
            window.open(url, '_self');
        };
        this.onLoginWithGoogle = () => {
            const url = 'http://' + this.apiService.betaHostName + 'api/user/signinwithgoogle' +
                (this.rdurl === undefined ? '' : '?rdurl=' + this.rdurl);
            window.open(url, '_self');
        };
        this.getEmailVerifyResponse = () => {
            const params = new HttpParams({ fromString: `email=` + this.loginForm.value.email });
            return this.http.get(this.apiService.API_SERVER + 'user/getusersignupdetails', { params: params, headers: headers }).pipe(map(data => (data)));
        };
        this.verifyEmail = () => {
            this.getEmailVerifyResponse().subscribe((retData) => {
                const newData = JSON.parse(retData.data);
                if (newData && newData.isExistingUser && newData.isManualSignup) {
                    this.loginForm.get('password').enable();
                    this.ifSignIn = true;
                    this.ifUnverified = false;
                    this.ifSignUp = false;
                    this.showSocial = false;
                    this.currScreen = 'ifSignIn';
                    this.socialLoginMsg = false;
                }
                else if (newData && newData.isExistingUser && !newData.isManualSignup) {
                    this.socialLoginMsg = true;
                }
                else {
                    this.ifSignUp = true;
                    this.ifSignIn = false;
                    this.ifUnverified = false;
                    this.showSocial = false;
                    this.currScreen = 'ifSignUp';
                    this.loginForm.get('firstName').enable();
                    this.loginForm.get('password').enable();
                    this.loginForm.get('phoneNumber').enable();
                    this.socialLoginMsg = false;
                    this.initializeTelInput = setTimeout(() => {
                        this.initializeIntlTelInput();
                    }, 200);
                }
            }, (error) => {
            });
        };
        this.initializeIntlTelInput = () => {
            // initialize intl tel
            const input = document.querySelector('#phoneNumber');
            window.intlTelInput(input, {
                initialCountry: 'in',
                utilScripts: '../../../../../../node_modules/intl-tel-input/build/js/utils.js'
            });
        };
        this.signIn = () => {
            // alert('you have signed in');
            this.postSignInCredentials().subscribe((retData) => {
                const tokenData = {
                    token: (retData.data)
                };
                const userData = Object.assign({}, retData.userDetails, tokenData);
                this.userService.updateUser(userData);
                this.cookieService.setCookie('townscript-user', JSON.stringify(userData), 90);
                this.notificationService.success('Congrats! You are signed in', 2000, 'Dismiss');
                if (this.mode === 'dialog') {
                    this.close();
                }
                this.redirectToListings();
            }, (error) => {
            });
        };
        this.signup = () => {
            const self = this;
            this.postSignupCredentials().toPromise().then(function (data) {
                self.showVerifyEmail = true;
                self.showSocial = false;
                self.ifSignUp = false;
                self.currScreen = 'showVerifyEmail';
            });
        };
        this.forgotPassword = () => {
            this.loginForm.get('password').disable();
            this.showResetPassword = true;
            this.showSocial = false;
            this.ifSignIn = false;
            this.currScreen = 'showResetPassword';
        };
        this.takeMeBack = () => {
            if (this.showResetPassword) {
                this.ifUnverified = true;
                this.showResetPassword = false;
                this.ifSignUp = false;
                this.currScreen = 'ifUnverified';
            }
            else if (this.ifSignIn) {
                this.ifSignUp = false;
                this.showResetPassword = false;
                this.ifUnverified = true;
                this.ifSignIn = false;
                this.showSocial = true;
                this.currScreen = 'ifUnverified';
            }
            else if (this.ifSignUp) {
                this.ifUnverified = true;
                this.ifSignUp = false;
                this.showSocial = true;
                this.currScreen = 'ifUnverified';
                this.loginForm.get('firstName').disable();
                this.loginForm.get('password').disable();
                this.loginForm.get('phoneNumber').disable();
            }
            else if (this.showVerifyEmail) {
                this.showVerifyEmail = false;
                this.ifUnverified = true;
                this.showSocial = true;
                this.ifSignUp = false;
                this.loginForm.get('firstName').disable();
                this.loginForm.get('password').disable();
                this.loginForm.get('phoneNumber').disable();
                this.currScreen = 'ifUnverified';
            }
        };
        this.postSignInCredentials = () => {
            if (!this.loginForm.valid) {
                return;
            }
            const loginObj = {
                emailId: this.loginForm.value.email,
                password: this.loginForm.value.password
            };
            const params = new HttpParams({
                fromString: `emailId=` + this.loginForm.value.email + `&password=` + this.loginForm.value.password
            });
            return this.http.post(this.apiService.API_SERVER + 'user/loginwithtownscript', loginObj, { params: params, headers: headers }).pipe(map(data => (data)));
        };
        this.resetPasswordCredentials = () => {
            const forgotPassword = {
                emailId: this.loginForm.value.email
            };
            return this.http.post(this.apiService.API_SERVER + 'verify/sendforgotpwdemail', forgotPassword, { headers: headers }).pipe(map(data => (data)));
        };
        this.redirectToListings = () => {
            window.open('/', '_self');
        };
        this.resetPassword = () => {
            this.resetPasswordCredentials().subscribe((resp) => {
                // console.log(resp);
            }, (error) => {
                // console.log(error);
            });
        };
        this.postSignupCredentials = () => {
            if (!this.loginForm.valid) {
                return;
            }
            const input = document.querySelector('#phoneNumber');
            const iti = window.intlTelInputGlobals.getInstance(input);
            this.correctPhoneNumber = iti.getNumber();
            if (this.correctPhoneNumber === '') {
                return;
            }
            const formData = new FormData();
            formData.append('name', this.loginForm.value.firstName);
            formData.append('emailid', this.loginForm.value.email);
            formData.append('password', this.loginForm.value.password);
            formData.append('phone', this.correctPhoneNumber);
            formData.append('usertimezone', this.userTimezone);
            formData.append('reCaptcha', this.captchaResponse);
            formData.append('username', this.randomString(10, ''));
            formData.append('rdurl', this.rdurl);
            return this.http.post(this.apiService.API_SERVER + 'user/registerwithtownscriptwithcaptcha', formData, { headers: headers, responseType: 'text' });
        };
        this.randomString = (len, an) => {
            an = an && an.toLowerCase();
            let str = '', i = 0;
            const min = an === 'a' ? 10 : 0;
            const max = an === 'n' ? 10 : 62;
            for (; i++ < len;) {
                let r = Math.random() * (max - min) + min << 0;
                str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
            }
            return str;
        };
        this.resendVerifyEmail = () => {
            this.resendVerifyEmailCredential().subscribe((retData) => {
                alert('verification email has been sent');
            }, (error) => {
                // console.log('error');
            });
        };
        this.resendVerifyEmailCredential = () => {
            const formData = new FormData();
            formData.append('rdurl', this.rdurl);
            formData.append('emailid', this.loginForm.value.email);
            return this.http.post(this.apiService.API_SERVER + 'user/resendverificationcode', formData, { headers: headers }).pipe(map(data => (data)));
        };
    }
    ngOnInit() {
        this.loginForm.get('firstName').disable();
        this.loginForm.get('password').disable();
        this.loginForm.get('phoneNumber').disable();
        this.currScreen = 'ifUnverified';
    }
    close() {
        this.closeDialog.emit(true);
    }
    resolveAndProceed(captchaResponse) {
        this.captchaResponse = captchaResponse;
        this.signup();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TsLoginSignupComponent.prototype, "mode", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], TsLoginSignupComponent.prototype, "closeDialog", void 0);
__decorate([
    ViewChild('recaptchaRef', { read: true, static: true }),
    __metadata("design:type", RecaptchaComponent)
], TsLoginSignupComponent.prototype, "recaptchaRef", void 0);
TsLoginSignupComponent = __decorate([
    Component({
        selector: 'app-ts-login-signup',
        template: "<section *ngIf=\"mode==='dialog'\" class=\"text-right\">\n    <i class=\"cursor-pointer mdi mdi-close text-2xl\" (click)=\"close()\"></i>\n</section>\n<section [ngClass]=\"(mode=='dialog') ?\n            ' bg-white container-background flex flex-row m-auto overflow:hidden'\n            :' flex flex-row m-auto overflow:hidden'\">\n    <div id=\"login-signup-container\" [ngClass]=\"(mode=='dialog') ? 'z-10 bg-white w-full p-6 m-auto md:m-2 lg:m-2'\n            : 'login-card-box z-10 bg-white max-w-sm w-full p-10'\">\n        <i *ngIf=\"!ifUnverified\" (click)=\"takeMeBack()\" class=\"cursor-pointer text-3xl mdi mdi-arrow-left\"></i>\n        <app-login-top-content [condition]=\"currScreen\"></app-login-top-content>\n        <form id=\"formId\" [formGroup]=\"loginForm\" class=\"w-full\">\n            <div [@in-out-animate] *ngIf=\"!showVerifyEmail\" class=\"form-group md:flex md:items-center mb-1\">\n                <div class=\"md:w-full\">\n                    <ts-input-text formControlName=\"email\"\n                        class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                        id=\"user-email\" type=\"email\" name=\"email\" placeholder=\"Email\" autocomplete=\"user-email\"\n                        required></ts-input-text>\n                    <p class=\"text-sm text-red-500\" *ngIf=\"socialLoginMsg\">It seems you have signed up using Social\n                        Login.</p>\n                </div>\n\n            </div>\n            <div [@EnterLeave]=\"'flyIn'\">\n                <div *ngIf=\"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                    <div class=\"md:w-full\">\n                        <ts-input-text formControlName=\"firstName\"\n                            class=\" form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                            id=\"name\" type=\"text\" placeholder=\"Name\" autocomplete=\"username\"></ts-input-text>\n                    </div>\n                </div>\n                <div  *ngIf=\"ifSignIn || ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                    <div class=\"md:w-full\">\n                        <ts-input-text formControlName=\"password\" appPassword\n                            class=\"form-control bg-white border-gray-500 rounded py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                            id=\"user-pwd\" [type]=\"'password'\" placeholder=\"Password\" autocomplete=\"current-password\">\n                        </ts-input-text>\n                    </div>\n                </div>\n                <div *ngIf=\"ifSignUp\" class=\"form-group md:flex md:items-center mb-1\">\n                    <div class=\"md:w-full\">\n                        <input type=\"tel\" value=\"phone_number\" formControlName=\"phoneNumber\"\n                            class=\"form-control bg-white border-gray-500 rounded py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500\"\n                            id=\"phoneNumber\" type=\"tel\" placeholder=\"Phone no.\" autocomplete=\"user-phone\">\n\n\n                        <p class=\"text-sm text-red-500\" *ngIf=\"phoneError\">Please enter a valid Phone no.</p>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"showVerifyEmail\" class=\"text-center\">\n                <img class=\"m-auto\" src=\"../../../../../assets/images/verify-email.png\">\n                <span class=\"text-sm\">Tap the link in the email we sent you at\n                    {{this.loginForm.value.email}}</span>\n            </div>\n            <div class=\"mt-5\">\n                <div [@btn-animate] *ngIf=\"ifUnverified\" class=\"w-full text-center\">\n                    <ts-button text=\"Continue\" [disabled]=\"!loginForm.valid\" (click)=\"verifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"ifSignIn\" class=\"w-full text-center\" >\n                    <ts-button text=\"Sign in\" [disabled]=\"!loginForm.valid\" (click)=\"signIn()\" class=\"w-full\">\n                    </ts-button>\n                    <a (click)=\"forgotPassword()\" class=\" text-sm text-center verify-email py-2 px-2\">\n                        Forgot Password?\n                    </a>\n                </div>\n                <div [@btn-animate] *ngIf=\"ifSignUp\" class=\"w-full text-center\">\n                    <ts-button text=\"Create your account\" [disabled]=\"!loginForm.valid || phoneError\"\n                        (click)=\"recaptchaRef.execute()\" class=\"w-full\">\n                    </ts-button>\n                </div>\n                <div *ngIf=\"showResetPassword\" class=\"md:w-full text-center\">\n                    <ts-button text=\"Send Reset Password Link\" [disabled]=\"!loginForm.valid\" (click)=\"resetPassword()\"\n                        class=\"w-full\">\n                    </ts-button>\n                    <a (click)=\"resetPassword()\" class=\" text-sm text-center resend-email py-2 px-2\">\n                        Resend Email\n                    </a>\n                </div>\n                <div *ngIf=\"showVerifyEmail\" class=\"md:w-full text-center py-2 my-2 \">\n                    <ts-button text=\"Resend Verification Email\" [disabled]=\"!loginForm.valid\"\n                        (click)=\"resendVerifyEmail()\" class=\"w-full\">\n                    </ts-button>\n                    <a class=\" text-sm text-center resend-email py-2 px-2\">\n                        Why verify?\n                    </a>\n                </div>\n\n            </div>\n            <div class=\"form-group\">\n                <re-captcha #recaptchaRef=\"reCaptcha\" (resolved)=\"resolveAndProceed($event)\"\n                    siteKey={{CAPTCHA_SITE_INVISIBLE_CAPTCHA_KEY}} size=\"invisible\"></re-captcha>\n            </div>\n        </form>\n        <section id=\"social-signin-container\" *ngIf=\"showSocial\">\n            <div class=\"strike-through strike-through-margin\">\n                <span>\n                    <strong class=\"or-text\">or</strong>\n                </span>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button\n                    class=\"bg-white w-full p-2 flex flex-row border border-gray-400 rounded shadow mb-2 justify-center\"\n                    (click)=\"onLoginWithGoogle()\" ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Google\"\n                    prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\" matRipple>\n                        <img  class=\"logo\" \n                            src=\"https://townscript-common-resources.s3.ap-south-1.amazonaws.com/google-min.png\" />\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Google</span>\n                    </div>\n                </button>\n                <p class=\"form-control--error\" ng-if=\"googleError.length\" ng-bind=\"googleError\"></p>\n            </div>\n            <div class=\"form-group\">\n                <button mat-raised-button\n                    class=\"bg-white w-full p-2 flex flex-row border border-gray-400 rounded shadow mb-2 justify-center\"\n                    (click)=\"onLoginWithFB()\" ts-data-analytics prop-event=\"click\" eventLabel=\"Login with Facebook\"\n                    prop-clicked-location=\"Sign In\">\n                    <div class=\"px-2\">\n                        <img class=\"logo\"\n                            src=\"https://townscript-common-resources.s3.ap-south-1.amazonaws.com/facebook-min.png\" />\n                    </div>\n                    <div class=\"text-sm\">\n                        <span class=\"no-margin\">Continue with Facebook</span>\n                    </div>\n                </button>\n                <ng-container class=\"login-error\" ng-if=\"fbError.length\">\n                    <i class=\"ion-android-alert\"></i>\n                    <p class=\"form-control--error\" ng-bind=\"fbError\"></p>\n                </ng-container>\n            </div>\n        </section>\n        <div *ngIf=\"ifUnverified ||  ifSignUp\" class=\"agreement my-2 px-2\">\n            <div class=\"w-full hor-linear-grad m-4\"></div>\n            <p class=\"text-xs text-center\">By continuing, you agree to Townscript's <a class=\"text-blue-700\"\n                    href=\"/terms-and-conditions\">terms of service</a> and <a class=\"text-blue-700\"\n                    href=\"/privacy-policy\">privacy policy</a>.</p>\n        </div>\n    </div>\n    <div [ngClass]=\"(mode=='dialog') ? 'hidden' : 'ml-20 p-6 hidden md:block'\">\n        <div class=\"flex flex-col mt-4\">\n            <span class=\"text-2xl w-2/3 mb-4 text-gray-900\">\n                <strong>301,589 event organizers trust us.</strong>\n            </span>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Quick and easy event creation</p>\n                    <p class=\"text-sm text-gray-600\">Create your event page, it is easy and customizable.</p>\n                </span>\n            </div>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Start selling tickets within minutes.</p>\n                    <p class=\"text-sm text-gray-600\">Link your bank account, verify identity details and start selling\n                        instantly.</p>\n                </span>\n            </div>\n            <div class=\"flex flex-column my-2\">\n                <i class=\"mdi mdi-check-circle color-blue mr-2 h-6 \"></i>\n                <span>\n                    <p class=\"\">Simple Integration with your website.</p>\n                    <p class=\"text-sm text-gray-600\">Easy to start selling tickets directly from your website and\n                        facebook without developers.</p>\n                </span>\n            </div>\n        </div>\n    </div>\n\n</section>",
        animations: [
            trigger('btn-animate', [
                transition('void => *', [
                    animate('1s ease', style({ opacity: 1 })),
                ]),
                transition('* => void', [
                    animate('1s ease', style({ opacity: 0, height: '0' }))
                ])
            ]),
            trigger('in-out-animate', [
                transition('void => *', [
                    style({ opacity: 0.2 }),
                    animate('1s ease', style({ opacity: 1 })),
                ]),
                transition('* => void', [
                    style({ opacity: 0.6 }),
                    animate('1s ease', style({ opacity: 0, height: '0' }))
                ])
            ]),
            trigger('EnterLeave', [
                state('flyIn', style({ transform: 'translateY(0)' })),
                transition(':enter', [
                    style({ transform: 'translateY(0%)' }),
                    animate('1s ease-in-out')
                ]),
                transition(':leave', [
                    animate('.5s ease', style({ transform: 'translateY(-70%)', opacity: '0', height: 0 }))
                ])
            ])
        ],
        styles: [".container-background::before{color:#fff;background:url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 100' xmlns='http://www.w3.org/2000/svg'  preserveAspectRatio='none'><polygon points='0,110 0,50 300,0 300,300' width='100%' height='100%' style='fill:blue;'/></svg>\") 0 0/contain;width:30%;font-size:2em;padding:4px 40px}.strike-through-margin{margin:30px 0;text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em}.strike-through-margin span{background-color:#fff;padding:3px 30px}.strike-through{text-align:center;border-bottom:1px solid #dcdcdc;line-height:.1em;margin:30px auto}.strike-through span{background-color:#fff;padding:3px 30px}.hor-linear-grad{border:1px solid;border-left:0;border-right:0;-webkit-border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));-webkit-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);-o-border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,0)),color-stop(48%,#e2e2e2),to(rgba(255,255,255,0)));border-image:linear-gradient(to bottom,rgba(255,255,255,0) 0,#e2e2e2 48%,rgba(255,255,255,0) 100%);border-image-slice:1}.iti__flag{background-image:url(../../../../../node_modules/intl-tel-input/build/img/flags.png)}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.iti__flag{background-image:url(../../../../../node_modules/intl-tel-input/build/img/flags@2x.png)}}#social-signin-container .logo{width:22px;height:22px}.mkt-content{background-color:#f1f1f1}.login-card-box{box-shadow:0 0 8px rgba(0,0,0,.25);border-radius:5px;max-width:460px}"]
    }),
    __metadata("design:paramtypes", [ApiService,
        HttpClient,
        FormBuilder,
        CookieService,
        UserService,
        NotificationService])
], TsLoginSignupComponent);

let LoginTopContentComponent = class LoginTopContentComponent {
    constructor() { }
    ngOnInit() {
        console.log('whats the condition', this.condition);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], LoginTopContentComponent.prototype, "condition", void 0);
LoginTopContentComponent = __decorate([
    Component({
        selector: 'app-login-top-content',
        template: "<div *ngIf=\"condition == 'ifUnverified' \" class=\"pb-2\">\n        <p class=\"text-2xl text-gray-900\"><strong>Let's get started</strong></p>\n        <p class=\"text-base text-gray-500\">Your one stop tool for organizing events</p>\n</div>\n<div *ngIf=\"condition == 'ifSignUp'\" class=\"pb-2\">\n        <p class=\"text-2xl\"><strong>Sign up</strong></p>\n        <p class=\"text-base text-gray-500\">Welcome to Townscript</p>\n</div>\n<div *ngIf=\"condition == 'showVerifyEmail'\" class=\"pb-2\">\n        <p class=\"text-2xl\"><strong>You're almost done</strong></p>\n        <p class=\"text-base text-gray-500\">We just need to verify your e-mail</p>\n</div>\n<div *ngIf=\"condition == 'ifSignIn'\" class=\"pb-3\">\n        <p class=\"text-2xl\"><strong>Sign in</strong></p>\n</div>\n<div *ngIf=\"condition == 'showResetPassword'\" class=\"pb-3\">\n        <p class=\"text-2xl\"><strong>Forgot password</strong></p>\n        <p class=\"text-base text-gray-500\">Don't worry, we'll help you reset it</p>\n</div>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], LoginTopContentComponent);

let RangeDatePipe = class RangeDatePipe {
    transform(rangeDates, args) {
        if (rangeDates) {
            const date = rangeDates.map(d => DateTime.fromISO(d).toFormat('dd'));
            const month = rangeDates.map(d => DateTime.fromISO(d).toFormat('MMM'));
            const year = rangeDates.map(d => DateTime.fromISO(d).toFormat('yy'));
            const time = DateTime.fromISO(rangeDates[0]).toFormat('hh:mm a');
            if (year[0] !== year[1]) {
                return month[0] + ' ' + date[0] + "'" + year[0] + ' - ' + month[1] + ' ' + date[1] + "'" + year[1] + ' | ' + time;
            }
            else {
                if ((date[0] === date[1]) && (month[0] === month[1])) {
                    return month[0] + ' ' + date[0] + ' | ' + time;
                }
                else if ((month[0] !== month[1])) {
                    return month[0] + ' ' + date[0] + ' - ' + month[1] + ' ' + date[1] + ' | ' + time;
                }
                else {
                    return month[0] + ' ' + date[0] + ' - ' + date[1] + ' | ' + time;
                }
            }
        }
        else {
            return null;
        }
    }
};
RangeDatePipe = __decorate([
    Pipe({
        name: 'dateRange'
    })
], RangeDatePipe);

let ShareEventModalComponent = class ShareEventModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.shareLink = {};
        this.close = () => {
            this.dialogRef.close();
        };
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.event = this.data.event;
        this.eventURL = "https://www.townscript.com/e/" + this.event.shortName;
        this.eventName = this.event.name;
        this.shareLink.fb = "https://www.facebook.com/sharer/sharer.php?s=100" +
            "&p[url]=" + config.baseUrl + "e/" + this.event.shortName +
            "&p[images][0]=" + config.baseUrl + "dashboard/images/organizer_login_files/logoforfb.png" +
            "&p[title]=" + this.eventName +
            "&p[summary]=" + "by townscript.com";
        this.shareLink.twitter = "https://twitter.com/share" +
            "?url=" + config.baseUrl + "e/" + this.event.shortName +
            "&text=" + this.eventName + " is now live on Townscript!";
        this.shareLink.linkedin = "https://www.linkedin.com/shareArticle?mini=true" +
            "&url=" + config.baseUrl + "e/" + this.event.shortName +
            "&title=" + this.eventName;
        this.shareLink.whatsapp = "https://web.whatsapp.com/send?" +
            "text=" + config.baseUrl + "e/" + this.event.shortName;
    }
};
ShareEventModalComponent = __decorate([
    Component({
        selector: 'app-share-event-modal',
        template: "<div class=\"share-event-modal-container\">\n    <div class=\"flex items-center text-lg text-gray-800 justify-between\">\n        <h2>Share Event</h2>\n        <div class=\"rounded-full\" matRipple (click)=\"close()\">\n            <i class=\"mdi mdi-close text-2xl cursor-pointer rounded-full\"></i>\n        </div>\n    </div>\n    <div class=\"px-2 py-2\">\n        <div class=\"platforms flex items-center justify-between\">\n            <a [href]=\"shareLink?.whatsapp\" target=\"_blank\">\n                <div class=\"platform text-center cursor-pointer p-2 flex-1\">\n                    <i class=\"mdi mdi-whatsapp block text-4xl whatsapp\"></i>\n                    <span class=\"text-gray-700 text-sm\">Whatsapp</span>\n                </div>\n            </a>\n            <a [href]=\"shareLink?.fb\" target=\"_blank\">\n                <div class=\"platform text-center cursor-pointer p-2 flex-1\">\n                    <i class=\"mdi mdi-facebook block text-4xl facebook\"></i>\n                    <span class=\"text-gray-700 text-sm\">Facebook</span>\n                </div>\n            </a>\n            <a [href]=\"shareLink?.twitter\" target=\"_blank\">\n                <div class=\"platform text-center cursor-pointer p-2 flex-1\">\n                    <i class=\"mdi mdi-twitter block text-4xl twitter\"></i>\n                    <span class=\"text-gray-700 text-sm\">Twitter</span>\n                </div>\n            </a>\n            <a [href]=\"shareLink?.linkedin\" target=\"_blank\">\n                <div class=\"platform text-center cursor-pointer p-2 flex-1\">\n                    <i class=\"mdi mdi-linkedin block text-4xl linkedin\"></i>\n                    <span class=\"text-gray-700 text-sm\">LinkedIn</span>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>",
        styles: [".share-event-modal-container .platform{-webkit-transition:.15s;transition:.15s}.share-event-modal-container .platform:hover{background:#fcfcfc;-webkit-transform:translateY(-5px);transform:translateY(-5px)}.share-event-modal-container .whatsapp{color:#64bf56}.share-event-modal-container .facebook{color:#4267b2}.share-event-modal-container .twitter{color:#3aa1f2}.share-event-modal-container .linkedin{color:#2977b5}"]
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef$1, Object])
], ShareEventModalComponent);

let TsCardSkeletonComponent = class TsCardSkeletonComponent {
    constructor() {
        this.gridType = "list";
    }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], TsCardSkeletonComponent.prototype, "gridType", void 0);
TsCardSkeletonComponent = __decorate([
    Component({
        selector: 'ts-card-skeleton',
        template: "<div class=\"w-full flex\">\n    <div class=\"w-full\">\n        <div class=\"bg-white border border-gray-300 card flex flex-col  overflow-hidden rounded translate-3d-none-after w-full\"\n            [ngClass]=\"{'md:flex-row': gridType=='list'}\">\n            <div class=\"w-full relative p-24 text-primary-500\"\n                [ngClass]=\"{'lg:w-2/3 md:w-2/3 md:p-0': gridType=='list'}\">\n                <div class=\"absolute top-0 left-0 h-full w-full\">\n                    <span class=\"skeleton-box group-hover:scale-110 transition-transform transform-center block h-full\">\n                    </span>\n                </div>\n            </div>\n            <div class=\"flex flex-col flex-grow w-full\">\n                <div class=\"pl-4 pr-4 pt-4 mb-4 text-left relative flex-grow\">\n                    <h3 class=\"text-lg font-bold text-gray-darkest mr-10\">\n                        <span class=\"skeleton-box h-5 w-1/6 inline-block\"></span>\n                        <span class=\"skeleton-box h-5 w-1/2 inline-block\"></span>\n                        <span class=\"skeleton-box h-5 w-2/4 inline-block\"></span>\n                        <span class=\"skeleton-box h-5 w-2/5 inline-block\"></span>\n                        <span class=\"skeleton-box h-5 w-2/3 inline-block\"></span>\n                        <span class=\"skeleton-box h-5 w-3/4 inline-block\"></span>\n                    </h3>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>",
        styles: [".skeleton-box{position:relative;overflow:hidden;background-color:#e2e8f0}.skeleton-box::after{position:absolute;top:0;right:0;bottom:0;left:0;-webkit-transform:translateX(-100%);transform:translateX(-100%);background-image:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,0)),color-stop(20%,rgba(255,255,255,.2)),color-stop(60%,rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background-image:linear-gradient(90deg,rgba(255,255,255,0) 0,rgba(255,255,255,.2) 20%,rgba(255,255,255,.5) 60%,rgba(255,255,255,0));-webkit-animation:1.5s infinite shimmer;animation:1.5s infinite shimmer;content:''}@-webkit-keyframes shimmer{100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes shimmer{100%{-webkit-transform:translateX(100%);transform:translateX(100%)}}"]
    }),
    __metadata("design:paramtypes", [])
], TsCardSkeletonComponent);

let TsListingCardComponent = class TsListingCardComponent {
    constructor(dialog, browser) {
        this.dialog = dialog;
        this.browser = browser;
        this.urgencyMessage = false;
        this.goingCounter = false;
        this.moreIcons = false;
        this.defaultCardImageUrl = "https://townscript-common-resources.s3.ap-south-1.amazonaws.com/ListingsStatic/default-card.png";
        this.shareEvent = () => {
            if (this.browser.isMobile() && window.navigator && window.navigator['share']) {
                window.navigator['share']({
                    title: this.eventData.name,
                    text: this.eventData.name,
                    url: config.baseUrl + 'e/' + this.eventData.shortName,
                });
            }
            else {
                const dialogRef = this.dialog.open(ShareEventModalComponent, {
                    width: '450px',
                    data: { event: this.eventData }
                });
            }
        };
    }
    ngOnInit() {
        switch (this.type) {
            case 'featured':
                this.showRegularCard = true;
                break;
            case 'topic':
                this.topicCard = true;
                break;
            default:
                this.showRegularCard = true;
                break;
        }
        // this.eventData = {
        //   "id": 1, "eventId": 87429,
        //   "name": "first event",
        //   "shortName": "test-once-more-123442",
        //   "startTime": "2019-07-25T10:30:00.000+0000", "endTime": "2019-07-25T11:30:00.000+0000",
        //   "displayName": null, "shortDescription": null, "eventTimeZone": "Asia/Calcutta",
        //   "timeZoneDisplayName": null, "venueLocation": null, "city": "Pune",
        //   "latitude": 18.513217600000000, "longitude": 73.928873200000000,
        //   "coverImageUrl": "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/city-banners/large/pune.jpg",
        //   "cardImageUrl": "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/city-banners/mobile/pune.jpg",
        //   "publicEvent": true, "live": true, "categoryId": null, "eventTypeId": 17,
        //   "minimumTicketPrice": 3456, "minimumTicketPriceCurrency": "INR",
        //   "organizerIsTrusted": true, "soldOutFlag": false, "reportFlag": false,
        //   "paid": false, "onlineEvent": false, "organizerId": 3080, "pageViews": null,
        //   "organizerScore": null, "ticketsSold": 0, "roTicketsSold": null, "ticketsRemaining": 0,
        //   "farDuration": null, "townscriptIR": null, "score": null, "recurrent": false
        // };
        // this.topicData = {
        //   cardImageUrl: 'https://s3.ap-south-1.amazonaws.com/townscript-common-resources/category/748x220/marathon1.jpg',
        //   name: 'Marathons in Pune',
        //   subTitle: 'Upcoming Running Events In Pune - 5K, 10K, Half & Full Marathon In Pune',
        //   topicDescription: 'Being fit is the new trend. The fitness community grown in number with increased participation in running and marathons in Pune. Upcoming Running Events In Pune involves all types of run, like the city run, trail run, fun run, social cause run and many more. Nearly every week there are activities planned by running groups in Pune. Some of the most anticipated runs are full marathon in Pune, half marathon, 10K and 5K marathon in Pune. Pune marathon events best suited for everyone, be it kids, elders, seasonal runners or newbies.'
        // };
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], TsListingCardComponent.prototype, "eventData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TsListingCardComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TsListingCardComponent.prototype, "topicData", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], TsListingCardComponent.prototype, "gridType", void 0);
TsListingCardComponent = __decorate([
    Component({
        selector: 'ts-listing-card',
        template: "<div *ngIf=\"!topicCard\" [ngClass]=\"showRegularCard ? \n        gridType=='list' ? 'listing-container cursor-pointer rounded  my-4 mx-auto  lg:flex' :\n                    'bg-white cursor-pointer lg:flex lg:flex-col listing-container my-1 rounded w-full'\n        : 'listing-container bg-white cursor-pointer rounded  my-4 mx-auto lg:flex lg:flex-row-reverse' \n\">\n    <div [ngClass]=\"showRegularCard\n                    ? gridType=='list' ? 'h-48 lg:h-auto sm:w-full md:w-full lg:w-2/5 flex-none bg-cover text-center overflow-hidden' : 'bg-cover flex-none h-48 lg:h-auto lg:w-3/5 lg:w-full md:w-full overflow-hidden p-24 sm:w-full text-center'\n                    : 'h-48 lg:h-auto sm:w-full md:w-full lg:w-3/5 flex-none bg-cover text-center overflow-hidden'\"\n        [style.background-image]=\"eventData.cardImageUrl?'url(' + eventData.cardImageUrl + ')':'url(' + defaultCardImageUrl + ')'\">\n    </div>\n    <div [ngClass]=\"showRegularCard ?\n                     'listing-container--content flex flex-col justify-between leading-normal w-full'\n                     : 'listing-container--featured-content flex flex-col justify-between leading-normal w-full'\n                     \">\n        <div class=\"pl-4 pt-3 pb-1\">\n            <div class=\"flex flex-row justify-between align-items-center\">\n                <span *ngIf=\"urgencyMessage || featuredCard\"\n                    class=\"text-md bg-orange-500 rounded text-md px-2 mr-2\">Featured</span>\n                <span *ngIf=\"urgencyMessage\" class=\"text-xs text-red-400\">Booked 20 times in the last 24 hrs</span>\n                <span *ngIf=\"urgencyMessage\" class=\"bg-white rounded-l-full px-2\">\n                    <i class=\"material-icons align-bottom pr-1 hidden\">remove_red_eye</i>\n                    <strong class=\"text-xs\">12 Viewing right now</strong>\n                </span>\n            </div>\n            <div class=\"font-303030 capitalize text-xl mb-1\">{{eventData.name | titlecase}}</div>\n            <div class=\"flex text-xs \">\n                <div class=\"mr-2 flex items-center\">\n                    <i class=\"mdi mdi-calendar-today text-xl pr-1  align-bottom\"></i>\n                    <span class=\"\">{{[eventData.startTime, eventData.endTime] | dateRange}}</span>\n                </div>\n                <div class=\"mr-2 flex items-center\">\n                    <i class=\"mdi mdi-map-marker pr-1 text-xl  align-bottom\"></i>\n                    <span class=\"font-323E48 font-bold\">{{eventData.city}}</span>\n                </div>\n                <div *ngIf=\"goingCounter\" class=\"mr-2\">\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <span class=\"font-323E48 font-bold\">700</span>\n                </div>\n            </div>\n            <div *ngIf=\"featuredCard\" class=\"text-sm\">Heres goes some 2 line data which describes about the event.</div>\n            <div [ngClass]=\"showRegularCard ? 'py-2 pr-2 flex justify-between' \n                    : 'py-2 pr-2 flex flex-col-reverse'\">\n                <div *ngIf=\"moreIcons\" id=\"set-of-icons\" class=\"flex\">\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                    <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                </div>\n                <div [ngClass]=\"showRegularCard ? '' : ''\">\n                    <span class=\"pr-2 font-323E48 font-semibold text-sm sm:text-xs hover:text-gray-900 hover:underline\"\n                        *ngFor=\"let key of eventData.keywords\">#{{key.topicKeywordName}}</span>\n                </div>\n            </div>\n        </div>\n        <div\n            class=\"h-10 bottom-purple-bar border-t border-gray-300 flex items-center justify-between py-2 px-4 sm:rounded-b-lg lg:rounded-none\">\n            <div class=\"text-sm flex items-center\">\n                <app-follow type=\"icon\" [followTypeId]=\"eventData.id\" [followType]=\"'EVENT'\" color=\"#553c9a\"\n                    (click)=\"$event.stopPropagation()\"></app-follow>\n                <!-- <i class=\"mdi mdi-heart-outline text-2xl mr-2\"></i> -->\n                <div class=\"px-2 rounded-full\" matRipple>\n                    <i class=\"mdi mdi-share-variant text-2xl\" (click)=\"shareEvent();$event.stopPropagation()\"></i>\n                </div>\n            </div>\n            <div class=\"flex items-center\">\n                <span class=\"align-text-bottom price-container font-323E48 text-base font-semibold\"\n                    *ngIf=\"eventData.minimumTicketPrice\">\n                    {{eventData.minimumTicketPrice | currency:eventData.minimumTicketPriceCurrency}}/- Onwards</span>\n                <span *ngIf=\"!eventData.minimumTicketPrice \">Free</span>\n                <i class=\"mdi mdi-arrow-right text-2xl ml-2\"></i>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"topicCard\" class=\"topic-container my-4 mx-auto  lg:flex \">\n    <div class=\"hidden w-full md:block md:3/5 bg-cover text-center overflow-hidden\"\n        [style.background-image]=\"'url(' + topicData.cardImageUrl + ')'\">\n    </div>\n    <div class=\"flex flex-col bg-white w-3/5 px-4\">\n        <span class=\"m-2 text-2xl font-bold\">\n            {{topicData.name}}\n        </span>\n        <span class=\"m-2 subTitle text-lg opacity-50\">\n            {{topicData.subTitle}}\n        </span>\n        <span class=\"m-2 text-base\">\n            {{topicData.topicDescription}}\n        </span>\n        <div class=\"keywords m-2 flex\">\n            <span class=\"font-bold cursor-pointer text-xs rounded-full px-2 mr-2 capitalize\"\n                *ngFor=\"let key of topicData?.keywords\">{{key.keyCode}}\n                <i class=\"align-middle mdi mdi-heart-outline text-2xl\"></i>\n            </span>\n        </div>\n    </div>\n</div>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.listing-container{border:1px solid rgba(0,0,0,.13);border-radius:5px;font-family:Lato}.listing-container:hover{box-shadow:0 2px 8px 0 rgba(0,0,0,.2)}.listing-container:hover .bottom-purple-bar{box-shadow:0 2px 8px 0 rgba(0,0,0,.2);background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);border-radius:0 0 4px;-webkit-transition:1.3s;transition:1.3s}.listing-container:hover .bottom-purple-bar i,.listing-container:hover .bottom-purple-bar span{color:#fff!important}.listing-container .font-323E48{color:#323e48}.listing-container .font-303030{color:#303030}.listing-container .listing-container--content{background-color:#eee;min-height:195px}.listing-container .listing-container--content .bottom-purple-bar{-webkit-transition:background 1s ease-out;transition:background 1s ease-out}.listing-container .listing-container--content .price-container{font-size:15px}.listing-container .listing-container--featured-content{background-color:#fff}.listing-container .listing-container--featured-content .bottom-purple-bar{-webkit-transition:1s ease-in;transition:1s ease-in}.listing-container .listing-container--featured-content .price-container{font-size:15px}.listing-container i{color:#683592}:host ::ng-deep .listing-container:hover .bottom-purple-bar i{color:#fff}.topic-container{font-family:Lato;min-height:460px}.topic-container .subTitle{color:#263240}.topic-container .keywords,.topic-container i{color:#683592}.topic-container .keywords span{border:1.57px solid #683592}"]
    }),
    __metadata("design:paramtypes", [MatDialog, BrowserService])
], TsListingCardComponent);

let FollowComponent = class FollowComponent {
    constructor(userService, followService, dialog) {
        this.userService = userService;
        this.followService = followService;
        this.dialog = dialog;
        this.text = 'Follow';
        this.loggedIn = false;
        this.followedText = 'Following';
        this.type = 'button';
        this.color = '#553c9a';
        this.followed = false;
        this.checkFollowStatus = () => {
            if (!this.followTypeId || !this.followType) {
                return;
            }
            this.followService.followData.subscribe(res => {
                if (res) {
                    this.allFollowData = res;
                    this.followed = this.allFollowData.map(ele => ele.typeId).indexOf(this.followTypeId) > -1;
                    const currentFollowed = this.allFollowData.filter(ele => ele.typeId === this.followTypeId && ele.type === this.followType);
                    if (currentFollowed && currentFollowed.length > 0) {
                        this.currentId = currentFollowed[0].id;
                    }
                    if (this.followed) {
                        this.text = this.followedText;
                    }
                }
            });
        };
        this.openLogin = () => {
            const dialogConfig = new MatDialogConfig();
            dialogConfig.disableClose = false;
            dialogConfig.autoFocus = true;
            dialogConfig.backdropClass = 'mat-dialog-bkg-container';
            this.dialog.open(LoginModalComponent, dialogConfig);
        };
        this.followedFn = () => {
            if (!this.loggedIn) {
                this.openLogin();
                return;
            }
            if (!this.followed) {
                this.text = 'Following';
                this.followService.createFollowData(this.followType, this.followTypeId, this.user.userId).subscribe(res => {
                    this.followed = true;
                    this.text = this.followedText;
                    this.followService.getFollowData(this.user.userId);
                });
            }
            else {
                this.text = 'Unfollowed';
                this.followService.unfollow(this.currentId).subscribe(res => {
                    this.followed = false;
                    this.text = this.textCopy;
                    this.followService.getFollowData(this.user.userId);
                });
            }
        };
    }
    ngOnInit() {
        this.textCopy = this.text;
        this.userService.user.subscribe(data => {
            this.user = data;
            if (this.user && this.user.userId) {
                this.loggedIn = true;
                this.checkFollowStatus();
            }
            else {
                this.loggedIn = false;
            }
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], FollowComponent.prototype, "text", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FollowComponent.prototype, "followedText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FollowComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FollowComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FollowComponent.prototype, "followTypeId", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FollowComponent.prototype, "followType", void 0);
FollowComponent = __decorate([
    Component({
        selector: 'app-follow',
        template: "<div class=\"follow-container rounded-full cursor-pointer\" [class.flex]=\"type=='icon'\" (click)=\"followedFn()\"\n    (mouseover)=\"hover=true\" (mouseleave)=\"hover=false\" [class.followed]=\"followed\">\n    <div [style.background-color]=\"hover && type=='button' ? color : 'transparent'\"\n        [style.border-color]=\"type=='button' ? color : 'transparent'\" [class.rounded-full]=\"type=='button'\"\n        class=\"text-sm flex items-center justify-around antialiased font-bold border-purple-800\"\n        [style.color]=\"hover && type=='button'?'white':color\" [ngClass]=\"{'py-2 px-4 border-2':type=='button'}\">\n        <span class=\"text-sm mr-1\" *ngIf=\"type=='button'\">{{text}}</span>\n        <i class=\"mdi mdi-heart-outline text-base antialiased\" [class.text-2xl]=\"type=='icon'\" *ngIf=\"!followed\"></i>\n        <i class=\"mdi mdi-heart text-base antialiased followed-heart\" [class.text-2xl]=\"type=='icon'\"\n            *ngIf=\"followed\"></i>\n    </div>\n</div>",
        styles: [".follow-container{max-width:10rem;text-align:center}.follow-container div{-webkit-transition:.1s;transition:.1s}.follow-container div:active{-webkit-transform:scale(.9);transform:scale(.9)}@-webkit-keyframes dhadkan{0%{-webkit-transform:scale(.7);transform:scale(.7)}50%{-webkit-transform:scale(1.3);transform:scale(1.3)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes dhadkan{0%{-webkit-transform:scale(.7);transform:scale(.7)}50%{-webkit-transform:scale(1.3);transform:scale(1.3)}100%{-webkit-transform:scale(1);transform:scale(1)}}.follow-container.followed{-webkit-animation-name:dhadkan;animation-name:dhadkan;-webkit-animation-iteration-count:1;animation-iteration-count:1;-webkit-animation-duration:.2s;animation-duration:.2s}.follow-container .followed-heart{color:#eb4b4b}.follow-container div:hover{color:#c2b5b5}"]
    }),
    __metadata("design:paramtypes", [UserService, FollowService, MatDialog])
], FollowComponent);

let TsLoginSignupModule = class TsLoginSignupModule {
};
TsLoginSignupModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            TsFormsModule,
            ReactiveFormsModule,
            RecaptchaModule,
            HttpClientModule,
            MatRippleModule,
            MatSnackBarModule
        ],
        declarations: [
            TsLoginSignupComponent,
            LoginTopContentComponent,
            AppPasswordDirective,
            LoginModalComponent
        ],
        exports: [
            TsLoginSignupComponent,
            LoginTopContentComponent,
            LoginModalComponent
        ],
        providers: [
            ApiService,
            CookieService,
            UserService,
            NotificationService
        ]
    })
], TsLoginSignupModule);

let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            HttpClientModule,
            MatRippleModule$1,
            MatSnackBarModule$1,
            TsLoginSignupModule,
            TsFormsModule
        ],
        declarations: [
            TsHeaderComponent,
            TsFooterComponent,
            SearchComponent,
            CitySearchPopupComponent,
            HamburgerMenuComponent,
            UserMenuComponent
        ],
        exports: [
            TsHeaderComponent,
            TsFooterComponent,
            SearchComponent,
            CitySearchPopupComponent,
            HamburgerMenuComponent,
            UserMenuComponent
        ],
        providers: [
            TimeService,
            DatePipe,
            ApiService,
            HeaderService,
            BrowserService,
            UserService
        ]
    })
], LayoutModule);

let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        declarations: [
            RangeDatePipe,
            FollowComponent,
        ],
        imports: [
            CommonModule
        ],
        exports: [
            FollowComponent,
            RangeDatePipe
        ],
        providers: [TimeService, ApiService, UserService, FollowService]
    })
], SharedModule);

let CardsModule = class CardsModule {
};
CardsModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            TsFormsModule,
            SharedModule
        ],
        declarations: [
            TsListingCardComponent,
            ShareEventModalComponent,
            TsCardSkeletonComponent
        ],
        exports: [
            TsFormsModule,
            TsListingCardComponent,
            ShareEventModalComponent,
            TsCardSkeletonComponent
        ],
        providers: [
            BrowserService
        ]
    })
], CardsModule);

export { ApiService, AppPasswordDirective, BrowserService, CardsModule, CitySearchPopupComponent, CookieService, FollowComponent, FollowService, HamburgerMenuComponent, HeaderService, LayoutModule, LoginModalComponent, LoginTopContentComponent, NotificationService, PlaceService, RangeDatePipe, SearchComponent, ShareEventModalComponent, SharedModule, TimeService, TsCardSkeletonComponent, TsControlValueAccessor, TsFooterComponent, TsHeaderComponent, TsListingCardComponent, TsLoginSignupComponent, TsLoginSignupModule, UserMenuComponent, UserService, config };
//# sourceMappingURL=townscript-components.js.map
