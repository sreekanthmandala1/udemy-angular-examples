import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SecondtimeComponent } from './secondtime/secondtime.component';
import { AllBindingsComponent } from './all-bindings/all-bindings.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SecondtimeComponent,
    AllBindingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
