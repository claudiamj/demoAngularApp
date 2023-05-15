import { createReducer, on } from '@ngrx/store';
import { GeneralActions } from '../actions';

export const generalFeatureKey = 'general';

export interface State {
  showSidenav: boolean
}

const initialState: State = {
  showSidenav: false
};

export const reducer = createReducer(
  initialState,
  on(GeneralActions.closeSidenav, () => ({ showSidenav: false })),
  on(GeneralActions.openSidenav, () => ({ showSidenav: true }))
);

export const selectShowSidenav = (state: State) => state.showSidenav;

