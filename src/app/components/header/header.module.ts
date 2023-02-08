import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderMainComponent} from "./components/header-main/header-main.component";
import {MaterialModule} from "../../material/material.module";
import {AppRoutingModule} from "../../app-routing.module";


@NgModule({
  declarations: [
    HeaderMainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    HeaderMainComponent
  ]
})
export class HeaderModule { }
