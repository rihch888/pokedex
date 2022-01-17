import { HttpClient, HttpHeaders } from "@angular/common/http";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonModel } from '../models/pokemon-model';
import { PokemonUrlModel } from '../models/pokemon-url.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }
    general_url = 'https://pokeapi.co/api/v2/';
    getAllPokemon(): Observable<any> {
    const pokemonURLS: PokemonUrlModel[] = [];
    const url = this.general_url+'pokemon/?limit=1118';
    return this.http.get(url,{});
}

getPokemonByUrl(url): PokemonModel {
  let pokemon: PokemonModel = new PokemonModel;
  this.http.get(url,{}).subscribe((pm:any) => {
    let pokeID = pm.id;
    let pokeName = pm.name;
    let base_experience = pm.base_experience;
    let height = pm.height;
    let weight = pm.weight;
    let moves = pm.moves;
    let type1 = pm.types[0]['type'].name;
    let type2 = "";
    if (pm.types[1]) {
      type2 = pm.types[1]['type'].name;
    }
    
    let ability = pm.abilities[0]['ability'].name;
    let abilityURL = pm.abilities[0]['ability'].url;
    pokemon.id = pokeID;
    pokemon.name = pokeName;
    pokemon.type1 = type1;
    pokemon.type2 = type2;

    pokemon.ability = ability;
    pokemon.base_experience = base_experience;
    pokemon.height = height;
    pokemon.weight = weight;
    pokemon.moves = moves;
    pokemon.image = 'https://cdn.traction.one/pokedex/pokemon/' + pokeID + '.png';
    
  });
  return pokemon;
}

