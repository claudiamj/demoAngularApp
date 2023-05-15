import {
    createSelector,
    createFeatureSelector,
    ActionReducer,
    Action,
    ActionReducerMap,
  } from '@ngrx/store';
  import {
    getRouterSelectors,
    routerReducer,
    RouterReducerState,
  } from '@ngrx/router-store';
  import * as fromGeneral from  './general.reducer';
  import * as fromBook from './book.reducer';
  import { InjectionToken, isDevMode } from '@angular/core';
  
  export interface State {
    [fromGeneral.generalFeatureKey]: fromGeneral.State;
    [fromBook.searchFeatureKey]: fromBook.State;
    router: RouterReducerState<any>;
  }
  
  export const ROOT_REDUCERS = new InjectionToken<
    ActionReducerMap<State, Action>
  >('Root reducers token', {
    factory: () => ({
      [fromGeneral.generalFeatureKey]: fromGeneral.reducer,
      [fromBook.searchFeatureKey]: fromBook.reducer,
      router: routerReducer,
    }),
  });
  
  //Layout Selectors
  export const selectLayoutState = createFeatureSelector<fromGeneral.State>(
    fromGeneral.generalFeatureKey
  );
  
  export const selectShowSidenav = createSelector(
    selectLayoutState,
    fromGeneral.selectShowSidenav
  );
  
  //Router Selectors
  export const { selectRouteData } = getRouterSelectors();
  

  // Books Selectors
  export const selectBooksState =
  createFeatureSelector<fromBook.State>(fromBook.searchFeatureKey);

  export const selectBookEntitiesState = createSelector(
    selectBooksState,
    (state) => state.books
  );

  export const selectSearchQuery = createSelector(
    selectBooksState,
    fromBook.getQuery
  );
  export const selectSearchLoading = createSelector(
    selectBooksState,
    fromBook.getLoading
  );
  export const selectSearchError = createSelector(
    selectBooksState,
    fromBook.getError
  );
  

  export const selectSearchResults = createSelector(
    selectBookEntitiesState,
    (books) => {
      return books;
    }
  );