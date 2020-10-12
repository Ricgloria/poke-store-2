import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketPlaceComponent } from './market-place.component';
import { LandingComponent } from './landing/landing.component';
import {SignUpComponent} from './sign-up/sign-up.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'cadastro',
    component: SignUpComponent
  },
  {
    path: 'loja',
    component: MarketPlaceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketPlaceRoutingModule { }
