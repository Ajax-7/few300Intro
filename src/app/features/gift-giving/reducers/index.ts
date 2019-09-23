export const featureName = 'giftGiving';
import * as fromHolidays from './holidays.reducer';
import { GiftGivingComponent } from '../gift-giving.component';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HolidayListItem } from '../models';

export interface GiftGivingState {
  holidays: fromHolidays.HolidayState;
}

export const reducers = {
  holidays: fromHolidays.reducer
};

// Feature Selector
const selectFeature = createFeatureSelector<GiftGivingState>(featureName);

// Selector Per Branch(e.g., one for 'holidays')
const selectHolidaysBranch = createSelector(selectFeature, b => b.holidays);

// 'Helpers'
const selectHolidayArray = createSelector(selectHolidaysBranch, fromHolidays.selectHolidayArray);
// Then what your components need.
// - we need one taht returns a HolidayListItem[] for our holidaylist component.
export const selectHolidayListItems = createSelector(selectHolidayArray, holidays =>
  holidays.map(holiday => ({
    id: holiday.id,
    date: holiday.date,
    name: holiday.name,
    past: new Date(holiday.date) > new Date()
  } as HolidayListItem
  )));



// model: HolidayListItem[] = [
//   { id: '1', name: 'Christmas!!', date: '2019-12-25T00:00:00.000z', past: false },
//   { id: '2', name: 'Jeff\'s Birthday!!', date: '2019-04-20T00:00:00.000z', past: true },
// ];
