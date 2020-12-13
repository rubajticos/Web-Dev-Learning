import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './shared/alert/alert.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './component/core.module';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './component/store/app.reducer';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    SharedModule,
    CoreModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent],
  // providers: [LoggingService],
})
export class AppModule {}
