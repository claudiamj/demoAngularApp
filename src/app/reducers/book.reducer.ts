import { GeneralActions } from '../actions';
  import { createReducer, on } from '@ngrx/store';
import { Book } from '../models/Book';
  
  export const searchFeatureKey = 'search';
  
  export interface State {
    books: Book[];
    ids: string[];
    loading: boolean;
    error: string;
    query: string;
  }
  
  const initialState: State = {
    books: [],
    ids: [],
    loading: false,
    error: '',
    query: '',
  };
  
  export const reducer = createReducer(
    initialState,
    on(GeneralActions.searchBooks, (state, { query }) => {
      return query === ''
        ? {
            books: [],
            ids: [],
            loading: false,
            error: '',
            query,
          }
        : {
            ...state,
            books: [],
            loading: true,
            error: '',
            query,
          };
    }),
    on(GeneralActions.searchSuccess, (state, { books }) => ({
      books: books,
      ids: books.map((book) => book._id.toString()),
      loading: false,
      error: '',
      query: state.query,
    })),
    on(GeneralActions.searchFailure, (state, { errorMsg }) => ({
      ...state,
      books: [],
      loading: false,
      error: errorMsg,
    }))
  );

  export const getBooks = (state: State) => state.books;
  
  export const getIds = (state: State) => state.ids;
  
  export const getQuery = (state: State) => state.query;
  
  export const getLoading = (state: State) => state.loading;
  
  export const getError = (state: State) => state.error;
  