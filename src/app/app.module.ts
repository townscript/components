import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angularMaterial.module';
import { LayoutModule } from './modules/layout/layout.module';
import { FormsModule } from '@angular/forms';
import { TsLoginSignupComponent } from './modules/loginSignup/ts-login-signup/ts-login-signup.component';
import { LoginModalComponent } from './modules/loginSignup/ts-login-signup/login-modal/login-modal.component';
import { TsFormsModule } from '@townscript/elements';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { CardsModule } from './modules/cards/cards.module';
import { PlaceService } from './modules/layout/components/ts-header/place.service';

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
    RecaptchaModule
  ],
  providers: [PlaceService],
  bootstrap: [AppComponent],
  entryComponents: [TsLoginSignupComponent,
    LoginModalComponent
  ]
})
export class AppModule { }
