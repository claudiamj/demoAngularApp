import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book } from '../models/Book';
import { AmazonBooks } from '../resources/amazon.books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  constructor() {}

  searchBooks(searchWord: string): Observable<Book[]> {
    const key = searchWord.trim();
    const result = key == '' ? AmazonBooks : AmazonBooks.filter(book => (book.title.includes(key)
        || book.shortDescription?.includes(key)
                || book.authors.filter(aut => (aut.includes(key))).length > 0));

    return of(result as Book[]).pipe(map((books) => books || []));
  }
}
