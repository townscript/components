import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'dateRange'
})

export class RangeDatePipe implements PipeTransform {
    transform(rangeDates: any, args?: any): any {
        if (rangeDates) {
            const range = rangeDates.map(d => moment(d).format('DD'));
            const month = rangeDates.map(d => moment(d).format('MMM'));
            const time = moment(rangeDates[0]).format('hh:mm A');
            if (range[0] === range[1] && month[0] === month[1]) {
                return month[0] + ' ' + range[0] + ' | ' + time;
            } else if (range[0] === range[1] && month[0] !== month[1]) {
                return month[0] + ' ' + range[0] + ' - ' + month[1] + ' ' + range[1] + ' | ' + time;
            } else {
                return month + ' ' + range[0] + ' - ' + range[1] + ' | ' + time;
            }
        } else {
            return null;
        }
    }
}