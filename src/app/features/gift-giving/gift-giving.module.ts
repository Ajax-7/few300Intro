import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftGivingComponent } from './gift-giving.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { HolidaysComponent } from './containers/holidays/holidays.component';
import { FriendsComponent } from './containers/friends/friends.component';
import { ErrorPageComponent } from 'src/app/components/error-page/error-page.component';
import { reducers, featureName } from './reducers';
import { StoreModule } from '@ngrx/store';
import { ListComponent } from './containers/holidays/list/list.component';
import { EntryComponent } from './containers/holidays/entry/entry.component';
const routes: Routes = [
  {
    path: 'gifts',
    component: GiftGivingComponent,
    children: [
      {
        path: 'holidays',
        component: HolidaysComponent
      },
      {
        path: 'friends',
        component: FriendsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '**',
        component: ErrorPageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [GiftGivingComponent, DashboardComponent, HolidaysComponent, FriendsComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers)
  ]
})
export class GiftGivingModule { }
