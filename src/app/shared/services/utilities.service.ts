import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable()
export class UtilityService {

    FB_APP_ID = environment.FB_APP_ID;

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
