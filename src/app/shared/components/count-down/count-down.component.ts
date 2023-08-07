import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ts-countdown',
    template: '<span>{{counterText}}</span>'
})
export class CountDownComponent implements OnInit {

    @Input() date: Date;
    counterText: string;
    @Output() reached: EventEmitter<boolean> = new EventEmitter();
    wasReached = false;

    constructor() {
    }

    dhms(t) {
        let days, hours, minutes, seconds;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;

        const retArr: string[] = [];
        if (days > 0) {
            retArr.push(days + ' days');
            retArr.push(hours + ' hours');
        } else if (hours > 0) {
            retArr.push(hours + ' hours');
            retArr.push(minutes + ' mins');
        } else if (minutes > 0) {
            retArr.push(minutes + ' mins');
            retArr.push(seconds + ' secs');
        } else {
            retArr.push(seconds + ' secs');
        }

        return retArr.join(' ');
    }


    ngOnInit() {

        setInterval(() => {
            if (this.wasReached) {
                return;
            }

            const now = new Date();
            const dateDifference = this.date.getTime() - now.getTime();

            if ((dateDifference < 1000 && dateDifference > 0) || dateDifference < 0 && !this.wasReached) {
                this.wasReached = true;
                this.reached.emit(this.wasReached);
                return;
            }

            const unixSecTime = Math.floor((this.date.getTime() - new Date().getTime()) / 1000);
            this.counterText = this.dhms(unixSecTime);
        }, 1000);
    }
}
