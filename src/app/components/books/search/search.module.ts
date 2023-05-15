import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MaterialModule } from 'src/app/material.module';
import { BookCardModule } from '../book-card/book-card.module';


@NgModule({
  declarations: [
    SearchComponent
  ],
  exports: [ SearchComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    BookCardModule
  ]
})
export class SearchModule { }
