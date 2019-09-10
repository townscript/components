import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from "luxon";

@Pipe({
    name: 'dateRange'
})

export class RangeDatePipe implements PipeTransform {
    transform(rangeDates: any, args?: any): any {
        if (rangeDates) {
            const date = rangeDates.map(d => DateTime.fromISO(d).toFormat('dd'));
            const month = rangeDates.map(d => DateTime.fromISO(d).toFormat('MMM'));
            const year = rangeDates.map(d => DateTime.fromISO(d).toFormat('yy'));
            const time = DateTime.fromISO(rangeDates[0]).toFormat('hh:mm a');
            if (year[0] !== year[1]) {
                return month[0] + ' ' + date[0] + "'" + year[0] + ' - ' + month[1] + ' ' + date[1] + "'" + year[1] + ' | ' + time;
            } else {
                if ((date[0] === date[1]) && (month[0] === month[1])) {
                    return month[0] + ' ' + date[0] + ' | ' + time;
                } else if ((month[0] !== month[1])) {
                    return month[0] + ' ' + date[0] + ' - ' + month[1] + ' ' + date[1] + ' | ' + time;
                } else {
                    return month[0] + ' ' + date[0] + ' - ' + date[1] + ' | ' + time;
                }
            }
        } else {
            return null;
        }
    }
}