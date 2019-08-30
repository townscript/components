import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DateTime } from "luxon";
var RangeDatePipe = /** @class */ (function () {
    function RangeDatePipe() {
    }
    RangeDatePipe.prototype.transform = function (rangeDates, args) {
        if (rangeDates) {
            var date = rangeDates.map(function (d) { return DateTime.fromISO(d).toFormat('dd'); });
            var month = rangeDates.map(function (d) { return DateTime.fromISO(d).toFormat('MMM'); });
            var year = rangeDates.map(function (d) { return DateTime.fromISO(d).toFormat('yy'); });
            var time = DateTime.fromISO(rangeDates[0]).toFormat('hh:mm a');
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
    };
    RangeDatePipe = tslib_1.__decorate([
        Pipe({
            name: 'dateRange'
        })
    ], RangeDatePipe);
    return RangeDatePipe;
}());
export { RangeDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHMtZGF0ZS1yYW5nZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BpcGVzL3RzLWRhdGUtcmFuZ2UucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQztBQU1qQztJQUFBO0lBdUJBLENBQUM7SUF0QkcsaUNBQVMsR0FBVCxVQUFVLFVBQWUsRUFBRSxJQUFVO1FBQ2pDLElBQUksVUFBVSxFQUFFO1lBQ1osSUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7WUFDckUsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFuQyxDQUFtQyxDQUFDLENBQUM7WUFDdkUsSUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7WUFDckUsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNyQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNySDtpQkFBTTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNsRCxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2xEO3FCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ2hDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ3JGO3FCQUFNO29CQUNILE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNwRTthQUNKO1NBQ0o7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBdEJRLGFBQWE7UUFKekIsSUFBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLFdBQVc7U0FDcEIsQ0FBQztPQUVXLGFBQWEsQ0F1QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXZCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVRpbWUgfSBmcm9tIFwibHV4b25cIjtcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdkYXRlUmFuZ2UnXG59KVxuXG5leHBvcnQgY2xhc3MgUmFuZ2VEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybShyYW5nZURhdGVzOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAocmFuZ2VEYXRlcykge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHJhbmdlRGF0ZXMubWFwKGQgPT4gRGF0ZVRpbWUuZnJvbUlTTyhkKS50b0Zvcm1hdCgnZGQnKSk7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IHJhbmdlRGF0ZXMubWFwKGQgPT4gRGF0ZVRpbWUuZnJvbUlTTyhkKS50b0Zvcm1hdCgnTU1NJykpO1xuICAgICAgICAgICAgY29uc3QgeWVhciA9IHJhbmdlRGF0ZXMubWFwKGQgPT4gRGF0ZVRpbWUuZnJvbUlTTyhkKS50b0Zvcm1hdCgneXknKSk7XG4gICAgICAgICAgICBjb25zdCB0aW1lID0gRGF0ZVRpbWUuZnJvbUlTTyhyYW5nZURhdGVzWzBdKS50b0Zvcm1hdCgnaGg6bW0gYScpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coeWVhclswXSwgeWVhclsxXSk7XG4gICAgICAgICAgICBpZiAoeWVhclswXSAhPT0geWVhclsxXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb250aFswXSArICcgJyArIGRhdGVbMF0gKyBcIidcIiArIHllYXJbMF0gKyAnIC0gJyArIG1vbnRoWzFdICsgJyAnICsgZGF0ZVsxXSArIFwiJ1wiICsgeWVhclsxXSArICcgfCAnICsgdGltZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKChkYXRlWzBdID09PSBkYXRlWzFdKSAmJiAobW9udGhbMF0gPT09IG1vbnRoWzFdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW9udGhbMF0gKyAnICcgKyBkYXRlWzBdICsgJyB8ICcgKyB0aW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKG1vbnRoWzBdICE9PSBtb250aFsxXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoWzBdICsgJyAnICsgZGF0ZVswXSArICcgLSAnICsgbW9udGhbMV0gKyAnICcgKyBkYXRlWzFdICsgJyB8ICcgKyB0aW1lO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb250aFswXSArICcgJyArIGRhdGVbMF0gKyAnIC0gJyArIGRhdGVbMV0gKyAnIHwgJyArIHRpbWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59Il19