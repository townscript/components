import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserService } from '../../core/browser.service';
import { TsFormsModule } from '@townscript/elements';
import { TsListingCardComponent } from './ts-listing-card/ts-listing-card.component';
import { ShareEventModalComponent } from './ts-listing-card/share-event-modal/share-event-modal.component';
import { TsCardSkeletonComponent } from './ts-card-skeleton/ts-card-skeleton.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxTextOverflowClampModule } from 'ngx-text-overflow-clamp';
let CardsModule = class CardsModule {
};
CardsModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            TsFormsModule,
            SharedModule,
            NgxTextOverflowClampModule
        ],
        declarations: [
            TsListingCardComponent,
            ShareEventModalComponent,
            TsCardSkeletonComponent
        ],
        exports: [
            TsFormsModule,
            TsListingCardComponent,
            ShareEventModalComponent,
            TsCardSkeletonComponent
        ],
        providers: [
            BrowserService
        ]
    })
], CardsModule);
export { CardsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXJkcy9jYXJkcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDckYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDM0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDeEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBd0JyRSxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0NBQUksQ0FBQTtBQUFmLFdBQVc7SUF0QnZCLFFBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLFlBQVk7WUFDWixhQUFhO1lBQ2IsWUFBWTtZQUNaLDBCQUEwQjtTQUM3QjtRQUNELFlBQVksRUFBRTtZQUNWLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsdUJBQXVCO1NBQzFCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIsdUJBQXVCO1NBQzFCO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsY0FBYztTQUNqQjtLQUNKLENBQUM7R0FDVyxXQUFXLENBQUk7U0FBZixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvYnJvd3Nlci5zZXJ2aWNlJztcbmltcG9ydCB7IFRzRm9ybXNNb2R1bGUgfSBmcm9tICdAdG93bnNjcmlwdC9lbGVtZW50cyc7XG5pbXBvcnQgeyBUc0xpc3RpbmdDYXJkQ29tcG9uZW50IH0gZnJvbSAnLi90cy1saXN0aW5nLWNhcmQvdHMtbGlzdGluZy1jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZUV2ZW50TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3RzLWxpc3RpbmctY2FyZC9zaGFyZS1ldmVudC1tb2RhbC9zaGFyZS1ldmVudC1tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHNDYXJkU2tlbGV0b25Db21wb25lbnQgfSBmcm9tICcuL3RzLWNhcmQtc2tlbGV0b24vdHMtY2FyZC1za2VsZXRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgTmd4VGV4dE92ZXJmbG93Q2xhbXBNb2R1bGUgfSBmcm9tICduZ3gtdGV4dC1vdmVyZmxvdy1jbGFtcCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFRzRm9ybXNNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcbiAgICAgICAgTmd4VGV4dE92ZXJmbG93Q2xhbXBNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUc0xpc3RpbmdDYXJkQ29tcG9uZW50LFxuICAgICAgICBTaGFyZUV2ZW50TW9kYWxDb21wb25lbnQsXG4gICAgICAgIFRzQ2FyZFNrZWxldG9uQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFRzRm9ybXNNb2R1bGUsXG4gICAgICAgIFRzTGlzdGluZ0NhcmRDb21wb25lbnQsXG4gICAgICAgIFNoYXJlRXZlbnRNb2RhbENvbXBvbmVudCxcbiAgICAgICAgVHNDYXJkU2tlbGV0b25Db21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBCcm93c2VyU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZHNNb2R1bGUgeyB9XG4iXX0=