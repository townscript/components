(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@townscript/elements')) :
    typeof define === 'function' && define.amd ? define('@townscript/components', ['exports', '@angular/core', '@angular/common', '@townscript/elements'], factory) :
    (global = global || self, factory((global.townscript = global.townscript || {}, global.townscript.components = {}), global.ng.core, global.ng.common, global.elements));
}(this, function (exports, core, common, elements) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var config = {
        floatLabelOptions: ['auto', 'always', 'never'],
        floatLabel: ''
    };
    config.floatLabel = config.floatLabelOptions[0];

    var TsControlValueAccessor = /** @class */ (function () {
        function TsControlValueAccessor() {
            this.onChangePropagation = function () { };
            this.onTouchedPropagation = function () { };
        }
        TsControlValueAccessor.prototype.registerOnChange = function (fn) {
            this.onChangePropagation = fn;
        };
        TsControlValueAccessor.prototype.registerOnTouched = function (fn) {
            this.onTouchedPropagation = fn;
        };
        TsControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
        };
        return TsControlValueAccessor;
    }());

    var TsHeaderComponent = /** @class */ (function () {
        function TsHeaderComponent() {
            this.Components = ["createEventBtn"];
            this.source = "";
        }
        TsHeaderComponent.prototype.ngOnInit = function () {
        };
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], TsHeaderComponent.prototype, "Components", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], TsHeaderComponent.prototype, "source", void 0);
        TsHeaderComponent = __decorate([
            core.Component({
                selector: 'ts-header',
                template: "<nav class=\"ts-header flex align-items-center\" *ngIf=\"source!='marketplace'\">\n    <div class=\"container flex align-items-center\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand flex align-items-center\" href=\"/\">\n                <img src=\"assets/images/ts-logo.png\" alt=\"Townscript Event Ticketing Logo\"\n                    title=\"Townscript Event Ticketing Logo\" />\n            </a>\n        </div>\n        <div id=\"navbar\" class=\"nav-right hidden-xs\">\n            <ul>\n                <li>\n                    <a href=\"/signup\" ts-data-analytics prop-event=\"click\" eventLabel=\"Get Started\"\n                        prop-clicked-location=\"Animated Header\">\n                        <ts-button text=\"Create Event\"></ts-button>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<nav class=\"ts-header-new flex items-center\" *ngIf=\"source=='marketplace'\">\n    <div class=\"ts-container flex items-center w-full\">\n        <div class=\"sm:w-1/4 lg:w-1/6\">\n            <img class=\"ts-logo\" src=\"assets/images/ts-logo.png\" alt=\"Townscript Event Ticketing Logo\"\n                title=\"Townscript Event Ticketing Logo\" />\n        </div>\n        <div class=\"lg:w-1/3 ml-3 hidden sm:hidden md:hidden lg:flex search-container p-2\">\n            <div class=\"w-3/4 flex items-center left-section\">\n                <i class=\"mdi mdi-magnify text-2xl color-blue\"></i>\n                <input class=\"ml-2 text-sm w-full bg-transparent\" type=\"text\" placeholder=\"Search for an Event\" />\n            </div>\n            <div class=\"w-1/4 flex items-center ml-2\">\n                <i class=\"mdi mdi-map-marker text-2xl color-blue\"></i>\n                <span class=\"text-sm ml-1 mr-2\">Pune</span>\n                <i class=\"mdi mdi-chevron-down text-2xl\"></i>\n            </div>\n        </div>\n        <div class=\"sm:w-1/4 lg:w-1/6 flex items-center ml-6 view-type text-xl color-blue\">\n            <i class=\"active text-xl mdi mdi-book-open mr-4\"></i>\n            <i class=\"mdi mdi-map-legend mr-4\"></i>\n            <i class=\"mdi mdi-calendar-today mr-4\"></i>\n        </div>\n        <div class=\"lg:w-1/6 hidden sm:hidden md:hidden lg:flex items-center pr-8\">\n            <div class=\"create-btn flex justify-center items-center\">\n                <span class=\"text-sm mr-2\">CREATE EVENT</span>\n                <i class=\"mdi mdi-ticket text-2xl\"></i>\n            </div>\n        </div>\n        <div class=\"sm:w-1/1 lg:w-1/6 justify-end hidden sm:hidden md:hidden lg:flex items-center\">\n            <i class=\"mdi mdi-account-circle text-4xl mr-2 color-blue\"></i>\n            <span class=\"text-base\">Login | Signup</span>\n        </div>\n        <div class=\"sm:w-1/1 ml-auto mr-2  sm:flex md:flex lg:hidden items-center\">\n            <i class=\"mdi mdi-magnify text-2xl ml-2 color-blue\"></i>\n        </div>\n    </div>\n</nav>",
                styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}.ts-header{min-height:85px;background-color:#fff;width:100%;position:fixed;top:0;z-index:1000;box-shadow:0 15px 40px -20px rgba(40,44,63,.2)}.ts-header .container{display:-webkit-box;display:flex;width:100%;padding:0 10%}.ts-header .container .navbar-header .navbar-brand img{width:165px}.ts-header .container .nav-right{margin-left:auto}.ts-header .container .nav-right li,.ts-header .container .nav-right ul{margin-bottom:0}.ts-header-new{min-height:75px;background-color:#f7f7f7;width:100%;position:fixed;top:0;z-index:1000}.ts-header-new .search-container{height:44px;border-radius:2px;background-color:#ededed}.ts-header-new .search-container .left-section{border-right:1px solid rgba(151,151,151,.3)}.ts-header-new .ts-logo{width:136px;min-width:136px;min-height:31px}.ts-header-new .view-type i{opacity:.8;padding:3px 9px}.ts-header-new .view-type i.active{opacity:1;background:#3782c4;border-radius:50%;color:#fff;box-shadow:0 0 5px 0 #8ec0ec}.ts-header-new .create-btn{width:100%;border-radius:20.5px;color:#fff;white-space:nowrap;background:linear-gradient(138.55deg,#a165c4 0,#4d2370 100%);box-shadow:0 2px 4px 0 #d4b1f0}@media (min-width:991px){.ts-container{padding:0 80px!important}}:host ::ng-deep .mat-button-wrapper{font-size:16px!important}"]
            }),
            __metadata("design:paramtypes", [])
        ], TsHeaderComponent);
        return TsHeaderComponent;
    }());

    var TsFooterComponent = /** @class */ (function () {
        function TsFooterComponent() {
            this.source = "landingPages";
            this.popularEvents = [];
            this.recentBlogs = [];
            this.popularReads = [];
            this.openContactUs = function () {
                window.open('/contact-us');
            };
            this.openMyBooking = function () {
                window.open('/signin?rdurl=/dashboard/mybookings', '_self');
            };
        }
        TsFooterComponent.prototype.ngOnInit = function () {
            if (this.source == "landingPages") ;
        };
        __decorate([
            core.Input("source"),
            __metadata("design:type", Object)
        ], TsFooterComponent.prototype, "source", void 0);
        __decorate([
            core.Input("popularEvents"),
            __metadata("design:type", Object)
        ], TsFooterComponent.prototype, "popularEvents", void 0);
        __decorate([
            core.Input("recentBlogs"),
            __metadata("design:type", Object)
        ], TsFooterComponent.prototype, "recentBlogs", void 0);
        __decorate([
            core.Input("popularReads"),
            __metadata("design:type", Object)
        ], TsFooterComponent.prototype, "popularReads", void 0);
        TsFooterComponent = __decorate([
            core.Component({
                selector: 'ts-footer',
                template: "<footer class=\"ts-footer text-center pt-32 pb-24\">\n    <div class=\"ts-container content-footer\">\n        <div class=\"flex mb-4\">\n            <div class=\"w-1/5 hidden-xs px-4\">\n                <h5>ORGANISE EVENTS</h5>\n                <ul class=\"list-unstyled\">\n                    <li><a href=\"/i/conference-registration\">Conferences</a></li>\n                    <li><a href=\"/i/workshops-and-trainings\">Workshops and Trainings</a></li>\n                    <li><a href=\"/i/college-fest-payment-portal\">College Festivals</a></li>\n                    <li><a href=\"/i/marathon-cycling-trips-treks-registration\">Sports and Fitness Events</a></li>\n                    <li><a href=\"/i/entertainment-events-ticketing\">Entertainment Events</a></li>\n                    <li><a href=\"/i/meetup-registration\">Meetups and Reunions</a></li>\n                    <li><a href=\"/i/treks-trips-registration\">Treks and Trips</a></li>\n                    <!-- <li><a href=\"/i/fundraising-crowdfunding\">Fundraisings</a></li> -->\n                </ul>\n            </div>\n            <div class=\"w-1/5 px-4 hidden-xs\">\n                <h5>POPULAR SEARCHES</h5>\n                <ul class=\"list-unstyled\">\n                    <!--<li><a href=\"/pune/new-year-party\">New Year Parties In Pune</a></li>\n\t\t\t\t<li><a href=\"/mumbai/new-year-party\">New Year Parties In Mumbai</a></li>\n\t\t\t\t<li><a href=\"/delhi/new-year-party\">New Year Parties In Delhi</a></li>\n\t\t\t\t<li><a href=\"/bangalore/new-year-party\">New Year Parties In Bangalore</a></li>-->\n                    <li><a\n                            href=\"http://support.townscript.com/support/solutions/articles/1000265220-list-of-countries-supported-by-townscript-\">\n                            List of Countries supported by Townscript</a></li>\n                    <li><a href=\"/i/sell-event-tickets-online\">Sell Event Tickets Online</a></li>\n                    <li><a href=\"/i/event-management-software\">Event Management Software</a></li>\n                    <li><a href=\"/i/event-registration-software\">Event Registration Software</a></li>\n                    <li><a href=\"/i/conference-management-system\">Conference management System</a></li>\n                    <li><a href=\"/i/event-planning-software\">Event Planning Software</a></li>\n                    <li><a href=\"/i/online-event-ticketing\">Online Event Ticketing</a></li>\n                    <li><a href=\"/i/corporate-event-management\">Corporate Event Management</a></li>\n                </ul>\n            </div>\n            <div class=\"w-1/5 px-4 hidden-xs\" *ngIf=\"source=='landingPages'\">\n                <h5>RECENT BLOGS</h5>\n                <ul class=\"list-unstyled blog-links\">\n                    <li *ngFor=\"let blog of recentBlogs\"><a [href]=\"blog.url\">{{blog.title}}</a></li>\n                </ul>\n            </div>\n            <div class=\"w-1/5 px-4 hidden-xs\" *ngIf=\"source=='marketplace'\">\n                <h5>POPULAR EVENTS</h5>\n                <ul class=\"list-unstyled blog-links\">\n                    <li *ngFor=\"let event of popularEvents\"><a [href]=\"event.url\">{{event.title}}</a></li>\n                </ul>\n            </div>\n            <div class=\"w-1/5 px-4 hidden-xs\">\n                <h5>POPULAR READS</h5>\n                <ul class=\"list-unstyled blog-links\">\n                    <li *ngFor=\"let read of popularReads\"><a [href]=\"read.url\" target=\"_blank\">{{read.title}}</a></li>\n                </ul>\n            </div>\n            <div class=\"w-1/5 hidden-xs pl-12\">\n                <h5>BOOKINGS</h5>\n                <ul class=\"list-unstyled\">\n                    <li>\n                        <a href (click)=\"openMyBooking()\">My Bookings</a>\n                    </li>\n                </ul>\n                <h5 (click)=\"openContactUs()\">GET IN TOUCH</h5>\n                <!--<h5><a href=\"mailto:service@townscript.com\" target=\"_blank\" class=\"mail-to visible-xs\">service@townscript.com</a></h5>-->\n                <ul class=\"list-unstyled\">\n                    <!-- \t\t\t\t<li class=\"hidden-xs\">\n\t\t\t\t\t<a href=\"#\">Contact us</a>\n\t\t\t\t</li> -->\n                    <li class=\"social-list-item\">\n                        <ul class=\"social-list clearfix\">\n                            <li>\n                                <a href=\"https://www.facebook.com/townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-facebook\"></i></a>\n                            </li>\n                            <li>\n                                <a href=\"https://twitter.com/townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-twitter\"></i></a>\n                            </li>\n                            <li>\n                                <a href=\"https://plus.google.com/+Townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-google-plus\"></i></a>\n                            </li>\n                            <li>\n                                <a href=\"https://www.linkedin.com/company/townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-linkedin\"></i></a>\n                            </li>\n                            <!--<li>\n\t\t\t\t\t\t\t<a href=\"mailto:service@townscript.com\" target=\"_blank\"><i class=\"ion-email\"></i></a>\n\t\t\t\t\t\t</li>-->\n                        </ul>\n                    </li>\n                </ul>\n                <h5 class=\"hidden-xs\">ORGANIZER APP</h5>\n                <ul class=\"list-apps hidden-xs\">\n                    <li>\n                        <a href=\"//play.google.com/store/apps/details?id=com.dyulok.android.organizerapp&hl=en_IN\"\n                            title=\"Download on Google play\" class=\"store-icon google-play-icon\" target=\"_blank\">Download\n                            on Google\n                            play</a>\n                    </li>\n                    <li>\n                        <a href=\"//itunes.apple.com/in/app/townscript-event-manager/id1441088900?mt=8\"\n                            title=\"Download on App Store\" target=\"_blank\" class=\"store-icon app-store-icon\">Download on\n                            App Store</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"ts-container\">\n        <div class=\"brand-footer\">\n            <div class=\"flex mb-4\">\n                <div class=\"w-1/4\">\n                    <img src=\"assets/images/ts-logoBMS.png\" alt=\"Townscript Event Ticketing Logo\"\n                        title=\"Townscript Event Ticketing Logo\" />\n                    <a class=\"ts-footer__copyright\">Copyright@2019</a>\n                    <!--<a href=\"mailto:service@townscript.com\" target=\"_blank\" class=\"ts-footer__mail hidden-xs\">service@townscript.com</a>-->\n                </div>\n                <div class=\"w-2/3 linear-footer hidden-xs\">\n                    <h5>LEARN MORE</h5>\n                    <br>\n                    <ul class=\"list-linear\">\n                        <!-- <li><a href=\"#\">Features</a></li> -->\n                        <li><a href=\"/pricing\">Pricing</a></li>\n                        <li><a href=\"/how-it-works\" ts-data-analytics prop-event=\"click\" eventLabel=\"How It Works\"\n                                prop-clicked-location=\"Footer\">How it works</a></li>\n                        <!-- <li><a href=\"#\">Mobile Apps</a></li> -->\n                        <li><a href=\"//townscript-api.readme.io/\" target=\"_blank\">APIs for Developers</a></li>\n                        <li><a href=\"/terms-and-conditions\">Policies</a></li>\n                        <li><a href=\"/privacy-policy\">Privacy</a></li>\n                        <li><a href=\"http://support.townscript.com/support/home\" target=\"_blank\">Support / FAQs</a></li>\n                    </ul>\n                    <div class=\"linear-footer hidden-xs\" *ngIf=\"source=='marketplace'\">\n                        <h5>POPULAR CITIES</h5>\n                        <br>\n                        <ul class=\"list-linear\">\n                            <!-- <li *ngFor=\"let city of countryCityMap\">\n                                <div (click)=\"onChangeCity(city)\"><a href=\"/{{city | lowercase}}\">{{city}}</a></div>\n                            </li> -->\n                        </ul>\n                    </div>\n                    <div class=\"linear-footer hidden-xs\">\n                        <h5>ABOUT</h5>\n                        <br>\n                        <ul class=\"list-linear\">\n                            <li><a href=\"/about-us\">About us</a></li>\n                            <li><a href=\"/contact-us\">Contact us</a></li>\n                            <!-- <li><a href=\"#\">Career</a></li> -->\n                            <!-- <li><a href=\"#\">Media</a></li> -->\n                            <li><a href=\"http://blog.townscript.com\" target=\"_blank\">Blog</a></li>\n                            <li><a href=\"http://eventmagazine.townscript.com/\" target=\"_blank\">Event Magazine</a></li>\n                            <li><a href=\"https://productblog.townscript.com/\" target=\"_blank\">Product Diary</a></li>\n                            <li><a href=\"/sitemap\" target=\"_blank\">Sitemap</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"w-1/12 mixpanel-button align-text hidden-xs\">\n                    <a href=\"https://mixpanel.com/f/partner\" target=\"_blank\"><img\n                            src=\"//cdn.mxpnl.com/site_media/images/partner/badge_blue.png\" alt=\"Mobile Analytics\"\n                            width=\"100\"></a>\n                    <a href=\"https://www.g2crowd.com/products/townscript/reviews\" target=\"_blank\">\n                        <img src=\"https://s3-ap-southeast-1.amazonaws.com/common-resources/assets/g2badge.png\"\n                            alt=\"G2Crowd Townscript Reviews\" width=\"100\">\n                        <span>30 Reviews</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <br>\n</footer>",
                styles: [".color-blue{color:#3782c4}.background-blue{background:#3782c4}footer{background-color:#ebebeb}footer h5{font-size:14px!important;font-weight:600}footer li,footer ul{margin-bottom:0}footer .content-footer{padding-bottom:20px}footer .m-l-8per{margin-left:8%}footer .brand-footer{border-top:1px solid #e5d7f1;padding-top:30px}footer img{width:165px}footer .bookmyshow-logo{width:140px}footer .mixpanel-button{padding:0;position:relative;left:-71px;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}footer .mixpanel-button a,footer .mixpanel-button span{white-space:nowrap;display:block}footer .mixpanel-button img{width:100px!important}footer .mail-to{font-weight:600}footer a,footer h5{color:#683594;text-decoration:none;margin-bottom:0}footer a{letter-spacing:.4px;font-size:13px;font-weight:400}footer ul.social-list{list-style-type:none;padding:0;margin:0}footer ul.social-list li{display:inline-block;margin-right:10px}footer ul.social-list li i{font-size:17px}.ts-footer__copyright{display:block;text-indent:50px}@media (min-width:768px){.ts-footer__copyright{text-align:left}.ts-footer__mail{display:block;text-align:left;text-indent:50px;font-weight:700;line-height:36px}.ts-footer .container-fluid .row>div:first-child{padding-left:0}.ts-footer .container-fluid .row>div:nth-child(2){padding:0}.ts-footer .container-fluid .row>div:last-child{padding-right:0}footer{margin-top:100px;text-align:left;background-image:url(//s3.ap-south-1.amazonaws.com/townscript-common-resources/assets/footer-skyline.png);background-repeat:repeat-x;background-position:left top}footer .brand-footer .linear-footer h5,footer .brand-footer .linear-footer ul{display:inline-block;margin:2px 25px 2px 0;vertical-align:middle}footer .brand-footer .linear-footer .list-linear{list-style-type:none;padding:0}footer .brand-footer .linear-footer .list-linear li{float:left;margin-right:35px}footer ul.social-list{list-style-type:none;padding:0}footer ul.social-list li{display:block;float:left;margin-right:10px}footer ul.list-apps{list-style-type:none;padding:0}footer ul.list-apps li{line-height:50px;margin:10px 0}footer ul.list-apps li .store-icon{background-size:auto 45px;background-image:url(//s3.ap-south-1.amazonaws.com/townscript-common-resources/assets/store.png);background-repeat:no-repeat;display:block;width:150px;text-indent:-9999px}footer ul.list-apps li .store-icon.google-play-icon{background-position:0 0}footer ul.list-apps li .store-icon.app-store-icon{background-position:-172px 0}footer ul li{line-height:31px}footer ul li>a{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block}}.blog-links li{line-height:1.5;margin-bottom:18px}.blog-links li a{white-space:normal}"]
            }),
            __metadata("design:paramtypes", [])
        ], TsFooterComponent);
        return TsFooterComponent;
    }());

    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule,
                    elements.TsFormsModule
                ],
                declarations: [
                    TsHeaderComponent,
                    TsFooterComponent
                ],
                exports: [
                    TsHeaderComponent,
                    TsFooterComponent
                ]
            })
        ], LayoutModule);
        return LayoutModule;
    }());

    exports.LayoutModule = LayoutModule;
    exports.TsControlValueAccessor = TsControlValueAccessor;
    exports.TsFooterComponent = TsFooterComponent;
    exports.TsHeaderComponent = TsHeaderComponent;
    exports.config = config;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=townscript-components.umd.js.map