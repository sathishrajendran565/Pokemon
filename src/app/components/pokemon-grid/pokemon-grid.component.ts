import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';   


@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.css']
})
export class PokemonGridComponent implements OnInit {

  pokemons: Pokemon[] = [];
  constructor(private pokemonService: PokemonService, private modalService: NgbModal) { }

  ngOnInit() {
    this.displayPokemons();
  }

  displayPokemons(){
    this.pokemonService.getPokemon(this.pokemons.length, 50)    
    .subscribe(pokemonResponse => {                
      pokemonResponse.forEach(element => {this.pokemons.push(element);});      
    })
  }

  displaydetailsview(selectedPokemon: Pokemon) {     
    this.pokemonService.getPokemonDetails(selectedPokemon.detailsUrl).subscribe(response => {    
    const modalRef = this.modalService.open(PokemonDetailsComponent);    
    modalRef.componentInstance.name = response.name;    
    modalRef.componentInstance.height = response.height;
    modalRef.componentInstance.weight = response.weight;
    modalRef.componentInstance.sprites = response.sprites;
    modalRef.componentInstance.abilities = response.abilities;
    })     
  }

}