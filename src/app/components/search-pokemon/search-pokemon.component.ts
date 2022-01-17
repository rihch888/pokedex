import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  constructor() { }
  @Output() pokemonSearched: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onPokemonSearch(pokemon) {
    let pokemonToLowerCase = pokemon.toLowerCase();
    this.pokemonSearched.emit(pokemonToLowerCase);
  }

}
