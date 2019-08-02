import { __decorate, __metadata } from 'tslib';
import { Input, Component, Injectable, Pipe, NgModule } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';
import * as algoliaSearchImported from 'algoliasearch';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as momentImported from 'moment-timezone';
import * as moment_ from 'moment';
import { TsFormsModule } from '@townscript/elements';
import { FormsModule } from '@angular/forms';

const config = {
    floatLabelOptions: ['auto', 'always', 'never'],
    floatLabel: ''
};
config.floatLabel = config.floatLabelOptions[0];

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

let TsHeaderComponent = class TsHeaderComponent {
    constructor(datepipe) {
        this.datepipe = datepipe;
        this.Components = ["createEventBtn"];
        this.source = "marketplace";
        this.algoliaIndexName = "tsTesting";
    }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", Array)
], TsHeaderComponent.prototype, "Components", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TsHeaderComponent.prototype, "source", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], TsHeaderComponent.prototype, "algoliaIndexName", void 0);
TsHeaderComponent = __decorate([
    Component({
        selector: 'ts-header',
        template: "<nav class=\"ts-header flex align-items-center\" *ngIf=\"source!='marketplace'\">\n    <div class=\"container flex align-items-center\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand flex align-items-center\" href=\"/\">\n                <img src=\"assets/images/ts-logo.png\" alt=\"Townscript Event Ticketing Logo\"\n                    title=\"Townscript Event Ticketing Logo\" />\n            </a>\n        </div>\n        <div id=\"navbar\" class=\"nav-right hidden-xs\">\n            <ul>\n                <li>\n                    <a href=\"/signup\" ts-data-analytics prop-event=\"click\" eventLabel=\"Get Started\"\n                        prop-clicked-location=\"Animated Header\">\n                        <!-- <ts-button text=\"Create Event\"></ts-button> -->\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<nav class=\"ts-header-new w-full fixed flex items-center\" *ngIf=\"source=='marketplace'\">\n    <div class=\"ts-container flex items-center w-full\">\n        <div class=\"sm:w-1/4 lg:w-1/6\">\n            <img class=\"ts-logo\" src=\"assets/images/ts-logo.png\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n        </div>\n        <div class=\"lg:w-5/12 ml-3 hidden sm:hidden md:hidden lg:flex\">\n            <app-search class=\"w-full\" [algoliaIndexName]=\"algoliaIndexName\"></app-search>\n        </div>\n        <div class=\"invisible sm:w-1/4 lg:w-1/12 flex items-center ml-6 view-type text-xl color-blue\">\n            <!-- <i class=\"active text-xl mdi mdi-book-open mr-4\"></i>\n            <i class=\"mdi mdi-map-legend mr-4\"></i>\n            <i class=\"mdi mdi-calendar-today mr-4\"></i> -->\n        </div>\n        <div class=\"lg:w-1/6 hidden sm:hidden md:hidden lg:flex items-center pr-8\">\n            <div class=\"create-btn flex justify-center items-center\">\n                <span class=\"text-sm mr-2\">CREATE EVENT</span>\n                <i class=\"mdi mdi-ticket text-2xl\"></i>\n            </div>\n        </div>\n        <div class=\"sm:w-1/1 lg:w-1/6 justify-end hidden sm:hidden md:hidden lg:flex items-center\">\n            <i class=\"mdi mdi-account-circle text-4xl mr-2 color-blue\"></i>\n            <span class=\"text-base\">Login | Signup</span>\n        </div>\n        <div class=\"sm:w-1/1 ml-auto mr-2  sm:flex md:flex lg:hidden items-center\">\n            <i class=\"mdi mdi-magnify text-2xl ml-2 color-blue\"></i>\n        </div>\n    </div>\n</nav>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ts-header{min-height:85px;background-color:#fff;width:100%;position:fixed;top:0;z-index:1000;box-shadow:0 15px 40px -20px rgba(40,44,63,.2)}.ts-header .container{display:-webkit-box;display:flex;width:100%;padding:0 10%}.ts-header .container .navbar-header .navbar-brand img{width:165px}.ts-header .container .nav-right{margin-left:auto}.ts-header .container .nav-right li,.ts-header .container .nav-right ul{margin-bottom:0}.ts-header-new{min-height:75px;background-color:#f7f7f7;top:0;z-index:1000}.ts-header-new .ts-logo{width:146px;min-width:146px;min-height:31px}@media (min-width:991px){.ts-container{padding:0 80px!important}.ts-header-new .view-type i{opacity:.8;padding:3px 9px}.ts-header-new .view-type i.active{opacity:1;background:#3782c4;border-radius:50%;color:#fff;box-shadow:0 0 5px 0 #8ec0ec}.ts-header-new .create-btn{width:100%;min-width:200px;border-radius:20.5px;color:#fff;white-space:nowrap;background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0}}:host ::ng-deep .mat-button-wrapper{font-size:16px!important}"]
    }),
    __metadata("design:paramtypes", [DatePipe])
], TsHeaderComponent);

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

