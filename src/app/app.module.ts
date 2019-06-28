import { DtpSharedUtilsModule } from './../../projects/dtp-shared-utils/src/lib/dtp-shared-utils.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DtpSharedUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
