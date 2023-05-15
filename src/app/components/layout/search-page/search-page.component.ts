import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Book } from 'src/app/models/Book';
import { GeneralActions } from 'src/app/actions';
import * as fromGeneral from '../../../reducers';

@Component({
  selector: 'app-search-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  searchQuery$: Observable<string>;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store) {
    this.searchQuery$ = store.select(fromGeneral.selectSearchQuery).pipe(take(1));
    this.books$ = store.select(fromGeneral.selectSearchResults);
    this.loading$ = store.select(fromGeneral.selectSearchLoading);
    this.error$ = store.select(fromGeneral.selectSearchError);
  }

  search(query: string) {
    this.store.dispatch(GeneralActions.searchBooks({ query }));
  }
}
