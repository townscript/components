import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TsFormsModule } from '@townscript/elements';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BrowserService } from '../../core/browser.service';
import { SharedModule } from '../../shared/shared.module';
import { TsListingCardComponent } from './ts-listing-card/ts-listing-card.component';
import { ShareEventModalComponent } from './ts-listing-card/share-event-modal/share-event-modal.component';
import { TsCardSkeletonComponent } from './ts-card-skeleton/ts-card-skeleton.component';
import { MatTooltipModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        TsFormsModule,
        SharedModule,
        MatTooltipModule,
        LazyLoadImageModule
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
    entryComponents: [
        ShareEventModalComponent
    ],
    providers: [
        BrowserService
    ]
})
export class CardsModule { }
