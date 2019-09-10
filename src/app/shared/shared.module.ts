import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeService } from './services/time.service';
import { ApiService } from './services/api-service';
import { UserService } from './services/user-service';
import { RangeDatePipe } from './pipes/ts-date-range.pipe';
import { FollowComponent } from './components/follow/follow.component';
import { FollowService } from './services/follow.service';

@NgModule({
    declarations: [
        RangeDatePipe,
        FollowComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FollowComponent,
        RangeDatePipe
    ],
    providers: [TimeService, ApiService, UserService, FollowService]
})
export class SharedModule { }
