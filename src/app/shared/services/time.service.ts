import { Injectable } from '@angular/core';
import { DateTime } from 'luxon';
import { rrulestr } from 'rrule';

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

    dateTimeWithinHours = (date: Date, hours: number): boolean => {
        const compareDate = Date.now() + (hours * 60 * 60 * 1000);
        const dateTime = date.getTime();
        return compareDate > dateTime && dateTime > Date.now();
    }

    nextOccurenceFromRRule = (startDate: Date, endDate: Date, rruleString: string, recTime: string): Date => {

        const ddMMyyyyDate = DateTime.fromJSDate(startDate).toFormat('dd-MM-yyyy');
        const dtstart = DateTime.fromFormat(`${ddMMyyyyDate} ${recTime}`, 'dd-MM-yyyy hh:mm a').toJSDate();

        const rrule = rrulestr(rruleString, { 'dtstart': dtstart });
        const recDates = rrule.between(dtstart, endDate, true).filter(date => date > new Date());
        return recDates.length > 0 ? recDates[0] : startDate;
    }
}
