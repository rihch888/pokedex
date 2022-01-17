import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon-model';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonUrlModel } from '../../models/pokemon-url.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }
  pokemonsUrl = [];
  pokemons = [];
  pokeNum = 0;

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe((data) => {
      data.results.forEach(pokeUrl => {
        let pokeId = pokeUrl.url.split('/')[6];
        let url = {
          id: pokeId,
          name: pokeUrl.name,
          url: pokeUrl.url
        };
        this.pokemonsUrl.push(url);
      });
      this.pokemonsUrl.forEach((pokeUrl, key) => {
        if (key<20) {
          let pokemon = this.pokemonService.getPokemonByUrl(pokeUrl.url);
          this.pokemons.push(pokemon);
        }
      });
      this.pokeNum = 20;
    });
  }

  onSelectOrder(pm) {
    let poke = [];
    pm.forEach((pokeUrl, key) => {
      if (key<20) {
        let pokemon = this.pokemonService.getPokemonByUrl(pokeUrl.url);
        poke.push(pokemon);
      }
    });
    
    this.pokemons = poke;
  }

  onRandomPokemon(pm) {
    let poke = [];
    pm.forEach((pokeUrl, key) => {
      if (key<20) {
        let pokemon = this.pokemonService.getPokemonByUrl(pokeUrl.url);
        poke.push(pokemon);
      }
    });
    
    this.pokemons = poke;
  }

  loadMorePokemon(event) {
    for (let i = this.pokeNum; i < this.pokeNum+20; i++) {
      let pokemon = this.pokemonService.getPokemonByUrl(this.pokemonsUrl[i].url);
      this.pokemons.push(pokemon);
    }
    this.pokeNum = this.pokeNum + 20;
  }

  onPokemonSearch(pokemonSearched) {
    let pokemon = this.pokemonService.getPokemonByNameOrId(pokemonSearched);
    let poke = [];
    poke.push(pokemon);
    this.pokemons = poke;
  }  

  numSequence(n: number): Array<number> {
    return Array(n);
  }

}
