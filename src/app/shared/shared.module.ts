import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowComponent } from './components/follow/follow.component';
import { RangeDatePipe } from './pipes/ts-date-range.pipe';
import { TextOverflowClampDirective } from './pipes/text-overflow.directive';
import { TimeService } from './services/time.service';
import { UserService } from './services/user-service';
import { FollowService } from './services/follow.service';


@NgModule({
    declarations: [
        RangeDatePipe,
        FollowComponent,
        TextOverflowClampDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FollowComponent,
        RangeDatePipe,
        TextOverflowClampDirective
    ],
    providers: [TimeService, UserService, FollowService]
})
export class SharedModule { }
