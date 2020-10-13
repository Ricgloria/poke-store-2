import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CartComponent } from './componets/cart/cart.component';
import {CartItemComponent} from './componets/cart-item/cart-item.component';
import {MatCardModule} from '@angular/material/card';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent,
    CartItemComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        RouterModule
    ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
