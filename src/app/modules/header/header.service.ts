import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Pokemon} from '../../shared/models/pokemon-interface';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private expandCart = new BehaviorSubject<boolean>(false);
  private toCartPokemon = new BehaviorSubject<Pokemon>(undefined);

  constructor() {
  }

  public setExpandCart(value: boolean) {
    this.expandCart.next(value);
  }

  public getExpandCart(): Observable<boolean> {
    return this.expandCart;
  }

  public getCartPokemon() {
    return this.toCartPokemon;
  }

  public setCartPokemon(pokemon: Pokemon) {
    this.toCartPokemon.next(pokemon);
  }
}
