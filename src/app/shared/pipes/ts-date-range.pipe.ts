import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
    name: 'dateRange'
})
export class RangeDatePipe implements PipeTransform {

    days: any = {'SU':'Sun','MO': 'Mon','TU': 'Tue','WE': 'Wed','TH': 'Thu','FR': 'Fri','SA': 'Sat'};

    deprecatedVsNewTimeZones : any = {
    'Australia/ACT':'Australia/Sydney',
    'Australia/LHI':'Australia/Lord_Howe',
    'Australia/North':'Australia/Darwin',
    'Australia/NSW':'Australia/Sydney',
    'Australia/Queensland':'Australia/Brisbane',
    'Australia/South':'Australia/Adelaide',
    'Australia/Tasmania':'Australia/Hobart',
    'Australia/Victoria':'Australia/Melbourne',
    'Australia/West':'Australia/Perth',
    'Brazil/Acre':'America/Rio_Branco',
    'Brazil/DeNoronha':'America/Noronha',
    'Brazil/East':'America/Sao_Paulo',
    'Brazil/West':'America/Manaus',
    'Canada/Atlantic':'America/Halifax',
    'Canada/Central':'America/Winnipeg',
    'Canada/Eastern':'America/Toronto',
    'Canada/Mountain':'America/Edmonton',
    'Canada/Newfoundland':'America/St_Johns',
    'Canada/Pacific':'America/Vancouver',
    'Canada/Saskatchewan':'America/Regina',
    'Canada/Yukon':'America/Whitehorse',
    'CET':'Europe/Paris.',
    'Chile/Continental':'America/Santiago',
    'Chile/EasterIsland':'Pacific/Easter',
    'CST6CDT':'America/Chicago.',
    'Cuba':'America/Havana',
    'EET':'Europe/Sofia.',
    'Egypt':'Africa/Cairo',
    'Eire':'Europe/Dublin',
    'EST':'America/Cancun.',
    'EST5EDT':'America/New_York.',
    'Etc/Greenwich':'Etc/GMT',
    'Etc/Universal':'Etc/UTC',
    'Etc/Zulu':'Etc/UTC',
    'GB':'Europe/London',
    'GB-Eire':'Europe/London',
    'GMT+0':'Etc/GMT',
    'GMT0':'Etc/GMT',
    'GMT−0':'Etc/GMT',
    'Greenwich':'Etc/GMT',
    'Hongkong':'Asia/Hong_Kong',
    'HST':'Pacific/Honolulu.',
    'Iceland':'Atlantic/Reykjavik',
    'Iran':'Asia/Tehran',
    'Israel':'Asia/Jerusalem',
    'Jamaica':'America/Jamaica',
    'Japan':'Asia/Tokyo',
    'Kwajalein':'Pacific/Kwajalein',
    'Libya':'Africa/Tripoli',
    'MET':'Europe/Paris.',
    'Mexico/BajaNorte':'America/Tijuana',
    'Mexico/BajaSur':'America/Mazatlan',
    'Mexico/General':'America/Mexico_City',
    'MST':'America/Phoenix.',
    'MST7MDT':'America/Denver.',
    'Navajo':'America/Denver',
    'NZ':'Pacific/Auckland',
    'NZ-CHAT':'Pacific/Chatham',
    'Poland':'Europe/Warsaw',
    'Portugal':'Europe/Lisbon',
    'PRC':'Asia/Shanghai',
    'PST8PDT':'America/Los_Angeles.',
    'ROC':'Asia/Taipei',
    'ROK':'Asia/Seoul',
    'Singapore':'Asia/Singapore',
    'Turkey':'Europe/Istanbul',
    'UCT':'Etc/UCT',
    'Universal':'Etc/UTC',
    'US/Alaska':'America/Anchorage',
    'US/Aleutian':'America/Adak',
    'US/Arizona':'America/Phoenix',
    'US/Central':'America/Chicago',
    'US/Eastern':'America/New_York',
    'US/East-Indiana':'America/Indiana/Indianapolis',
    'US/Hawaii':'Pacific/Honolulu',
    'US/Indiana-Starke':'America/Indiana/Knox',
    'US/Michigan':'America/Detroit',
    'US/Mountain':'America/Denver',
    'US/Pacific':'America/Los_Angeles',
    'US/Pacific-New':'America/Los_Angeles',
    'US/Samoa':'Pacific/Pago_Pago',
    'WET':'Europe/Lisbon.',
    'W-SU':'Europe/Moscow',
    'Zulu':'Etc/UTC'
    };

    transform = (rangeDates: any, eventTimeZone: any, isRecurrent?: any ,args?: any): any => {

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
              return  freqLabel + ' | ' + startTime;
            } else {
              let local = DateTime.local().setZone(eventTimeZone);
              // for other events or fallback
              const date = rangeDates.map(d => DateTime.fromISO(d , { zone: eventTimeZone }).toFormat('dd'));
              const month = rangeDates.map(d => DateTime.fromISO(d, { zone: eventTimeZone }).toFormat('MMM'));
              const year = rangeDates.map(d => DateTime.fromISO(d, { zone: eventTimeZone }).toFormat('yy'));
              const time = DateTime.fromISO(rangeDates[0], { zone: eventTimeZone }).toFormat('hh:mm a');

              const currYear = new Date().getUTCFullYear()% 100;
              if (year[0] !== year[1]) {
                return month[0] + ' ' + date[0] + '\'' + year[0] + ' - ' + month[1] + ' ' + date[1] + '\'' + year[1] + ' | ' + time;
              } else {
                const yearSt = (year[0] - currYear) != 0 ? " '"+year[0] : '';
                if ((date[0] === date[1]) && (month[0] === month[1])) {
                  return month[0] + ' ' + date[0] + yearSt +' | ' + time;
                } else if ((month[0] !== month[1])) {
                  return month[0] + ' ' + date[0] + yearSt + ' - ' + month[1] + ' ' + date[1] + yearSt + ' | ' + time;
                } else {
                  return month[0] + ' ' + date[0] + ' - ' + date[1] + yearSt + ' | ' + time;
                }
              }
            }
        } else {
            return null;
        }
    }
}
