import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserService } from '../../core/browser.service';
import { TsFormsModule } from '@townscript/elements';
import { TsListingCardComponent } from './ts-listing-card/ts-listing-card.component';
import { ShareEventModalComponent } from './ts-listing-card/share-event-modal/share-event-modal.component';
import { TsCardSkeletonComponent } from './ts-card-skeleton/ts-card-skeleton.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxTextOverflowClampModule } from 'ngx-text-overflow-clamp';

@NgModule({
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
export class CardsModule { }
