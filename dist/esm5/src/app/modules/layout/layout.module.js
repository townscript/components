import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RangeDatePipe } from '../layout/components/ts-listing-card/ts-date-range.pipe';
import { TsHeaderComponent, TsFooterComponent, TsListingCardComponent, SearchComponent, CitySearchPopupComponent, HamburgerMenuComponent } from './components/index';
import { TsFormsModule } from '@townscript/elements';
import { TimeService } from '../../shared/index';
import { FormsModule } from '@angular/forms';
import { HeaderService } from './components/ts-header/ts-header.service';
import { HttpClientModule } from '@angular/common/http';
import { MatRippleModule } from '@angular/material/core';
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                TsFormsModule,
                HttpClientModule,
                MatRippleModule
            ],
            declarations: [
                TsHeaderComponent,
                TsFooterComponent,
                TsListingCardComponent,
                RangeDatePipe,
                SearchComponent,
                CitySearchPopupComponent,
                HamburgerMenuComponent,
            ],
            exports: [
                TsHeaderComponent,
                TsFooterComponent,
                TsListingCardComponent
            ],
            providers: [TimeService, DatePipe, HeaderService]
        })
    ], LayoutModule);
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEYsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3ZCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQTBCekQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUF4QnhCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsYUFBYTtnQkFDYixnQkFBZ0I7Z0JBQ2hCLGVBQWU7YUFDaEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osaUJBQWlCO2dCQUNqQixpQkFBaUI7Z0JBQ2pCLHNCQUFzQjtnQkFDdEIsYUFBYTtnQkFDYixlQUFlO2dCQUNmLHdCQUF3QjtnQkFDeEIsc0JBQXNCO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQixzQkFBc0I7YUFDdkI7WUFDRCxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQztTQUNsRCxDQUFDO09BQ1csWUFBWSxDQUFJO0lBQUQsbUJBQUM7Q0FBQSxBQUE3QixJQUE2QjtTQUFoQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmFuZ2VEYXRlUGlwZSB9IGZyb20gJy4uL2xheW91dC9jb21wb25lbnRzL3RzLWxpc3RpbmctY2FyZC90cy1kYXRlLXJhbmdlLnBpcGUnO1xuaW1wb3J0IHtcbiAgVHNIZWFkZXJDb21wb25lbnQsXG4gIFRzRm9vdGVyQ29tcG9uZW50LFxuICBUc0xpc3RpbmdDYXJkQ29tcG9uZW50LFxuICBTZWFyY2hDb21wb25lbnQsXG4gIENpdHlTZWFyY2hQb3B1cENvbXBvbmVudCxcbiAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudFxufSBmcm9tICcuL2NvbXBvbmVudHMvaW5kZXgnO1xuaW1wb3J0IHsgVHNGb3Jtc01vZHVsZSB9IGZyb20gJ0B0b3duc2NyaXB0L2VsZW1lbnRzJztcbmltcG9ydCB7IFRpbWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2luZGV4JztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSGVhZGVyU2VydmljZSB9IGZyb20gJy4vY29tcG9uZW50cy90cy1oZWFkZXIvdHMtaGVhZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1hdFJpcHBsZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFRzRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBNYXRSaXBwbGVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVHNIZWFkZXJDb21wb25lbnQsXG4gICAgVHNGb290ZXJDb21wb25lbnQsXG4gICAgVHNMaXN0aW5nQ2FyZENvbXBvbmVudCxcbiAgICBSYW5nZURhdGVQaXBlLFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBDaXR5U2VhcmNoUG9wdXBDb21wb25lbnQsXG4gICAgSGFtYnVyZ2VyTWVudUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRzSGVhZGVyQ29tcG9uZW50LFxuICAgIFRzRm9vdGVyQ29tcG9uZW50LFxuICAgIFRzTGlzdGluZ0NhcmRDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbVGltZVNlcnZpY2UsIERhdGVQaXBlLCBIZWFkZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUgeyB9XG4iXX0=