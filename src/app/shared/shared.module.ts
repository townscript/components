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
import { SharedService } from './services/shared.service';
import { CitySelectionModalComponent } from './components/city-selection/city-selection.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CitySearchPopupComponent } from './components/city-search-popup/city-search-popup.component';
import { FormsModule } from '@angular/forms';
import { CountDownComponent } from './components/count-down/count-down.component';

@NgModule({
    declarations: [
        RangeDatePipe,
        FollowComponent,
        TextOverflowClampDirective,
        DataAnalyticsDirective,
        CitySelectionModalComponent,
        CitySearchPopupComponent,
        CountDownComponent
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        FormsModule
    ],
    exports: [
        FollowComponent,
        RangeDatePipe,
        TextOverflowClampDirective,
        DataAnalyticsDirective,
        CitySelectionModalComponent,
        CitySearchPopupComponent,
        CountDownComponent
    ],
    providers: [SharedService, TimeService, UserService, FollowService, DataCollectorService, UtilityService]
})
export class SharedModule { }
