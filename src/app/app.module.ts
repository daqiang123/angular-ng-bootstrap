import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdAccordionBasic } from './accordion-basic';
import { NgbdAccordionStatic } from './accordion-static';

import { NgbdAlertBasic } from './alert-basic';

import { NgbdButtonsCheckbox } from './buttons-checkbox';

import { NgbdCarouselBasic } from './carousel-basic';

@NgModule({
  declarations: [
    AppComponent,
    NgbdAccordionBasic,
    NgbdAccordionStatic,
    NgbdAlertBasic,
    NgbdButtonsCheckbox,
    NgbdCarouselBasic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
