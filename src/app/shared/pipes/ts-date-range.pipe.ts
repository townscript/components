import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
    name: 'dateRange'
})
export class RangeDatePipe implements PipeTransform {

    days: any = {'SU':'Sun','MO': 'Mon','TU': 'Tue','WE': 'Wed','TH': 'Thu','FR': 'Fri','SA': 'Sat'};

    transform = (rangeDates: any, isRecurrent?: any ,args?: any): any => {
        if (rangeDates) {
            // for Recurring events
            if(isRecurrent && args['startTime'] != undefined){
              const startTime = args['startTime'];
              const freq   = args['recurrenceRuleArray'][0].split(';')[0].split('=')[1];
              let freqLabel = 'Daily';
              if(freq.toLowerCase() == 'Weekly'.toLowerCase()){
                let byDays = args['recurrenceRuleArray'][0].split(';')[2].split('=')[1].split(',');
                if(byDays.length > 2){
                    freqLabel = 'Multiple Dates';
                } else {
                  freqLabel = 'Every ';
                  for(let index = 0;index < byDays.length; index++){
                    freqLabel += this.days[byDays[index]];
                    if(index < (byDays.length - 1)){
                      freqLabel += ', ';
                    }
                  }
                }
              }
              return  freqLabel + ' | ' + startTime;
            } else {
              // for other events or fallback 
              const date = rangeDates.map(d => DateTime.fromISO(d).toFormat('dd'));
              const month = rangeDates.map(d => DateTime.fromISO(d).toFormat('MMM'));
              const year = rangeDates.map(d => DateTime.fromISO(d).toFormat('yy'));
              const time = DateTime.fromISO(rangeDates[0]).toFormat('hh:mm a');
              if (year[0] !== year[1]) {
                return month[0] + ' ' + date[0] + '\'' + year[0] + ' - ' + month[1] + ' ' + date[1] + '\'' + year[1] + ' | ' + time;
              } else {
                if ((date[0] === date[1]) && (month[0] === month[1])) {
                  return month[0] + ' ' + date[0] + ' | ' + time;
                } else if ((month[0] !== month[1])) {
                  return month[0] + ' ' + date[0] + ' - ' + month[1] + ' ' + date[1] + ' | ' + time;
                } else {
                  return month[0] + ' ' + date[0] + ' - ' + date[1] + ' | ' + time;
                }
              }
            }
        } else {
            return null;
        }
    }
}
