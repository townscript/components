import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserService } from '../../core/browser.service';
import { TsFormsModule } from '@townscript/elements';
import { TsListingCardComponent } from './ts-listing-card/ts-listing-card.component';
import { RangeDatePipe } from './ts-listing-card/ts-date-range.pipe';
import { ShareEventModalComponent } from './ts-listing-card/share-event-modal/share-event-modal.component';
import { TsCardSkeletonComponent } from './ts-card-skeleton/ts-card-skeleton.component';

@NgModule({
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
        TsFormsModule,
        TsListingCardComponent,
        RangeDatePipe,
        ShareEventModalComponent,
        TsCardSkeletonComponent
    ],
    providers: [
        BrowserService
    ]
})
export class CardsModule { }
