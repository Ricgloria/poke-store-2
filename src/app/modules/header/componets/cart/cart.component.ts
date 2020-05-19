import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../header.service';
import {Pokemon} from '../../../../shared/models/pokemon-interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  expandedOrNot = false;
  pokemon: Pokemon[];
  total = 0;

  constructor(
    private headerService: HeaderService
  ) {
  }

  ngOnInit(): void {
    this.pokemon = [];
    this.cartExpandControl();
    this.setPokemonOnCart();
  }

  cartExpandControl() {
    this.headerService.getExpandCart().subscribe(value => {
      this.expandedOrNot = value;
    });
  }

  setPokemonOnCart() {
    this.headerService.getCartPokemon().subscribe(value => {
      if (value) {
        this.pokemon.push(value);
        this.total = this.sumTotal();
      }
    });
  }

  sumTotal(): number {
    return this.pokemon.reduce((sum, pokemon) => {
      return sum + pokemon.pokemon.price;
    }, 0);
  }

  onDeletePokemonCartItem(index: number) {
    this.pokemon.splice(index, 1);
    this.total = this.sumTotal();
  }

  onFinishedBuyClick() {
    this.pokemon = [];
    this.total = 0;
  }
}
