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

    getOrdinalSuffix(day: number): string {
        const suffix = ["th", "st", "nd", "rd"];
        const v = day % 100;
        return day + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
    }

    getTimezoneAbbr(timeZone: string): string {
        try {
            const options: any = {
                timeZone: this.deprecatedVsNewTimeZones[timeZone] != undefined ?
                    this.deprecatedVsNewTimeZones[timeZone] : timeZone,
                timeZoneName: 'long'
            };
            
            const intl = new Intl.DateTimeFormat('en-gb', options);
            const sampleDate = intl.format(new Date());
            
            if (sampleDate.split(",")[1]) {
                const timeZoneName = sampleDate.split(",")[1].trim();
                let shortTz = "";
                timeZoneName.split(" ").filter(ele => {
                    shortTz += ele[0];
                });
                
                // Special cases
                if (timeZoneName && timeZoneName.toLowerCase().indexOf("singapore") > -1) {
                    return "SGT";
                } else if (timeZoneName && options.timeZone.indexOf("Jakarta") > -1) {
                    return "WIB";
                }
                
                return shortTz;
            }
        } catch (e) {
            // Fallback to original timezone
        }
        
        return timeZone;
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
              const recurrenceRule = args['recurrenceRule'];
              
              // Check if it's daily recurring event
              let isDaily = false;
              if(recurrenceRule.startsWith('RRULE:')) {
                const freq = recurrenceRule.split(';')[0].split('=')[1];
                isDaily = freq.toLowerCase() === 'daily';
              }
              
              // Handle daily events with existing logic
              if(isDaily) {
                let freqLabel = 'Daily';
                return  (hideTime || (endTime == undefined) ?  freqLabel : '' )
                  + (!hideTime && endTime == undefined ? ' | ' : '')
                  + (hideTime ?  '' : ( startTime + (endTime != undefined ? ' to ' + endTime : '' )) );
              } else {
                // For all other recurring events (weekly, monthly, custom dates, etc.)
                if(rangeDates && rangeDates.length > 0) {
                  const startDate = DateTime.fromISO(rangeDates[0], { zone: eventTimeZone });
                  const dayName = startDate.toFormat('ccc'); // Sat
                  const day = startDate.toFormat('d');
                  const dateWithOrdinal = this.getOrdinalSuffix(parseInt(day)); // 7th
                  const time = startDate.toFormat('hh:mm a'); // 05:00 PM
                  
                  // Get timezone abbreviation
                  const timezoneAbbr = this.getTimezoneAbbr(eventTimeZone);
                  
                  return `${dayName} ${dateWithOrdinal}, ${time} (${timezoneAbbr}) onwards | Multiple Dates`;
                } else {
                  return 'Multiple Dates';
                }
              }

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
