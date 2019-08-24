import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsListingCardComponent, RangeDatePipe, ShareEventModalComponent, TsCardSkeletonComponent } from './index';
import { BrowserService } from '../../core';
import { TsFormsModule } from '@townscript/elements';
let CardsModule = class CardsModule {
};
CardsModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            TsFormsModule
        ],
        declarations: [
            TsListingCardComponent,
            RangeDatePipe,
            ShareEventModalComponent,
            TsCardSkeletonComponent
        ],
        exports: [
            TsListingCardComponent,
            RangeDatePipe,
            ShareEventModalComponent,
            TsCardSkeletonComponent
        ],
        providers: [
            BrowserService
        ]
    })
], CardsModule);
export { CardsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXJkcy9jYXJkcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxhQUFhLEVBQUUsd0JBQXdCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbkgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUF3QnJELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FBSSxDQUFBO0FBQWYsV0FBVztJQXJCdkIsUUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFO1lBQ0wsWUFBWTtZQUNaLGFBQWE7U0FDaEI7UUFDRCxZQUFZLEVBQUU7WUFDVixzQkFBc0I7WUFDdEIsYUFBYTtZQUNiLHdCQUF3QjtZQUN4Qix1QkFBdUI7U0FDMUI7UUFDRCxPQUFPLEVBQUU7WUFDTCxzQkFBc0I7WUFDdEIsYUFBYTtZQUNiLHdCQUF3QjtZQUN4Qix1QkFBdUI7U0FDMUI7UUFDRCxTQUFTLEVBQUU7WUFDUCxjQUFjO1NBQ2pCO0tBQ0osQ0FBQztHQUNXLFdBQVcsQ0FBSTtTQUFmLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFRzTGlzdGluZ0NhcmRDb21wb25lbnQsIFJhbmdlRGF0ZVBpcGUsIFNoYXJlRXZlbnRNb2RhbENvbXBvbmVudCwgVHNDYXJkU2tlbGV0b25Db21wb25lbnQgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB7IEJyb3dzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5pbXBvcnQgeyBUc0Zvcm1zTW9kdWxlIH0gZnJvbSAnQHRvd25zY3JpcHQvZWxlbWVudHMnO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIFRzRm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBUc0xpc3RpbmdDYXJkQ29tcG9uZW50LFxuICAgICAgICBSYW5nZURhdGVQaXBlLFxuICAgICAgICBTaGFyZUV2ZW50TW9kYWxDb21wb25lbnQsXG4gICAgICAgIFRzQ2FyZFNrZWxldG9uQ29tcG9uZW50XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFRzTGlzdGluZ0NhcmRDb21wb25lbnQsXG4gICAgICAgIFJhbmdlRGF0ZVBpcGUsXG4gICAgICAgIFNoYXJlRXZlbnRNb2RhbENvbXBvbmVudCxcbiAgICAgICAgVHNDYXJkU2tlbGV0b25Db21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBCcm93c2VyU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZHNNb2R1bGUgeyB9XG4iXX0=