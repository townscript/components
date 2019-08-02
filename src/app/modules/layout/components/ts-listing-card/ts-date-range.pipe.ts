import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'dateRange'
})

export class RangeDatePipe implements PipeTransform {
    transform(rangeDates: any, args?: any): any {
        if (rangeDates) {
            const date = rangeDates.map(d => moment(d).format('DD'));
            const month = rangeDates.map(d => moment(d).format('MMM'));
            const time = moment(rangeDates[0]).format('hh:mm A');
            console.log(month[0]);
            if ((date[0] === date[1]) && (month[0] === month[1])) {
                return month[0] + ' ' + date[0] + ' | ' + time;
            } else if ((date[0] === date[1]) && (month[0] !== month[1])) {
                return month[0] + ' ' + date[0] + ' - ' + month[1] + ' ' + date[1] + ' | ' + time;
            } else {
                return month[0] + ' ' + date[0] + ' - ' + date[1] + ' | ' + time;
            }
        } else {
            return null;
        }
    }
}