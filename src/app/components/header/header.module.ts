import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderMainComponent} from "./components/header-main/header-main.component";
import {AppRoutingModule} from "../../app-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    HeaderMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    HeaderMainComponent
  ]
})
export class HeaderModule { }
