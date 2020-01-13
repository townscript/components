import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';


import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angularMaterial.module';
import { LayoutModule } from './modules/layout/layout.module';
import { TsLoginSignupComponent } from './modules/loginSignup/ts-login-signup/ts-login-signup.component';
import { LoginModalComponent } from './modules/loginSignup/ts-login-signup/login-modal/login-modal.component';
import { TsFormsModule } from '@townscript/elements';
import { CardsModule } from './modules/cards/cards.module';
import { PlaceService } from './modules/layout/components/ts-header/place.service';
import { SharedModule } from './shared/shared.module';
import { DataCollectorService, initializeDataCollector } from './shared/services/analytics/data-collector.service'
import { TsLoginSignupModule } from './modules/loginSignup/login-signup.module'
import { CitySelectionModalComponent } from './shared/components/city-selection/city-selection.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    TsFormsModule,
    FormsModule,
    LayoutModule,
    CardsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule,
    SharedModule,
    TsLoginSignupModule
  ],
  providers: [PlaceService, DataCollectorService],
  bootstrap: [AppComponent],
  entryComponents: [TsLoginSignupComponent,
    LoginModalComponent,
    CitySelectionModalComponent]
})
export class AppModule { }
