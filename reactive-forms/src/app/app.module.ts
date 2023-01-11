import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicModule } from './basic-form/basic-form.module';
import { FullModule } from './full-form/full-form.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BasicModule, FullModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
