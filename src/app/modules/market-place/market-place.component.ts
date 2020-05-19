import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../shared/models/pokemon-interface';
import {FormControl} from '@angular/forms';
import {PokeStoreService} from '../../core/api/poke-store.service';
import {HeaderService} from '../header/header.service';

@Component({
  selector: 'app-market-place',
  templateUrl: './market-place.component.html',
  styleUrls: ['./market-place.component.css']
})
export class MarketPlaceComponent implements OnInit {

  pokemon: Pokemon[];
  filteredPokemon: Pokemon[];
  filterControl = new FormControl();
  pokeImage = 'https://pokeres.bastionbot.org/images/pokemon/';

  constructor(
    private pokeStoreService: PokeStoreService,
    private headerService: HeaderService
  ) {
  }

  ngOnInit(): void {
    this.getPokemonRequest();
    this.filter();
  }

  getPokemonRequest() {
    this.pokeStoreService.getPokemon().subscribe(data => {
      this.pokemon = data.pokemon;
      this.getUrlImage();
    });
  }

  getUrlImage() {
    const max = 1000.00;
    const min = 1.00;
    this.pokemon.forEach(poke => {
      const result = /\/([0-9]+)\//g.exec(poke.pokemon.url);
      poke.pokemon.image = `${this.pokeImage}${result[1]}.png`;
      const price = Math.random() * (max - min) + min;
      poke.pokemon.price = parseFloat(price.toFixed(2));
    });
    this.filteredPokemon = this.pokemon;
  }

  filter() {
    this.filterControl.valueChanges.subscribe(value => {
      if (value) {
        this.filteredPokemon = this.onFilter(value);
      } else {
        this.filteredPokemon = this.pokemon;
      }
    });
  }

  onFilter(value: string): Pokemon[] {
    const upperValue = value.toUpperCase();
    return this.pokemon.filter(pok => pok.pokemon.name.toUpperCase().includes(upperValue));
  }

  sendToCart(pokemon: Pokemon) {
    this.headerService.setCartPokemon(pokemon);
  }
}
