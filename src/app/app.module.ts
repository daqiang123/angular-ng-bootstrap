import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/*******************************************************************************
 * 版权所有（c）2018，2019，西安大华时代网络科技有限公司。保留所有权利。
 ******************************************************************************/

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