const moment = momentImported;
let TimeService = class TimeService {
    constructor() {
        this.moment = moment();
        this.convertDateToTimezone = (date, timeZoneOffset) => {
            var dateString = moment.tz(date, timeZoneOffset).format('YYYY-MM-DDTHH:mm:ss.sssZ');
            var tzon = [dateString.substr(0, 23), dateString.substr(24)];
            var currentSystemGMT = moment.tz(moment.tz.guess()).format("Z");
            return this.formatLocalDate(new Date(tzon[0] + currentSystemGMT));
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

const algoliasearch = algoliaSearchImported;
let SearchComponent = class SearchComponent {
    constructor(timeService, datepipe) {
        this.timeService = timeService;
        this.datepipe = datepipe;
        this.algoliaIndexName = "tsTesting";
        this.searchTextChanged = new Subject();
        this.searchActive = false;
        this.citySearchActive = false;
        this.activeCity = "Pune";
        this.callAlgolia = (text) => {
            this.index.search({
                query: text,
                hitsPerPage: 6
            }).then((data) => {
                console.log(data);
                this.filterDataForSearchResult(data);
            });
        };
        this.filterDataForSearchResult = (data) => {
            let results = data.hits;
            let interests = results.filter(ele => {
                return ele.objType == "keyword" ||
                    ele.objType == "eventtype" ||
                    ele.objType == "category";
            });
            let organizers = results.filter(ele => ele.objType == "organizer");
            let events = results.filter(ele => ele.objType == "event");
            interests.map(interest => {
                interest.name = interest.name + ' Events';
                interest.location = "PUNE";
            });
            organizers.map(organizer => {
                if (!organizer.imageUrl) {
                    organizer.imageUrl = "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-organizer.png";
                }
                if (organizer.secondaryTextProperties && organizer.secondaryTextProperties.country) {
                    organizer.location = organizer.secondaryTextProperties.country;
                }
            });
            events.map(event => {
                if (!event.imageUrl) {
                    event.imageUrl = "https://s3.ap-south-1.amazonaws.com/townscript-common-resources/search-empty-event.png";
                }
                if (event.secondaryTextProperties && event.secondaryTextProperties.city) {
                    event.location = event.secondaryTextProperties.city;
                }
                if (event.secondaryTextProperties && event.secondaryTextProperties.startTime) {
                    let startDateTime = event.secondaryTextProperties.startTime;
                    startDateTime = this.timeService.convertDateToTimezone(startDateTime, event.secondaryTextProperties.eventTimeZone);
                    event.secondaryTextProperties.startTime = this.datepipe.transform(startDateTime, "d MMM yyyy, ' 'h:mma");
                }
            });
            this.searchResults = { "interests": interests, "organizers": organizers, "events": events };
        };
        this.toggleCityPopup = () => {
            let cityInputElement = document.getElementById("cityInput");
            if (document.activeElement == cityInputElement) {
                this.citySearchActive = true;
                this.activeCityBackup = this.activeCity;
                this.activeCity = '';
                this.searchActive = false;
            }
            else {
                this.citySearchActive = false;
                this.setCityOnEmpty();
            }
        };
        this.setCityOnEmpty = () => {
            console.log("Changed");
            if (this.activeCity.trim() == "" || this.activeCity == undefined) {
                this.activeCity = this.activeCityBackup;
            }
        };
        this.search = (text) => {
            if (text != undefined && text.length > 0)
                this.searchTextChanged.next(text);
        };
        this.searchTextChanged.pipe(debounceTime(300)).subscribe(text => this.callAlgolia(text));
        this.client = algoliasearch("AT5UB8FMSR", "c7e946f5b740ef035bd824f69dcc1612");
        this.index = this.client.initIndex(this.algoliaIndexName);
    }
    ngOnInit() {
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], SearchComponent.prototype, "algoliaIndexName", void 0);
SearchComponent = __decorate([
    Component({
        selector: 'app-search',
        template: "<div class=\"w-full lg:flex search-container relative\" [class.active]=\"searchActive\">\n    <div class=\"w-2/3 m-2 flex items-center left-section\">\n        <i class=\"mdi mdi-magnify text-2xl color-blue p-2\"></i>\n        <input [(ngModel)]=\"searchText\" (ngModelChange)=\"search($event)\"\n            (focus)=\"searchActive = true;citySearchActive=false\" (blur)=\"searchActive = false\"\n            class=\"text-sm w-full h-full bg-transparent  p-2\" type=\"text\" placeholder=\"Search for an Event\" />\n        <div class=\"suggestions enter-slide-bottom w-full p-4 absolute\" *ngIf=\"searchResults && searchActive\">\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.interests.length>0\">\n                <li class=\"list-head\">\n                    INTERESTS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let interest of searchResults.interests\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ interest.imageUrl +')'\">\n                        </div>\n                        <div>\n                            <span class=\"mb-1 block\">{{interest.name | titlecase}} </span>\n                            <div class=\"flex items-center\" *ngIf=\"interest.location\">\n                                <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                <small>{{interest.location}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.events.length>0\">\n                <li class=\"list-head\">\n                    EVENTS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let event of searchResults.events\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ event.imageUrl +')'\"></div>\n                        <div>\n                            <span class=\"mb-1 block\">{{event.name | titlecase}} </span>\n                            <div class=\"flex items-center\">\n                                <div class=\"flex items-center\" *ngIf=\"event.location\">\n                                    <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                    <small>{{event.location}}</small>\n                                </div>\n                                <div class=\"flex items-center ml-2\" *ngIf=\"event?.secondaryTextProperties?.startTime\">\n                                    <i class=\"mdi mdi-calendar-today color-blue mr-1\"></i>\n                                    <small>{{event.secondaryTextProperties.startTime}}</small>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <ul class=\"ts-enter\" *ngIf=\"searchResults?.organizers.length>0\">\n                <li class=\"list-head\">\n                    ORGANIZERS\n                </li>\n                <li class=\"p-2 text-xs font-bold cursor-pointer\" *ngFor=\"let organizer of searchResults.organizers\">\n                    <div class=\"flex items-center\">\n                        <div class=\"avatar mr-3 bg-cover\" [style.backgroundImage]=\"'url('+ organizer.imageUrl +')'\">\n                        </div>\n                        <div>\n                            <span class=\"mb-1 block\">{{organizer.name | titlecase}} </span>\n                            <div class=\"flex items-center\" *ngIf=\"organizer.location\">\n                                <i class=\"mdi mdi-map-marker color-blue\"></i>\n                                <small>{{organizer.location}}</small>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"w-1/3 flex items-center justify-between p-2 relative city-search-container\"\n        [class.active]=\"citySearchActive\">\n        <div class=\"flex items-center\">\n            <i class=\"mdi mdi-map-marker text-2xl color-blue\"></i>\n            <input id=\"cityInput\" type=\"text\" (focus)=\"toggleCityPopup()\" (blur)=\"toggleCityPopup()\"\n                [(ngModel)]=\"activeCity\" class=\"w-full bg-transparent text-sm\" value=\"Pune\" />\n        </div>\n        <i class=\"mdi mdi-chevron-down text-2xl\"></i>\n        <div class=\"city-suggestions enter-slide-bottom\" *ngIf=\"citySearchActive\">\n            <div class=\"suggestions-container\">\n                <ul>\n                    <li class=\"p-2 cursor-pointer\">\n                        <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                        <span class=\"text-sm\">Pune</span>\n                    </li>\n                    <li class=\"p-2 cursor-pointer\">\n                        <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                        <span class=\"text-sm\">Mumbai</span>\n                    </li>\n                    <li class=\"p-2 cursor-pointer\">\n                        <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                        <span class=\"text-sm\">Bangalore</span>\n                    </li>\n                    <li class=\"p-2 cursor-pointer\">\n                        <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                        <span class=\"text-sm\">New Delhi</span>\n                    </li>\n                    <li class=\"p-2 cursor-pointer\">\n                        <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                        <span class=\"text-sm\">Lucknow</span>\n                    </li>\n                    <li class=\"p-2 cursor-pointer\">\n                        <i class=\"mdi mdi-map-marker text-base mr-1 color-blue\"></i>\n                        <span class=\"text-sm\">Kanpur</span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>",
        styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}@media (min-width:991px){.search-container{height:44px;border-radius:2px;background-color:#ededed;-webkit-transition:.3s;transition:.3s}.search-container .left-section{border-right:1px solid rgba(151,151,151,.3)}.search-container .left-section input{-webkit-transition:.3s;transition:.3s}.search-container .left-section input:focus{background:#fafafa}.search-container .left-section .suggestions{top:100%;left:0;background:#fafafa;border-top:1px solid rgba(151,151,151,.4)}.search-container .left-section .suggestions ul{margin:2% 0}.search-container .left-section .suggestions ul li{color:#636363;-webkit-transition:.15s;transition:.15s;border-bottom:1px solid rgba(151,151,151,.25)}.search-container .left-section .suggestions ul li.list-head{font-size:10px;color:#636363;border:none;font-weight:400}.search-container .left-section .suggestions ul li.list-head:hover{background:#fafafa}.search-container .left-section .suggestions ul li .avatar{border-radius:50%;height:41px;width:41px}.search-container .left-section .suggestions ul li:hover{background:#ededed}.search-container .city-search-container{-webkit-transition:.3s;transition:.3s}.search-container .city-search-container.active{background:#fafafa;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container .city-search-container .city-suggestions{position:absolute;top:135%;width:135%;left:-34%;background:#fafafa;border-top:3px solid #3782c4;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container .city-search-container .city-suggestions li:hover{background:#ededed}.search-container .city-search-container .city-suggestions:before{content:\" \";width:10px;position:absolute;top:-3%;left:88%;height:10px;-webkit-filter:drop-shadow(0 -5px 10px rgba(0, 0, 0, .15));filter:drop-shadow(0 -5px 10px rgba(0, 0, 0, .15));background:#fafafa;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-top:3px solid #3782c4;border-left:3px solid #3782c4}.search-container.active{background:#fafafa;box-shadow:0 5px 10px 0 rgba(0,0,0,.15)}.search-container.active .suggestions{box-shadow:0 11px 15px 0 rgba(0,0,0,.15)}}"]
    }),
    __metadata("design:paramtypes", [TimeService, DatePipe])
], SearchComponent);

let TsListingCardComponent = class TsListingCardComponent {
    constructor() {
        this.listingData = [{ "id": 127536, "name": "All About Music", "startTime": "2019-08-27T03:30:00.000+0000", "city": "Mumbai", "venueLocation": "Taj Lands End, Mumbai", "shortName": "all-about-music", "endTime": "2019-08-28T13:30:00.000+0000", "s3ImageName": "83e5e98e-a5e5-4ca7-9f4a-3d037f28f324.jpg", "s3MobileImageName": "89488875-aa19-41b9-a967-0695f7379c42.jpg", "live": true, "draft": false, "minimumTicketPrice": 4999.0, "minimumTicketPriceCurrency": "INR", "eventTopic": "MUSIC", "absoluteBannerImageUrl": "//s3.ap-south-1.amazonaws.com/townscript-production/images/83e5e98e-a5e5-4ca7-9f4a-3d037f28f324.jpg", "absoluteMobileImageUrl": "//s3.ap-south-1.amazonaws.com/townscript-production/images/mobile-cover-uploaded/89488875-aa19-41b9-a967-0695f7379c42.jpg", "eventCreationTime": "2019-05-31T07:26:00.000+0000", "soldOutFlag": false, "eventCreatorName": "Truly Musical", "eventCreatorImageName": "1d44576b-6659-478f-81a3-256fcd8dc788.png", "keywords": [{ "id": 159, "keyName": "business", "keyCode": "business", "topicId": 169, "algoAssigned": false, "weight": 1 }, { "id": 392, "keyName": "artist", "keyCode": "artist", "topicId": 248, "algoAssigned": false, "weight": 1 }], "organizerIsTrusted": false, "eventTimeZone": "Asia/Calcutta", "recurring": false, "attendeeTaxInvoiceEnable": false }, { "id": 133101, "name": "MIRA-BHAYANDER MAYOR MARATHON", "startTime": "2019-08-18T00:30:00.000+0000", "city": "Mumbai", "venueLocation": "Netaji Subhash Chandra Bose Maidan", "shortName": "mirabhayander-mayor-marathon-344001", "endTime": "2019-08-18T04:30:00.000+0000", "s3ImageName": "014de0fb-7786-48f1-8a4e-4f6f69100e74.jpg", "s3MobileImageName": "e2fc4cc7-36de-4f94-a13d-e97bfefc6909.jpg", "live": true, "draft": false, "minimumTicketPrice": 177.0, "minimumTicketPriceCurrency": "INR", "eventTopic": "MARATHON", "absoluteBannerImageUrl": "//s3.ap-south-1.amazonaws.com/townscript-production/images/014de0fb-7786-48f1-8a4e-4f6f69100e74.jpg", "absoluteMobileImageUrl": "//s3.ap-south-1.amazonaws.com/townscript-production/images/mobile-cover-uploaded/e2fc4cc7-36de-4f94-a13d-e97bfefc6909.jpg", "eventCreationTime": "2019-06-29T12:00:49.049+0000", "soldOutFlag": false, "eventCreatorName": "Mira-Bhayander Municipal Corporation", "eventCreatorImageName": "b7e20175-207f-4a8d-b2c5-c8eb839f7c6e.jpeg", "keywords": [{ "id": 274, "keyName": "marathon", "keyCode": "marathon", "topicId": 154, "algoAssigned": false, "weight": 2 }, { "id": 449, "keyName": "runner", "keyCode": "runner", "topicId": 154, "algoAssigned": false, "weight": 2 }], "organizerIsTrusted": false, "eventTimeZone": "Asia/Calcutta", "recurring": false, "attendeeTaxInvoiceEnable": false }, { "id": 137487, "name": "SECTION STUDENT CONGRESS\u002719", "startTime": "2019-08-10T03:00:00.000+0000", "city": "Hyderabad", "venueLocation": "Jawaharlal Nehru Technological University Hyderabad", "shortName": "section-student-congress-441243", "endTime": "2019-08-10T11:30:00.000+0000", "s3ImageName": "ef03982f-32da-45ca-a703-018f769af030.jpg", "s3MobileImageName": "8b561a0f-997d-4160-90e9-acfbb5fede4c.jpg", "live": true, "draft": false, "minimumTicketPrice": 250.0, "minimumTicketPriceCurrency": "INR", "eventTopic": "TECH", "absoluteBannerImageUrl": "//s3.ap-south-1.amazonaws.com/townscript-production/images/ef03982f-32da-45ca-a703-018f769af030.jpg", "absoluteMobileImageUrl": "//s3.ap-south-1.amazonaws.com/townscript-production/images/mobile-cover-uploaded/8b561a0f-997d-4160-90e9-acfbb5fede4c.jpg", "eventCreationTime": "2019-07-22T04:19:42.042+0000", "soldOutFlag": false, "eventCreatorName": "IEEE HYDERABAD SECTION (R10)", "eventCreatorImageName": "1cecf1b4-3630-433b-b3bf-0187a5a0bf98.jpg", "keywords": [{ "id": 352, "keyName": "ieee", "keyCode": "ieee", "topicId": 229, "algoAssigned": false, "weight": 2 }, { "id": 176, "keyName": "electronics", "keyCode": "electronics", "topicId": 186, "algoAssigned": false, "weight": 1 }], "organizerIsTrusted": false, "eventTimeZone": "Asia/Calcutta", "recurring": false, "attendeeTaxInvoiceEnable": false }, { "id": 135924, "name": "Monsoon Half Marathon", "startTime": "2019-08-24T23:30:00.000+0000", "city": "Pune", "shortName": "monsoon-half-marathon-331312", "endTime": "2019-08-25T05:30:00.000+0000", "s3ImageName": "60d4c86a-a0ac-432c-aa1e-2269982feb7e.jpg", "s3MobileImageName": "0fb2dc52-f42d-4d26-8244-c61a40c58169.jpg", "live": true, "draft": false, "minimumTicketPrice": 399.0, "minimumTicketPriceCurrency": "INR", "eventTopic": "MARATHON", "absoluteBannerImageUrl": "//s3.ap-south-1.amazonaws.com/townscript-production/images/60d4c86a-a0ac-432c-aa1e-2269982feb7e.jpg", "absoluteMobileImageUrl": "//s3.ap-south-1.amazonaws.com/townscript-production/images/mobile-cover-uploaded/0fb2dc52-f42d-4d26-8244-c61a40c58169.jpg", "eventCreationTime": "2019-07-12T16:02:17.017+0000", "soldOutFlag": false, "eventCreatorName": "Occasionz Events", "eventCreatorImageName": "263dcddc-3938-490c-85a3-3a9cdb02238c.jpg", "keywords": [{ "id": 217, "keyName": "half marathon", "keyCode": "half-marathon", "topicId": 154, "algoAssigned": false, "weight": 3 }, { "id": 274, "keyName": "marathon", "keyCode": "marathon", "topicId": 154, "algoAssigned": false, "weight": 2 }], "organizerIsTrusted": false, "eventTimeZone": "Asia/Calcutta", "recurring": false, "attendeeTaxInvoiceEnable": false }];
        this.urgencyMessage = false;
        this.goingCounter = false;
    }
    ngOnInit() {
        console.log('asfadsf');
    }
};
TsListingCardComponent = __decorate([
    Component({
        selector: 'ts-listing-card',
        template: "<div *ngFor=\"let listing of listingData;\" class=\"listing-container border-gray-400 shadow rounded  my-4 m-auto lg:w-3/5 sm:w-1/2 md:w-1/2 lg:flex\">\n    <div class=\"h-48 lg:h-auto sm:w-full md:w-full lg:w-2/5 flex-none bg-center rounded text-center overflow-hidden\" [style.background-image]=\"'url(https://s3.ap-south-1.amazonaws.com/townscript-production/images/mobile-cover-uploaded/' + listing.s3MobileImageName + ')'\" title=\"Woman holding a mug\">\n    </div>\n    <div class=\"flex flex-col justify-between leading-normal w-full\">\n      <div class=\"pl-4 pt-6 mb-8\">\n        <div *ngIf=\"urgencyMessage\" class=\"flex flex-row justify-between align-items-center\">\n            <span class=\"text-sm bg-orange-500 rounded text-sm px-2\">In High Demand</span>\n            <span class=\"text-xs text-red-400\">Booked 20 times in the last 24 hrs</span>\n            <span class=\"bg-white rounded-l-full px-2\">\n                <i class=\"text-purple-900 material-icons align-bottom pr-1\">remove_red_eye</i>\n                <strong class=\"text-xs\">12 Viewing right now</strong>\n            </span>\n        </div>\n        <div class=\"text-gray-500 text-xl my-2\">{{listing.name}}</div>\n        <div class=\"text-gray flex \">\n            <div class=\"mr-2\">\n                <i class=\"material-icons pr-1  align-bottom text-purple-900\">calendar_today</i>\n                <span class=\" text-sm\">{{[listing.startTime, listing.endTime] | dateRange}}</span>\n            </div>\n            <div class=\"mr-2\">\n                <i class=\"material-icons pr-1  align-bottom text-purple-900\">location_on</i>\n                <span class=\"text-sm\">{{listing.city}}</span>\n            </div>\n            <div *ngIf=\"goingCounter\" class=\"mr-2\">\n                <i class=\"material-icons pr-1  align-bottom text-purple-900\">supervisor_account</i>\n                <span class=\"text-sm\">700</span>\n            </div>\n        </div>\n        <div  class=\"py-2 pr-2 flex justify-end\">\n            <div class=\"pr-2\" *ngFor=\"let key of listing.keywords\">#{{key.keyCode}}</div>\n        </div>\n      </div>\n      <div class=\"h-10 bottom-purple-bar flex flex-row justify-between text-white pt-2 pl-4 rounded-b-lg\">\n        <div class=\"text-sm\">\n            <i class=\"material-icons\">favorite_border</i>\n            <i class=\"material-icons px-2\">share</i>\n        </div>\n        <div class=\"\">\n            <span class=\"align-text-bottom text-lg\">{{listing.minimumTicketPrice | currency:listing.minimumTicketPriceCurrency}}-{{listing.minimumTicketPrice}}</span>\n            <span><i class=\"material-icons px-2\">arrow_forward</i></span>\n        </div>\n      </div>\n    </div>\n  </div>\n  {{ listingData | json}}\n",
        styles: [".listing-container{background:#f7f7f7}.listing-container .bottom-purple-bar{background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0}"]
    }),
    __metadata("design:paramtypes", [])
], TsListingCardComponent);

const moment$1 = moment_;
let RangeDatePipe = class RangeDatePipe {
    transform(rangeDates, args) {
        if (rangeDates) {
            const date = rangeDates.map(d => moment$1(d).format('DD'));
            const month = rangeDates.map(d => moment$1(d).format('MMM'));
            const time = moment$1(rangeDates[0]).format('hh:mm A');
            console.log(month[0]);
            if ((date[0] === date[1]) && (month[0] === month[1])) {
                return month[0] + ' ' + date[0] + ' | ' + time;
            }
            else if ((date[0] === date[1]) && (month[0] !== month[1])) {
                return month[0] + ' ' + date[0] + ' - ' + month[1] + ' ' + date[1] + ' | ' + time;
            }
            else {
                return month[0] + ' ' + date[0] + ' - ' + date[1] + ' | ' + time;
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

let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            TsFormsModule
        ],
        declarations: [
            TsHeaderComponent,
            TsFooterComponent,
            TsListingCardComponent,
            RangeDatePipe,
            SearchComponent
        ],
        exports: [
            TsHeaderComponent,
            TsFooterComponent,
            TsListingCardComponent
        ],
        providers: [TimeService, DatePipe]
    })
], LayoutModule);

export { LayoutModule, SearchComponent, TimeService, TsControlValueAccessor, TsFooterComponent, TsHeaderComponent, TsListingCardComponent, config, RangeDatePipe as ɵa };
//# sourceMappingURL=townscript-components.js.map
