import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, EMPTY as empty, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

import { Book } from '../models/Book';
import { GeneralActions } from '../actions';
import { BooksService } from '../services/book.service';

@Injectable()
export class BookEffects {
  search$ = createEffect(
    () =>
      ({ debounce = 300, scheduler = asyncScheduler } = {}) =>
        this.actions$.pipe(
          ofType(GeneralActions.searchBooks),
          debounceTime(debounce, scheduler),
          switchMap(({ query }) => {
            if (query === '') {
              return empty;
            }

            const nextSearch$ = this.actions$.pipe(
              ofType(GeneralActions.searchBooks),
              skip(1)
            );

            return this.bookService.searchBooks(query).pipe(
              takeUntil(nextSearch$),
              map((books: Book[]) => GeneralActions.searchSuccess({ books })),
              catchError((err) =>
                of(GeneralActions.searchFailure({ errorMsg: err.message }))
              )
            );
          })
        )
  );

  constructor(
    private actions$: Actions,
    private bookService: BooksService
  ) {}
}
