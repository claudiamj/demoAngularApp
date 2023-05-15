import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { SearchModule } from '../../books/search/search.module';
import { BookCardModule } from '../../books/book-card/book-card.module'

@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SearchModule,
    BookCardModule
  ]
})
export class SearchPageModule { }
