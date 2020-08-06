import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { AccordionModule } from 'primeng/accordion'; //accordion and accordion tab
import { MenuItem } from 'primeng/api'; //api
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AccordionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
