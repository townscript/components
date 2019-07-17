import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimeService } from './services/time.service';


@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,
    ],
    providers: [TimeService]
})
export class SharedModule { }
