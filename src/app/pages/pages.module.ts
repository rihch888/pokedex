import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CardModule } from '../components/card/card.module';
import { SelectOrderModule } from '../components/select-order/select-order.module';
import { MorePokemonModule } from '../components/more-pokemon/more-pokemon.module';
import { RandomPokemonModule } from '../components/random-pokemon/random-pokemon.module';
import { HeaderModule } from '../components/header/header.module';
import { SearchPokemonModule } from '../components/search-pokemon/search-pokemon.module';
import { DetailsPageComponent } from './details-page/details-page.component';



@NgModule({
  declarations: [HomePageComponent, DetailsPageComponent],
  imports: [
      CommonModule,
      PagesRoutingModule,
      CardModule,
      SelectOrderModule,
      MorePokemonModule,
      RandomPokemonModule,
      HeaderModule,
  ],
})
export class PagesModule { }
