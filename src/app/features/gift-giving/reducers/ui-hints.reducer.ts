import { createReducer, Action, on } from '@ngrx/store';
import * as sortFilterActions from '../actions/sort-filter.actions';
import * as fromHolidaysActions from '../actions/holidays.actions';

export interface UiHintsState {
  showAll: boolean;
  sortHolidaysBy: string;
  holidaysLoaded: boolean;
}
const initialState: UiHintsState = {
  showAll: true,
  sortHolidaysBy: 'name',
  holidaysLoaded: false
};
const myReducer = createReducer(
  initialState,
  on(sortFilterActions.filterShowAll, (state) => ({ ...state, showAll: true })),
  on(sortFilterActions.filterShowOnlyUpcoming, (state) => ({ ...state, showAll: false })),
  on(sortFilterActions.sortHolidaysByName, (state) => ({ ...state, sortHolidaysBy: 'name' })),
  on(sortFilterActions.sortHolidaysByDate, (state) => ({ ...state, sortHolidaysBy: 'date' })),
  on(fromHolidaysActions.loadHolidayData, (state) => ({ ...state, holidaysLoaded: false })),
  on(fromHolidaysActions.loadDataSucceeded, (state) => ({ ...state, holidaysLoaded: true })),
  on(fromHolidaysActions.loadDataFailed, (state) => ({ ...state, holidaysLoaded: false }))
);
export function reducer(state: UiHintsState, action: Action): UiHintsState {
  return myReducer(state, action);
}
