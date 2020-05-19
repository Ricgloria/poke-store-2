import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from '../../../shared/models/pokemon-interface';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Output() toCartPokemon = new EventEmitter<Pokemon>(undefined);

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.toCartPokemon.emit(this.pokemon);
  }

}
