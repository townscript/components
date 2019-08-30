import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimeService } from './services/time.service';
import { ApiService } from './services/api-service';
import { UserService } from './services/user-service';
import { RangeDatePipe } from './pipes/ts-date-range.pipe';

@NgModule({
    declarations: [RangeDatePipe
    ],
    imports: [
    ],
    exports: [RangeDatePipe],
    providers: [TimeService, ApiService, UserService]
})
export class SharedModule { }
