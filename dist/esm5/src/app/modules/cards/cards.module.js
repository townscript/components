import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsListingCardComponent, RangeDatePipe, ShareEventModalComponent, TsCardSkeletonComponent } from './index';
import { BrowserService } from '../../core';
import { TsFormsModule } from '@townscript/elements';
var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
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
    return CardsModule;
}());
export { CardsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRvd25zY3JpcHQvY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXJkcy9jYXJkcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxhQUFhLEVBQUUsd0JBQXdCLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDbkgsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUF3QnJEO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFyQnZCLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxZQUFZO2dCQUNaLGFBQWE7YUFDaEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysc0JBQXNCO2dCQUN0QixhQUFhO2dCQUNiLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2FBQzFCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHNCQUFzQjtnQkFDdEIsYUFBYTtnQkFDYix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjthQUMxQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxjQUFjO2FBQ2pCO1NBQ0osQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7U0FBZixXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBUc0xpc3RpbmdDYXJkQ29tcG9uZW50LCBSYW5nZURhdGVQaXBlLCBTaGFyZUV2ZW50TW9kYWxDb21wb25lbnQsIFRzQ2FyZFNrZWxldG9uQ29tcG9uZW50IH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeyBCcm93c2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuaW1wb3J0IHsgVHNGb3Jtc01vZHVsZSB9IGZyb20gJ0B0b3duc2NyaXB0L2VsZW1lbnRzJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBUc0Zvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVHNMaXN0aW5nQ2FyZENvbXBvbmVudCxcbiAgICAgICAgUmFuZ2VEYXRlUGlwZSxcbiAgICAgICAgU2hhcmVFdmVudE1vZGFsQ29tcG9uZW50LFxuICAgICAgICBUc0NhcmRTa2VsZXRvbkNvbXBvbmVudFxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBUc0xpc3RpbmdDYXJkQ29tcG9uZW50LFxuICAgICAgICBSYW5nZURhdGVQaXBlLFxuICAgICAgICBTaGFyZUV2ZW50TW9kYWxDb21wb25lbnQsXG4gICAgICAgIFRzQ2FyZFNrZWxldG9uQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQnJvd3NlclNlcnZpY2VcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIENhcmRzTW9kdWxlIHsgfVxuIl19