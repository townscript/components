import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RangeDatePipe, TextOverflowClampDirective } from './pipes/index';
import { FollowComponent } from './components/follow/follow.component';
import {
    TimeService,
    UserService,
    FollowService
} from './services/index';

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
