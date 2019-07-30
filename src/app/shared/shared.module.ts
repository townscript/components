import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimeService } from './services/time.service';
import { ApiService } from './services/api-service';


@NgModule({
    declarations: [

    ],
    imports: [
        BrowserModule,
    ],
    providers: [TimeService, ApiService]
})
export class SharedModule { }
