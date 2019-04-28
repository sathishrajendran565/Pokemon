import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon';
import { PokemonDetails } from '../models/pokemondetails';
import { baseUrl } from '../constants/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  public getPokemon(offset: number, limit: number): Observable<Pokemon[]>
  {       
    return this.http.get(`${baseUrl}?offset=${offset}&limit=${limit}`).pipe(
        map((response: any) => response.results),
        map(results => {
          let i = offset;
          return results.map((poke: any) => Pokemon.fromResponse(poke, ++i));})
      )   
  }

  public getPokemonDetails(url: string) : Observable<PokemonDetails>{
    return this.http.get(url).pipe(      
      map((response: PokemonDetails) => {
        let details = PokemonDetails.fromDetailsResponse(response);
        return details;
      })     
    )   
  }
}
