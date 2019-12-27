import { Injectable } from '@angular/core';
import { config } from './../../core/app-config';

@Injectable()
export class UtilityService {

    FB_APP_ID: any;

    deprecatedVsNewTimeZones : any = {
    'Australia/ACT':'Australia/Sydney',
    'Australia/LHI':'Australia/Lord_Howe',
    'Australia/North':'Australia/Darwin',
    'Australia/NSW':'Australia/Sydney',
    'Australia/Queensland':'Australia/Brisbane',
    'Australia/South':'Australia/Adelaide',
    'Australia/Tasmania':'Australia/Hobart',
    'Australia/Victoria':'Australia/Melbourne',
    'Australia/West':'Australia/Perth',
    'Brazil/Acre':'America/Rio_Branco',
    'Brazil/DeNoronha':'America/Noronha',
    'Brazil/East':'America/Sao_Paulo',
    'Brazil/West':'America/Manaus',
    'Canada/Atlantic':'America/Halifax',
    'Canada/Central':'America/Winnipeg',
    'Canada/Eastern':'America/Toronto',
    'Canada/Mountain':'America/Edmonton',
    'Canada/Newfoundland':'America/St_Johns',
    'Canada/Pacific':'America/Vancouver',
    'Canada/Saskatchewan':'America/Regina',
    'Canada/Yukon':'America/Whitehorse',
    'CET':'Europe/Paris.',
    'Chile/Continental':'America/Santiago',
    'Chile/EasterIsland':'Pacific/Easter',
    'CST6CDT':'America/Chicago.',
    'Cuba':'America/Havana',
    'EET':'Europe/Sofia.',
    'Egypt':'Africa/Cairo',
    'Eire':'Europe/Dublin',
    'EST':'America/Cancun.',
    'EST5EDT':'America/New_York.',
    'Etc/Greenwich':'Etc/GMT',
    'Etc/Universal':'Etc/UTC',
    'Etc/Zulu':'Etc/UTC',
    'GB':'Europe/London',
    'GB-Eire':'Europe/London',
    'GMT+0':'Etc/GMT',
    'GMT0':'Etc/GMT',
    'GMT−0':'Etc/GMT',
    'Greenwich':'Etc/GMT',
    'Hongkong':'Asia/Hong_Kong',
    'HST':'Pacific/Honolulu.',
    'Iceland':'Atlantic/Reykjavik',
    'Iran':'Asia/Tehran',
    'Israel':'Asia/Jerusalem',
    'Jamaica':'America/Jamaica',
    'Japan':'Asia/Tokyo',
    'Kwajalein':'Pacific/Kwajalein',
    'Libya':'Africa/Tripoli',
    'MET':'Europe/Paris.',
    'Mexico/BajaNorte':'America/Tijuana',
    'Mexico/BajaSur':'America/Mazatlan',
    'Mexico/General':'America/Mexico_City',
    'MST':'America/Phoenix.',
    'MST7MDT':'America/Denver.',
    'Navajo':'America/Denver',
    'NZ':'Pacific/Auckland',
    'NZ-CHAT':'Pacific/Chatham',
    'Poland':'Europe/Warsaw',
    'Portugal':'Europe/Lisbon',
    'PRC':'Asia/Shanghai',
    'PST8PDT':'America/Los_Angeles.',
    'ROC':'Asia/Taipei',
    'ROK':'Asia/Seoul',
    'Singapore':'Asia/Singapore',
    'Turkey':'Europe/Istanbul',
    'UCT':'Etc/UCT',
    'Universal':'Etc/UTC',
    'US/Alaska':'America/Anchorage',
    'US/Aleutian':'America/Adak',
    'US/Arizona':'America/Phoenix',
    'US/Central':'America/Chicago',
    'US/Eastern':'America/New_York',
    'US/East-Indiana':'America/Indiana/Indianapolis',
    'US/Hawaii':'Pacific/Honolulu',
    'US/Indiana-Starke':'America/Indiana/Knox',
    'US/Michigan':'America/Detroit',
    'US/Mountain':'America/Denver',
    'US/Pacific':'America/Los_Angeles',
    'US/Pacific-New':'America/Los_Angeles',
    'US/Samoa':'Pacific/Pago_Pago',
    'WET':'Europe/Lisbon.',
    'W-SU':'Europe/Moscow',
    'Zulu':'Etc/UTC'
    };


    constructor() {
    }

    IsJsonString = (str) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }

    addFBSDK = () => {
        this.FB_APP_ID = config.FB_APP_ID;
        var that = this;
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js#version=v2.9&appId=" + that.FB_APP_ID + "&status=true&cookie=true&xfbml=true";
            if(fjs && fjs.parentNode){
              fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'facebook-jssdk'));
    }
}
