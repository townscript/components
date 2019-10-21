import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';

@Injectable()
export class TimeService {

    constructor() {
    }

    convertDateToTimezone = (date, timeZoneOffset): any => {
        const dateVar = DateTime.fromISO(date, { zone: timeZoneOffset });
        const dateString = DateTime.fromISO(dateVar).toString();
        return this.formatLocalDate(new Date(dateString));
    }

    formatLocalDate = (now): any => {
        const tzo = -now.getTimezoneOffset(),
            dif = tzo >= 0 ? '+' : '-',
            pad = function (num) {
                const norm = Math.abs(Math.floor(num));
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
