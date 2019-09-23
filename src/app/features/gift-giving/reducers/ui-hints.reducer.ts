import { createReducer, Action, on } from '@ngrx/store';
import * as sortFilterActions from '../actions/sort-filter.actions';

export interface UiHintsState {
  showAll: boolean;
  sortHolidaysBy: string;
}
const initialState: UiHintsState = {
  showAll: true,
  sortHolidaysBy: 'name'
};
const myReducer = createReducer(
  initialState,
  on(sortFilterActions.filterShowAll, (state) => ({ ...state, showAll: true })),
  on(sortFilterActions.filterShowOnlyUpcoming, (state) => ({ ...state, showAll: false })),
  on(sortFilterActions.sortHolidayByName, (state) => ({ ...state, sortHolidaysBy: 'name' })),
  on(sortFilterActions.sortHolidayByDate, (state) => ({ ...state, sortHolidaysBy: 'date' }))
);
export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return myReducer(state, action);
}
