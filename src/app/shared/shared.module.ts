import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FollowComponent } from './components/follow/follow.component';
import { RangeDatePipe } from './pipes/ts-date-range.pipe';
import { TextOverflowClampDirective } from './pipes/text-overflow.directive';
import { TimeService } from './services/time.service';
import { UserService } from './services/user-service';
import { FollowService } from './services/follow.service';
import { DataAnalyticsDirective } from './directives/analytics/data-analytics.directive';
import { DataCollectorService } from './services/analytics/data-collector.service';
import { UtilityService } from './services/utilities.service';


@NgModule({
    declarations: [
        RangeDatePipe,
        FollowComponent,
        TextOverflowClampDirective,
        DataAnalyticsDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FollowComponent,
        RangeDatePipe,
        TextOverflowClampDirective,
        DataAnalyticsDirective
    ],
    providers: [TimeService, UserService, FollowService, DataCollectorService, UtilityService]
})
export class SharedModule { }
