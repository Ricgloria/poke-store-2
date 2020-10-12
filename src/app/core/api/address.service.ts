import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {City, IbgeState, ViaCepAddress} from '../../shared/models/via-cep-address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  URL_VIA_CEP = environment.viaCep;
  URL_IBGE = environment.ibge;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAddressByCep(cep: string): Observable<ViaCepAddress> {
    return this.httpClient.get<ViaCepAddress>(`${this.URL_VIA_CEP}/${cep}/json`);
  }

  getStates(): Observable<IbgeState[]> {
    return this.httpClient.get<IbgeState[]>(this.URL_IBGE);
  }

  getCitiesById(stateId: number | string): Observable<City[]> {
    return this.httpClient.get<City[]>(`${this.URL_IBGE}/${stateId}/municipios`);
  }
}
