/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var TsFooterComponent = /** @class */ (function () {
    function TsFooterComponent() {
        this.setFromTownscript = function (value) {
        };
        this.onChangeCity = function (city) {
        };
        this.openContactUs = function () {
            window.open('/contact-us');
        };
        this.openMyBooking = function () {
            window.open('/signin?rdurl=/dashboard/mybookings', '_self');
        };
    }
    /**
     * @return {?}
     */
    TsFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    TsFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ts-footer',
                    template: "<footer class=\"ts-footer\">\n    <div class=\"container-fluid content-footer\">\n        <div class=\"row\">\n            <div class=\"two columns hidden-xs m-l-8per\">\n                <h5>ORGANISE EVENTS</h5>\n                <ul class=\"list-unstyled\">\n                    <li><a href=\"/i/conference-registration\">Conferences</a></li>\n                    <li><a href=\"/i/workshops-and-trainings\">Workshops and Trainings</a></li>\n                    <li><a href=\"/i/college-fest-payment-portal\">College Festivals</a></li>\n                    <li><a href=\"/i/marathon-cycling-trips-treks-registration\">Sports and Fitness Events</a></li>\n                    <li><a href=\"/i/entertainment-events-ticketing\">Entertainment Events</a></li>\n                    <li><a href=\"/i/meetup-registration\">Meetups and Reunions</a></li>\n                    <li><a href=\"/i/treks-trips-registration\">Treks and Trips</a></li>\n                    <!-- <li><a href=\"/i/fundraising-crowdfunding\">Fundraisings</a></li> -->\n                </ul>\n            </div>\n            <div class=\"two columns hidden-xs\">\n                <h5>POPULAR SEARCHES</h5>\n                <ul class=\"list-unstyled\">\n                    <!--<li><a href=\"/pune/new-year-party\">New Year Parties In Pune</a></li>\n\t\t\t\t<li><a href=\"/mumbai/new-year-party\">New Year Parties In Mumbai</a></li>\n\t\t\t\t<li><a href=\"/delhi/new-year-party\">New Year Parties In Delhi</a></li>\n\t\t\t\t<li><a href=\"/bangalore/new-year-party\">New Year Parties In Bangalore</a></li>-->\n                    <li><a\n                            href=\"http://support.townscript.com/support/solutions/articles/1000265220-list-of-countries-supported-by-townscript-\">\n                            List of Countries supported by Townscript</a></li>\n                    <li><a href=\"/i/sell-event-tickets-online\">Sell Event Tickets Online</a></li>\n                    <li><a href=\"/i/event-management-software\">Event Management Software</a></li>\n                    <li><a href=\"/i/event-registration-software\">Event Registration Software</a></li>\n                    <li><a href=\"/i/conference-management-system\">Conference management System</a></li>\n                    <li><a href=\"/i/event-planning-software\">Event Planning Software</a></li>\n                    <li><a href=\"/i/online-event-ticketing\">Online Event Ticketing</a></li>\n                    <li><a href=\"/i/corporate-event-management\">Corporate Event Management</a></li>\n                </ul>\n            </div>\n            <div class=\"two columns hidden-xs\">\n                <h5>POPULAR EVENTS</h5>\n                <ul class=\"list-unstyled\">\n                    <li><a *ngFor=\"let event of popularEventsData\" href=\"/e/{{event.shortName}}?prS=listing&seS=footer\"\n                            (click)=\"setFromTownscript(true)\">{{event.name}}</a></li>\n                </ul>\n            </div>\n            <div class=\"two columns hidden-xs\">\n                <h5>LATEST UPDATES</h5>\n                <ul class=\"list-unstyled blog-links\">\n                    <li><a href=\"http://blog.townscript.com/how-to-organize-a-tedx-event/\" target=\"_blank\">How to\n                            Organize a Tedx\n                            Event?</a></li>\n                    <li><a href=\"http://blog.townscript.com/now-sell-event-ticket-internationally-in-27-countries-with-townscript/\"\n                            target=\"_blank\">Sell event tickets in 27+ countries with Townscript</a></li>\n                    <li><a href=\"http://blog.townscript.com/how-to-sell-event-tickets-online/\" target=\"_blank\">How to\n                            Sell Event\n                            Tickets Online</a></li>\n                    <li><a href=\"http://blog.townscript.com/how-to-sell-out-your-event-tickets-wthin-minutes/\"\n                            target=\"_blank\">How\n                            to Sell Out Your Event Tickets within Minutes?</a></li>\n                    <li><a href=\"http://blog.townscript.com/5-reasons-you-need-more-than-a-payment-gateway-for-your-event/\"\n                            target=\"_blank\">5 Reasons You Need more than a Payment Gateway</a></li>\n                </ul>\n            </div>\n            <div class=\"two columns hidden-xs\">\n                <h5>BOOKINGS</h5>\n                <ul class=\"list-unstyled\">\n                    <li>\n                        <a href (click)=\"openMyBooking()\">My Bookings</a>\n                    </li>\n                </ul>\n                <h5 (click)=\"openContactUs()\">GET IN TOUCH</h5>\n                <!--<h5><a href=\"mailto:service@townscript.com\" target=\"_blank\" class=\"mail-to visible-xs\">service@townscript.com</a></h5>-->\n                <ul class=\"list-unstyled\">\n                    <!-- \t\t\t\t<li class=\"hidden-xs\">\n\t\t\t\t\t<a href=\"#\">Contact us</a>\n\t\t\t\t</li> -->\n                    <li class=\"social-list-item\">\n                        <ul class=\"social-list clearfix\">\n                            <li>\n                                <a href=\"https://www.facebook.com/townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-facebook\"></i></a>\n                            </li>\n                            <li>\n                                <a href=\"https://twitter.com/townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-twitter\"></i></a>\n                            </li>\n                            <li>\n                                <a href=\"https://plus.google.com/+Townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-google-plus\"></i></a>\n                            </li>\n                            <li>\n                                <a href=\"https://www.linkedin.com/company/townscript\" target=\"_blank\"><i\n                                        class=\"mdi mdi-linkedin\"></i></a>\n                            </li>\n                            <!--<li>\n\t\t\t\t\t\t\t<a href=\"mailto:service@townscript.com\" target=\"_blank\"><i class=\"ion-email\"></i></a>\n\t\t\t\t\t\t</li>-->\n                        </ul>\n                    </li>\n                </ul>\n                <h5 class=\"hidden-xs\">ORGANIZER APP</h5>\n                <ul class=\"list-apps hidden-xs\">\n                    <li>\n                        <a href=\"//play.google.com/store/apps/details?id=com.dyulok.android.organizerapp&hl=en_IN\"\n                            title=\"Download on Google play\" class=\"store-icon google-play-icon\" target=\"_blank\">Download\n                            on Google\n                            play</a>\n                    </li>\n                    <li>\n                        <a href=\"//itunes.apple.com/in/app/townscript-event-manager/id1441088900?mt=8\"\n                            title=\"Download on App Store\" target=\"_blank\" class=\"store-icon app-store-icon\">Download on\n                            App Store</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"brand-footer\">\n            <div class=\"row\">\n                <div class=\"three columns\">\n                    <img src=\"assets/images/ts-logoBMS.png\" alt=\"Townscript Event Ticketing Logo\"\n                        title=\"Townscript Event Ticketing Logo\" />\n                    <a class=\"ts-footer__copyright\">Copyright@2019</a>\n                    <!--<a href=\"mailto:service@townscript.com\" target=\"_blank\" class=\"ts-footer__mail hidden-xs\">service@townscript.com</a>-->\n                </div>\n                <div class=\"eight columns linear-footer hidden-xs\">\n                    <h5>LEARN MORE</h5>\n                    <br>\n                    <ul class=\"list-linear\">\n                        <!-- <li><a href=\"#\">Features</a></li> -->\n                        <li><a href=\"/pricing\">Pricing</a></li>\n                        <li><a href=\"/how-it-works\" ts-data-analytics prop-event=\"click\" eventLabel=\"How It Works\"\n                                prop-clicked-location=\"Footer\">How it works</a></li>\n                        <!-- <li><a href=\"#\">Mobile Apps</a></li> -->\n                        <li><a href=\"//townscript-api.readme.io/\" target=\"_blank\">APIs for Developers</a></li>\n                        <li><a href=\"/terms-and-conditions\">Policies</a></li>\n                        <li><a href=\"/privacy-policy\">Privacy</a></li>\n                        <li><a href=\"http://support.townscript.com/support/home\" target=\"_blank\">Support / FAQs</a></li>\n                    </ul>\n                    <div class=\"linear-footer hidden-xs\">\n                        <h5>POPULAR CITIES</h5>\n                        <br>\n                        <ul class=\"list-linear\">\n                            <li *ngFor=\"let city of countryCityMap\">\n                                <div (click)=\"onChangeCity(city)\"><a href=\"/{{city | lowercase}}\">{{city}}</a></div>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"linear-footer hidden-xs\">\n                        <h5>ABOUT</h5>\n                        <br>\n                        <ul class=\"list-linear\">\n                            <li><a href=\"/about-us\">About us</a></li>\n                            <li><a href=\"/contact-us\">Contact us</a></li>\n                            <!-- <li><a href=\"#\">Career</a></li> -->\n                            <!-- <li><a href=\"#\">Media</a></li> -->\n                            <li><a href=\"http://blog.townscript.com\" target=\"_blank\">Blog</a></li>\n                            <li><a href=\"http://eventmagazine.townscript.com/\" target=\"_blank\">Event Magazine</a></li>\n                            <li><a href=\"https://productblog.townscript.com/\" target=\"_blank\">Product Diary</a></li>\n                            <li><a href=\"/sitemap\" target=\"_blank\">Sitemap</a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"one columns mixpanel-button align-text hidden-xs\">\n                    <a href=\"https://mixpanel.com/f/partner\" target=\"_blank\"><img\n                            src=\"//cdn.mxpnl.com/site_media/images/partner/badge_blue.png\" alt=\"Mobile Analytics\"\n                            width=\"100\"></a>\n                    <a href=\"https://www.g2crowd.com/products/townscript/reviews\" target=\"_blank\">\n                        <img src=\"https://s3-ap-southeast-1.amazonaws.com/common-resources/assets/g2badge.png\"\n                            alt=\"G2Crowd Townscript Reviews\" width=\"100\">\n                        <span>30 Reviews</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <br>\n</footer>",
                    styles: ["footer{background-color:#ebebeb;text-align:center;padding-top:20px;padding-bottom:10px}footer h5{font-size:14px!important;font-weight:600}footer li,footer ul{margin-bottom:0}footer .container{width:85%}footer .content-footer{padding-bottom:20px}footer .m-l-8per{margin-left:8%}footer .brand-footer{border-top:1px solid #e5d7f1;padding-top:30px}footer img{width:165px}footer .bookmyshow-logo{width:140px}footer .mixpanel-button{padding:0;position:relative;left:-71px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}footer .mixpanel-button a,footer .mixpanel-button span{white-space:nowrap;display:block}footer .mixpanel-button img{width:100px!important}footer .mail-to{font-weight:600}footer a,footer h5{color:#683594;text-decoration:none;margin-bottom:0}footer a{letter-spacing:.4px;font-size:13px;font-weight:400}footer ul.social-list{list-style-type:none;padding:0}footer ul.social-list li{display:inline-block;margin-right:10px}footer ul.social-list li i{font-size:17px}.ts-footer__copyright{display:block;text-indent:50px}@media (min-width:768px){.ts-footer__copyright{text-align:left}.ts-footer__mail{display:block;text-align:left;text-indent:50px;font-weight:700;line-height:36px}.ts-footer .container-fluid .row>div:first-child{padding-left:0}.ts-footer .container-fluid .row>div:nth-child(2){padding:0}.ts-footer .container-fluid .row>div:last-child{padding-right:0}footer{margin-top:100px;text-align:left;background-image:url(//s3.ap-south-1.amazonaws.com/townscript-common-resources/assets/footer-skyline.png);background-repeat:repeat-x;background-position:left top;padding-top:120px;padding-bottom:45px}footer .brand-footer .linear-footer h5,footer .brand-footer .linear-footer ul{display:inline-block;margin:2px 25px 2px 0;vertical-align:middle}footer .brand-footer .linear-footer .list-linear{list-style-type:none;padding:0}footer .brand-footer .linear-footer .list-linear li{float:left;margin-right:35px}footer ul.social-list{list-style-type:none;padding:0}footer ul.social-list li{display:block;float:left;margin-right:10px}footer ul.list-apps{list-style-type:none;padding:0}footer ul.list-apps li{line-height:50px;margin:10px 0}footer ul.list-apps li .store-icon{background-size:auto 45px;background-image:url(//s3.ap-south-1.amazonaws.com/townscript-common-resources/assets/store.png);background-repeat:no-repeat;display:block;width:150px;text-indent:-9999px}footer ul.list-apps li .store-icon.google-play-icon{background-position:0 0}footer ul.list-apps li .store-icon.app-store-icon{background-position:-172px 0}footer ul li{line-height:31px}footer ul li>a{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block}}.blog-links li{line-height:1.5;margin-bottom:18px}.blog-links li a{white-space:normal}"]
                }] }
    ];
    /** @nocollapse */
    TsFooterComponent.ctorParameters = function () { return []; };
    return TsFooterComponent;
}());
export { TsFooterComponent };
if (false) {
    /** @type {?} */
    TsFooterComponent.prototype.placeId;
    /** @type {?} */
    TsFooterComponent.prototype.city;
    /** @type {?} */
    TsFooterComponent.prototype.popularEventsData;
    /** @type {?} */
    TsFooterComponent.prototype.countryCityMap;
    /** @type {?} */
    TsFooterComponent.prototype.setFromTownscript;
    /** @type {?} */
    TsFooterComponent.prototype.onChangeCity;
    /** @type {?} */
    TsFooterComponent.prototype.openContactUs;
    /** @type {?} */
    TsFooterComponent.prototype.openMyBooking;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2NvbXBvbmVudHMvdHMtZm9vdGVyL3RzLWZvb3Rlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztJQWV2RDtpQ0FHb0IsVUFBQyxLQUFLO1NBRXpCOzRCQUNjLFVBQUMsSUFBSTtTQUVuQjs2QkFDZTtZQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDNUI7NkJBRWU7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdEO0tBYkE7Ozs7SUFrQkQsb0NBQVE7OztJQUFSO0tBQ0M7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLDIyVkFBeUM7O2lCQUUxQzs7Ozs0QkFORDs7U0FPYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHMtZm9vdGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RzLWZvb3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RzLWZvb3Rlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRzRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwbGFjZUlkOiBhbnk7XG4gIC8vY291bnRyeUNvZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvdW50cnlDb2RlXCIpO1xuICBjaXR5OiBhbnk7XG4gIHBvcHVsYXJFdmVudHNEYXRhOiBhbnk7XG4gIGNvdW50cnlDaXR5TWFwOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuICBzZXRGcm9tVG93bnNjcmlwdCA9ICh2YWx1ZSkgPT4ge1xuXG4gIH1cbiAgb25DaGFuZ2VDaXR5ID0gKGNpdHkpID0+IHtcblxuICB9XG4gIG9wZW5Db250YWN0VXMgPSAoKSA9PiB7XG4gICAgd2luZG93Lm9wZW4oJy9jb250YWN0LXVzJyk7XG4gIH07XG5cbiAgb3Blbk15Qm9va2luZyA9ICgpID0+IHtcbiAgICB3aW5kb3cub3BlbignL3NpZ25pbj9yZHVybD0vZGFzaGJvYXJkL215Ym9va2luZ3MnLCAnX3NlbGYnKTtcbiAgfTtcblxuXG5cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=