import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RangeDatePipe } from '../layout/components/ts-listing-card/ts-date-range.pipe';
import { TsHeaderComponent, TsFooterComponent, TsListingCardComponent, SearchComponent } from './components/index';
import { TsFormsModule } from '@townscript/elements';
import { TimeService } from '../../shared/index';
import { FormsModule } from '@angular/forms';
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                TsFormsModule
            ],
            declarations: [
                TsHeaderComponent,
                TsFooterComponent,
                TsListingCardComponent,
                RangeDatePipe,
                SearchComponent
            ],
            exports: [
                TsHeaderComponent,
                TsFooterComponent,
                TsListingCardComponent
            ],
            providers: [TimeService, DatePipe]
        })
    ], LayoutModule);
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEYsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDaEIsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXNCN0M7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFwQnhCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsYUFBYTthQUNkO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQixzQkFBc0I7Z0JBQ3RCLGFBQWE7Z0JBQ2IsZUFBZTthQUNoQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxpQkFBaUI7Z0JBQ2pCLGlCQUFpQjtnQkFDakIsc0JBQXNCO2FBQ3ZCO1lBQ0QsU0FBUyxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQztTQUNuQyxDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtTQUFoQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmFuZ2VEYXRlUGlwZSB9IGZyb20gJy4uL2xheW91dC9jb21wb25lbnRzL3RzLWxpc3RpbmctY2FyZC90cy1kYXRlLXJhbmdlLnBpcGUnO1xuaW1wb3J0IHtcbiAgVHNIZWFkZXJDb21wb25lbnQsXG4gIFRzRm9vdGVyQ29tcG9uZW50LFxuICBUc0xpc3RpbmdDYXJkQ29tcG9uZW50LFxuICBTZWFyY2hDb21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IFRzRm9ybXNNb2R1bGUgfSBmcm9tICdAdG93bnNjcmlwdC9lbGVtZW50cyc7XG5pbXBvcnQgeyBUaW1lU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBUc0Zvcm1zTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRzSGVhZGVyQ29tcG9uZW50LFxuICAgIFRzRm9vdGVyQ29tcG9uZW50LFxuICAgIFRzTGlzdGluZ0NhcmRDb21wb25lbnQsXG4gICAgUmFuZ2VEYXRlUGlwZSxcbiAgICBTZWFyY2hDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRzSGVhZGVyQ29tcG9uZW50LFxuICAgIFRzRm9vdGVyQ29tcG9uZW50LFxuICAgIFRzTGlzdGluZ0NhcmRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVGltZVNlcnZpY2UsIERhdGVQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUgeyB9XG4iXX0=