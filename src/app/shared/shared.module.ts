import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TimeService } from './services/time.service';
import { ApiService } from './services/api-service';
import { UserService } from './services/user-service';

@NgModule({
    declarations: [

    ],
    imports: [
    ],
    providers: [TimeService, ApiService, UserService]
})
export class SharedModule { }
