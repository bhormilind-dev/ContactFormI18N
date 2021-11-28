import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { MaterialImportsModule } from '../_common/material-imports/material-imports.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactHomeComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialImportsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactModule { }
