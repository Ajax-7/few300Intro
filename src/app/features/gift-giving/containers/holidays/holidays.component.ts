import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HolidayListItem } from '../../models';
import { Store } from '@ngrx/store';
import { GiftGivingState, selectHolidayListItems } from '../../reducers';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  holidays$: Observable<HolidayListItem[]>;
  constructor(private store: Store<GiftGivingState>) { }

  ngOnInit() {
    this.holidays$ = this.store.select(selectHolidayListItems);
  }
}
