import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports: [ LayoutComponent ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LayoutModule { }
