import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCardComponent } from './book-card.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    BookCardComponent
  ],
  exports: [ BookCardComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterLink
  ]
})
export class BookCardModule { }
