/*******************************************************************************
 * 版权所有（c）2018，2019，西安大华时代网络科技有限公司。保留所有权利。
 ******************************************************************************/

 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgbdAccordionBasic } from './accordion-basic';
import { NgbdAccordionStatic } from './accordion-static';

import { NgbdAlertBasic } from './alert-basic';

import { NgbdButtonsCheckbox } from './buttons-checkbox';

import { NgbdCarouselBasic } from './carousel-basic';

const routes: Routes = [
  { path: 'accordion-basic', component: NgbdAccordionBasic },
  { path: 'alert-basic', component: NgbdAlertBasic },
  { path: 'buttons-checkbox', component: NgbdButtonsCheckbox },
  { path: 'carousel-basic', component: NgbdCarouselBasic }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
