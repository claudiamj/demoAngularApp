import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GeneralActions } from './actions';
import { Observable } from 'rxjs';
import * as fromGeneral from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  title = '';
  showFiller = false;

  constructor(private store: Store) {
    this.showSidenav$ = this.store.select(fromGeneral.selectShowSidenav);
  }

  openSidenav() {
    this.store.dispatch(GeneralActions.openSidenav());
  }

  closeSidenav() {
    this.store.dispatch(GeneralActions.closeSidenav());
  }
}
