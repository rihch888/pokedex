import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-random-pokemon',
  templateUrl: './random-pokemon.component.html',
  styleUrls: ['./random-pokemon.component.scss']
})
export class RandomPokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }
  @Input() pokemonsUrl;
  @Output() pokemons: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  randomPokemon() {
    let arrSorted = this.pokemonService.randomPokemon(this.pokemonsUrl);
    this.pokemons.emit(arrSorted);
  }

}
