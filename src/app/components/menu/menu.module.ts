import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideMenuComponent} from "./components/side-menu/side-menu.component";
import {MaterialModule} from "../../material/material.module";
import {HeaderModule} from "../header/header.module";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeaderModule,
    AppRoutingModule,
  ],
  exports: [
    SideMenuComponent
  ]
})
export class MenuModule { }
