import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketPlaceRoutingModule } from './market-place-routing.module';
import { MarketPlaceComponent } from './market-place.component';
import {HeaderModule} from '../header/header.module';
import { PokemonCardComponent } from './components/pokemon-card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [MarketPlaceComponent, PokemonCardComponent],
  imports: [
    CommonModule,
    MarketPlaceRoutingModule,
    HeaderModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class MarketPlaceModule { }
