import { createReducer, on } from '@ngrx/store';
import * as TourActions from '../actions/tours.actions';

export interface TourState {
  result: any[];
  error: any;
}

export const initialState: TourState = {
  result: [],
  error: null,
};

export const tourReducer = createReducer(
  initialState,
  on(TourActions.toursLoaded, (state, { result }) => ({ ...state, result })),
  on(TourActions.toursLoadError, (state, { error }) => ({ ...state, error }))
);
