import { Injectable } from '@angular/core';
import { DateTime } from "luxon";

@Injectable()
export class TimeService {

    constructor() {
    }

    convertDateToTimezone = (date, timeZoneOffset) => {
        var date = DateTime.fromISO(date, { zone: timeZoneOffset });
        var dateString = DateTime.fromISO(date).toString();
        return this.formatLocalDate(new Date(dateString));
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
