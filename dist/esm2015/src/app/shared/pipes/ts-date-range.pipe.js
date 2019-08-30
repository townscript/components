import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DateTime } from "luxon";
let RangeDatePipe = class RangeDatePipe {
    transform(rangeDates, args) {
        if (rangeDates) {
            const date = rangeDates.map(d => DateTime.fromISO(d).toFormat('dd'));
            const month = rangeDates.map(d => DateTime.fromISO(d).toFormat('MMM'));
            const year = rangeDates.map(d => DateTime.fromISO(d).toFormat('yy'));
            const time = DateTime.fromISO(rangeDates[0]).toFormat('hh:mm a');
            console.log(year[0], year[1]);
            if (year[0] !== year[1]) {
                return month[0] + ' ' + date[0] + "'" + year[0] + ' - ' + month[1] + ' ' + date[1] + "'" + year[1] + ' | ' + time;
            }
            else {
                if ((date[0] === date[1]) && (month[0] === month[1])) {
                    return month[0] + ' ' + date[0] + ' | ' + time;
                }
                else if ((month[0] !== month[1])) {
                    return month[0] + ' ' + date[0] + ' - ' + month[1] + ' ' + date[1] + ' | ' + time;
                }
                else {
                    return month[0] + ' ' + date[0] + ' - ' + date[1] + ' | ' + time;
                }
            }
        }
        else {
            return null;
        }
    }
};
RangeDatePipe = tslib_1.__decorate([
    Pipe({
        name: 'dateRange'
    })
], RangeDatePipe);
export { RangeDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtZGF0ZS1yYW5nZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BpcGVzL3RzLWRhdGUtcmFuZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQU1qQyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBQ3RCLFNBQVMsQ0FBQyxVQUFlLEVBQUUsSUFBVTtRQUNqQyxJQUFJLFVBQVUsRUFBRTtZQUNaLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDckIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDckg7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDbEQsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNsRDtxQkFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNoQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNyRjtxQkFBTTtvQkFDSCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQztpQkFDcEU7YUFDSjtTQUNKO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUF2QlksYUFBYTtJQUp6QixJQUFJLENBQUM7UUFDRixJQUFJLEVBQUUsV0FBVztLQUNwQixDQUFDO0dBRVcsYUFBYSxDQXVCekI7U0F2QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVUaW1lIH0gZnJvbSBcImx1eG9uXCI7XG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnZGF0ZVJhbmdlJ1xufSlcblxuZXhwb3J0IGNsYXNzIFJhbmdlRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICB0cmFuc2Zvcm0ocmFuZ2VEYXRlczogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICAgICAgaWYgKHJhbmdlRGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSByYW5nZURhdGVzLm1hcChkID0+IERhdGVUaW1lLmZyb21JU08oZCkudG9Gb3JtYXQoJ2RkJykpO1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSByYW5nZURhdGVzLm1hcChkID0+IERhdGVUaW1lLmZyb21JU08oZCkudG9Gb3JtYXQoJ01NTScpKTtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSByYW5nZURhdGVzLm1hcChkID0+IERhdGVUaW1lLmZyb21JU08oZCkudG9Gb3JtYXQoJ3l5JykpO1xuICAgICAgICAgICAgY29uc3QgdGltZSA9IERhdGVUaW1lLmZyb21JU08ocmFuZ2VEYXRlc1swXSkudG9Gb3JtYXQoJ2hoOm1tIGEnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHllYXJbMF0sIHllYXJbMV0pO1xuICAgICAgICAgICAgaWYgKHllYXJbMF0gIT09IHllYXJbMV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhbMF0gKyAnICcgKyBkYXRlWzBdICsgXCInXCIgKyB5ZWFyWzBdICsgJyAtICcgKyBtb250aFsxXSArICcgJyArIGRhdGVbMV0gKyBcIidcIiArIHllYXJbMV0gKyAnIHwgJyArIHRpbWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgoZGF0ZVswXSA9PT0gZGF0ZVsxXSkgJiYgKG1vbnRoWzBdID09PSBtb250aFsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoWzBdICsgJyAnICsgZGF0ZVswXSArICcgfCAnICsgdGltZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChtb250aFswXSAhPT0gbW9udGhbMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250aFswXSArICcgJyArIGRhdGVbMF0gKyAnIC0gJyArIG1vbnRoWzFdICsgJyAnICsgZGF0ZVsxXSArICcgfCAnICsgdGltZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhbMF0gKyAnICcgKyBkYXRlWzBdICsgJyAtICcgKyBkYXRlWzFdICsgJyB8ICcgKyB0aW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==