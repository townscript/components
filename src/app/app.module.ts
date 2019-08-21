import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angularMaterial.module';
import { LayoutModule } from './modules/layout/layout.module';
import { FormsModule } from '@angular/forms';
import { TsLoginSignupComponent } from './modules/layout/components';
import { LoginModalComponent } from './modules/layout/components/ts-login-signup/login-modal/login-modal.component';
import { TsFormsModule } from '@townscript/elements';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

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
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [TsLoginSignupComponent,
    LoginModalComponent
  ]
})
export class AppModule { }
