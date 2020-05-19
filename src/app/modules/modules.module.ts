import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import {MarketPlaceModule} from './market-place/market-place.module';
import {HeaderModule} from './header/header.module';


@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MarketPlaceModule,
    HeaderModule
  ]
})
export class ModulesModule { }
