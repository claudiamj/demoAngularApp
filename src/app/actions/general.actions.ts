import { createAction, props } from '@ngrx/store';
import { Book } from '../models/Book';

export const openSidenav = createAction('[Layout] Open Sidenav');
export const closeSidenav = createAction('[Layout] Close Sidenav');

// Books
export const searchBooks = createAction(
    '[Search Book Page] Search Books',
    props<{ query: string }>()
  );

export const searchSuccess = createAction(
  '[Search Book Page] Search Success',
  props<{ books: Book[] }>()
);

export const searchFailure = createAction(
  '[Search Book Page] Search Failure',
  props<{ errorMsg: string }>()
);
  