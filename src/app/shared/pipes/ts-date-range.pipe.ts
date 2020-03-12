import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';
import { UtilityService } from '../services/utilities.service';

@Pipe({
    name: 'dateRange'
})
export class RangeDatePipe implements PipeTransform {

    days: any = {'SU':'Sun','MO': 'Mon','TU': 'Tue','WE': 'Wed','TH': 'Thu','FR': 'Fri','SA': 'Sat'};

    deprecatedVsNewTimeZones : any = this.utilityService.deprecatedVsNewTimeZones;

    constructor(private utilityService: UtilityService){

    }

    transform = (rangeDates: any, eventTimeZone: any, isRecurrent?: any ,args?: any, hideTime?: boolean): any => {

        if(!eventTimeZone) {
            eventTimeZone="Asia/Kolkata";
        } else {
            if(this.deprecatedVsNewTimeZones[eventTimeZone] != undefined)
              eventTimeZone = this.deprecatedVsNewTimeZones[eventTimeZone];
        }

        if (rangeDates) {
            // for Recurring events
            if(isRecurrent && args['startTime'] && args['recurrenceRule']){


              const startTime = args['startTime'];
              const endTime = args['endTime'];
              const freq   = args['recurrenceRule'].split(';')[0].split('=')[1];
              let freqLabel = 'Daily';
              //custom date selected
              if(args['recurrenceRule'].indexOf("RDATE") > -1){
                freqLabel = 'Multiple Dates';
              } else {
                // predefined R Rule
                if(freq.toLowerCase() == 'Weekly'.toLowerCase()){
                  let byDays = args['recurrenceRule'].split(';')[2].split('=')[1].split(',');
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
              }
              return  (endTime != undefined ? '' : freqLabel + ' | ') +  (hideTime ?  '' : ( startTime + (endTime != undefined ? ' to ' + endTime : '' )) );
            } else {
              let local = DateTime.local().setZone(eventTimeZone);
              // for other events or fallback
              const date = rangeDates.map(d => DateTime.fromISO(d , { zone: eventTimeZone }).toFormat('dd'));
              const month = rangeDates.map(d => DateTime.fromISO(d, { zone: eventTimeZone }).toFormat('MMM'));
              const year = rangeDates.map(d => DateTime.fromISO(d, { zone: eventTimeZone }).toFormat('yy'));
              const time = DateTime.fromISO(rangeDates[0], { zone: eventTimeZone }).toFormat('hh:mm a');

              const currYear = new Date().getUTCFullYear()% 100;
              if (year[0] !== year[1]) {
                return month[0] + ' ' + date[0] + '\'' + year[0] + ' - ' + month[1] + ' ' + date[1] + '\'' + year[1] + (hideTime ? '' :  ' | ' + time);
              } else {
                const yearSt = (year[0] - currYear) != 0 ? " '"+year[0] : '';
                if ((date[0] === date[1]) && (month[0] === month[1])) {
                  return month[0] + ' ' + date[0] + yearSt + (hideTime ? '' : ' | ' + time);
                } else if ((month[0] !== month[1])) {
                  return month[0] + ' ' + date[0] + yearSt + ' - ' + month[1] + ' ' + date[1] + yearSt + (hideTime ? '' : ' | ' + time);
                } else {
                  return month[0] + ' ' + date[0] + ' - ' + date[1] + yearSt + (hideTime ? '' : ' | ' + time);
                }
              }
            }
        } else {
            return null;
        }
    }
}
