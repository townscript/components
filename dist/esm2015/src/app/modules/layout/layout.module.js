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
let LayoutModule = class LayoutModule {
};
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
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0b3duc2NyaXB0L2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJzcmMvYXBwL21vZHVsZXMvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seURBQXlELENBQUM7QUFDeEYsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsc0JBQXNCLEVBQ3RCLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3ZCLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQTBCekQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtDQUFJLENBQUE7QUFBaEIsWUFBWTtJQXhCeEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGVBQWU7U0FDaEI7UUFDRCxZQUFZLEVBQUU7WUFDWixpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLHNCQUFzQjtZQUN0QixhQUFhO1lBQ2IsZUFBZTtZQUNmLHdCQUF3QjtZQUN4QixzQkFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUCxpQkFBaUI7WUFDakIsaUJBQWlCO1lBQ2pCLHNCQUFzQjtTQUN2QjtRQUNELFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDO0tBQ2xELENBQUM7R0FDVyxZQUFZLENBQUk7U0FBaEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFJhbmdlRGF0ZVBpcGUgfSBmcm9tICcuLi9sYXlvdXQvY29tcG9uZW50cy90cy1saXN0aW5nLWNhcmQvdHMtZGF0ZS1yYW5nZS5waXBlJztcbmltcG9ydCB7XG4gIFRzSGVhZGVyQ29tcG9uZW50LFxuICBUc0Zvb3RlckNvbXBvbmVudCxcbiAgVHNMaXN0aW5nQ2FyZENvbXBvbmVudCxcbiAgU2VhcmNoQ29tcG9uZW50LFxuICBDaXR5U2VhcmNoUG9wdXBDb21wb25lbnQsXG4gIEhhbWJ1cmdlck1lbnVDb21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL2luZGV4JztcbmltcG9ydCB7IFRzRm9ybXNNb2R1bGUgfSBmcm9tICdAdG93bnNjcmlwdC9lbGVtZW50cyc7XG5pbXBvcnQgeyBUaW1lU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEhlYWRlclNlcnZpY2UgfSBmcm9tICcuL2NvbXBvbmVudHMvdHMtaGVhZGVyL3RzLWhlYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNYXRSaXBwbGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBUc0Zvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRzSGVhZGVyQ29tcG9uZW50LFxuICAgIFRzRm9vdGVyQ29tcG9uZW50LFxuICAgIFRzTGlzdGluZ0NhcmRDb21wb25lbnQsXG4gICAgUmFuZ2VEYXRlUGlwZSxcbiAgICBTZWFyY2hDb21wb25lbnQsXG4gICAgQ2l0eVNlYXJjaFBvcHVwQ29tcG9uZW50LFxuICAgIEhhbWJ1cmdlck1lbnVDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUc0hlYWRlckNvbXBvbmVudCxcbiAgICBUc0Zvb3RlckNvbXBvbmVudCxcbiAgICBUc0xpc3RpbmdDYXJkQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1RpbWVTZXJ2aWNlLCBEYXRlUGlwZSwgSGVhZGVyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTGF5b3V0TW9kdWxlIHsgfVxuIl19