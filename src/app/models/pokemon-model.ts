import { PokemonUrlModel } from './pokemon-url.model';
export class PokemonModel {
    id: number;
    name: string;
    type1: string;
    type2: string;
    colorType1: string;
    colorType2: string;
    ability: string;
    description: string;
    base_experience: string;
    height: string;
    weight: string;
    moves: string;
    image: string;
    order: number;
    category: string;
    weakTo1: string;
    weakTo2: string;
    weakTo3: string;
    weakTo4: string;
    weakTo5: string;
    weakTo6: string;
    evo1: {
      id: number;
      name: string;
      image: string;
      type1: string;
      type2: string;
    };
    evo2: {
      id: number;
      name: string;
      image: string;
      type1: string;
      type2: string;
    };
    evo3: {
      id: number;
      name: string;
      image: string;
      type1: string;
      type2: string;
    };
    prev_pokemon: {
      id: number;
      name: string;
    };
    next_pokemon: {
      id: number;
      name: string;
    }
  }