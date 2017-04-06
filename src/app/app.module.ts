import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { DirectionsDirective } from './directions.directive';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBAlSY1v8xcO8_BHhBQq0d_4UMZcN_IPCE'
    })
  ],
  providers: [],
  declarations: [AppComponent, DirectionsDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
