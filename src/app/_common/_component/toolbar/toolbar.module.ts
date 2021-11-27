import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarHomeComponent } from './toolbar-home/toolbar-home.component';
import { MaterialImportsModule } from '../../material-imports/material-imports.module';



@NgModule({
  declarations: [
    ToolbarHomeComponent
  ],
  imports: [
    CommonModule,
    MaterialImportsModule
  ], exports: [
    ToolbarHomeComponent,
    
  ]
})
export class ToolbarModule { }
