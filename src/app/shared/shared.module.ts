import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeService } from './services/time.service';
import { ApiService } from './services/api-service';
import { UserService } from './services/user-service';
import { RangeDatePipe } from './pipes/ts-date-range.pipe';
import { FollowComponent } from './components/follow/follow.component';
import { FollowService } from './services/follow.service';
import { TextOverflowClampDirective } from './pipes/text-overflow.directive';

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
    providers: [TimeService, ApiService, UserService, FollowService]
})
export class SharedModule { }
