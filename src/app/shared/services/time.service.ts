import { Injectable } from '@angular/core';
import * as momentImported from 'moment-timezone';

const moment = momentImported;

@Injectable()
export class TimeService {

    moment: any = moment();
    constructor() {
    }

    convertDateToTimezone = (date, timeZoneOffset) => {
        var dateString = moment.tz(date, timeZoneOffset).format('YYYY-MM-DDTHH:mm:ss.sssZ');
        var tzon = [dateString.substr(0, 23), dateString.substr(24)];
        var currentSystemGMT = moment.tz(moment.tz.guess()).format("Z");
        return this.formatLocalDate(new Date(tzon[0] + currentSystemGMT));
    };

    formatLocalDate = (now) => {
        var tzo = -now.getTimezoneOffset(),
            dif = tzo >= 0 ? '+' : '-',
            pad = function (num) {
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
    }
}
