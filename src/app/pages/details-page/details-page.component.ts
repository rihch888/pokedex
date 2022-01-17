import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router) { }
  pokemonId;
  pokemon;
  loading: boolean = true;

  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonService.getPokemonByNameOrId(this.pokemonId);
  }

  setDefaultPic() {
    this.pokemon.image = "assets/images/pokeball.png";
  }

  onLoad() {
    this.loading = false;
  }

  numberWithCommas(x) {
    if (x !== null || x !== undefined) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{1})+(?!\d))/g, ",");
    }
    return parts.join(".");
  }

  getColor(type: string): string {
    return this.pokemonService.getColorByPokemonType(type);
  }

  goToPokemon(pokemonId) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['/details/'+pokemonId]);
    });

  }

}
