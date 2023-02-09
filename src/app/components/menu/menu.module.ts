import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideMenuComponent} from "./components/side-menu/side-menu.component";
import {HeaderModule} from "../header/header.module";
import {AppRoutingModule} from "../../app-routing.module";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    AppRoutingModule,
  ],
  exports: [
    SideMenuComponent
  ]
})
export class MenuModule { }
