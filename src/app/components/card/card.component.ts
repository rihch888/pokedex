import { Component, Input, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon-model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() pokemon: PokemonModel;
  loading: boolean = true;
  constructor(private pokemonService: PokemonService) { }
  

  ngOnInit(): void {
    
  }

  setDefaultPic() {
    this.pokemon.image = "assets/images/pokeball.png";
  }

  onLoad() {
    this.loading = false;
  }

  getColor(type: string): string {
    return this.pokemonService.getColorByPokemonType(type);
  }

}