getPokemonByNameOrId(nameOrId): PokemonModel {
  let pokemon: PokemonModel = new PokemonModel;
  this.http.get(this.general_url+'pokemon/'+nameOrId,{}).subscribe((pm:any) => {
    let pokeID = pm.id;
    let pokeName = pm.name;
    let base_experience = pm.base_experience;
    let height = pm.height;
    let weight = pm.weight;
    let moves = pm.moves;
    let type1 = pm.types[0]['type'].name;
    let type2 = "";
    if (pm.types[1]) {
      type2 = pm.types[1]['type'].name;
    }
    let ability = pm.abilities[0]['ability'].name;
    let abilityURL = pm.abilities[0]['ability'].url;
    let prevId = parseInt(nameOrId)-1;
    let nextId = parseInt(nameOrId)+1;
    this.http.get(this.general_url+'pokemon/'+prevId,{}).subscribe((prevtP:any) => {
      pokemon.prev_pokemon = {
        id: prevtP.id,
        name: prevtP.name
      };
    }, error => {
      pokemon.prev_pokemon = {
        id: prevId,
        name: ""
      };
    });

    this.http.get(this.general_url+'pokemon/'+nextId,{}).subscribe((nextP:any) => {
      pokemon.next_pokemon = {
        id: nextP.id,
        name: nextP.name
      };
    }, error => {
      pokemon.next_pokemon = {
        id: nextId,
        name: ""
      };
    });

    this.http.get(this.general_url+'characteristic/'+nameOrId,{}).subscribe((data:any) => {
      let description = '';
      if (data.descriptions[5]) {
        description = data.descriptions[5].description;
      }
      pokemon.description = description;
    });

    this.http.get(this.general_url+'pokemon-species/'+nameOrId,{}).subscribe((dataS:any) => {
      this.http.get(dataS.evolution_chain.url,{}).subscribe((dataE:any) => {
        let category = dataS.genera[5].genus;
        pokemon.category = category;
        let evo1 = null;
        let evo2 = null;
        let evo3 = null;
        if (dataE.chain) {
          evo1 = dataE.chain.species.name
          if (dataE.chain.evolves_to[0]) {
            evo2 = dataE.chain.evolves_to[0].species.name;
            if (dataE.chain.evolves_to[0].evolves_to[0]) {
              evo3 = dataE.chain.evolves_to[0].evolves_to[0].species.name;
            }
          }
        }
        
        
        this.http.get(this.general_url+'pokemon/'+evo1,{}).subscribe((ev1:any) => {
          let evo1Image = 'https://cdn.traction.one/pokedex/pokemon/' + ev1.id + '.png';
          let evo1Type2 = "";
          if (ev1.types[1]) {
            evo1Type2 = ev1.types[1]['type'].name;
          }
          pokemon.evo1 = {
            id: ev1.id,
            name: ev1.name,
            image: evo1Image,
            type1: ev1.types[0]['type'].name,
            type2: evo1Type2
          };
          this.http.get(this.general_url+'pokemon/'+evo2,{}).subscribe((ev2:any) => {
            let evo2Image = 'https://cdn.traction.one/pokedex/pokemon/' + ev2.id + '.png';
            let evo2Type2 = "";
            if (ev2.types[1]) {
              evo2Type2 = ev2.types[1]['type'].name;
            }
            pokemon.evo2 = {
              id: ev2.id,
              name: ev2.name,
              image: evo2Image,
              type1: ev2.types[0]['type'].name,
              type2: evo2Type2
            };
            this.http.get(this.general_url+'pokemon/'+evo3,{}).subscribe((ev3:any) => {
              let evo3Image = 'https://cdn.traction.one/pokedex/pokemon/' + ev3.id + '.png';
              let evo3Type2 = "";
              if (ev3.types[1]) {
                evo3Type2 = ev3.types[1]['type'].name;
              }
              pokemon.evo3 = {
                id: ev3.id,
                name: ev3.name,
                image: evo3Image,
                type1: ev3.types[0]['type'].name,
                type2: evo3Type2
              };
            });
          });
        });
      });
    });

          this.http.get(this.general_url+'type/'+pm.types[0].type.name,{}).subscribe((dataT:any) => {
            let weakTo1, weakTo2, weakTo3, weakTo4, weakTo5, weakTo6 = null;
            weakTo1 = dataT.damage_relations.double_damage_from[0].name;
            if (dataT.damage_relations.double_damage_from[1]) {
              weakTo2 = dataT.damage_relations.double_damage_from[1].name;
            }
            if (dataT.damage_relations.double_damage_from[2]) {
              weakTo3 = dataT.damage_relations.double_damage_from[2].name;
            }
            pokemon.weakTo1 = weakTo1;
            pokemon.weakTo2 = weakTo2;
            pokemon.weakTo3 = weakTo3;
          });
            
            pokemon.id = pokeID;
            pokemon.name = pokeName;
            pokemon.type1 = type1;
            pokemon.type2 = type2;
            pokemon.ability = ability;
            pokemon.base_experience = base_experience;
            pokemon.height = height;
            pokemon.weight = weight;
            pokemon.moves = moves;
            pokemon.image = 'https://cdn.traction.one/pokedex/pokemon/' + pokeID + '.png';
  });
  return pokemon;
}

getColorByPokemonType(pokemonType: string): string {
  let color = "";
  if (pokemonType == 'normal') {
    color = '#a4acaf';
  } else if (pokemonType == 'fighting') {
    color = '#d56723';
  } else if (pokemonType == 'flying') {
    color = '#3dc7ef';
  } else if (pokemonType == 'poison') {
    color = '#b97fc9';
  } else if (pokemonType == 'ground') {
    color = '#ab9842';
  } else if (pokemonType == 'rock') {
    color = '#a38c21';
  } else if (pokemonType == 'bug') {
    color = '#729f3f';
  } else if (pokemonType == 'ghost') {
    color = '#7b62a3';
  } else if (pokemonType == 'steel') {
    color = '#9eb7b8';
  } else if (pokemonType == 'fire') {
    color = '#fd7d24';
  } else if (pokemonType == 'water') {
    color = '#4592c4';
  } else if (pokemonType == 'grass') {
    color = '#9bcc50';
  } else if (pokemonType == 'electric') {
    color = '#eed535';
  } else if (pokemonType == 'psychic') {
    color = '#f366b9';
  } else if (pokemonType == 'ice') {
    color = '#51c4e7';
  } else if (pokemonType == 'dragon') {
    color = '#53a4cf';
  } else if (pokemonType == 'dark') {
    color = '#707070';
  } else if (pokemonType == 'fairy') {
    color = '#fdb9e9';
  }
  return color;
}

dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

randomPokemon(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

}
