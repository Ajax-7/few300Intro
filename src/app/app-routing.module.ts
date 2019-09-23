import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GiftGivingComponent } from './features/gift-giving/gift-giving.component';


const routes: Routes = [
  {
    path: '\home',
    component: HomeComponent
  },
  {
    path: '\gifts',
    component: GiftGivingComponent
  },
  {
    path: '\about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
