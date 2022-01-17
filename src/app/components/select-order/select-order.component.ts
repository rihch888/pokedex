import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-select-order',
  templateUrl: './select-order.component.html',
  styleUrls: ['./select-order.component.scss']
})
export class SelectOrderComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }
  @Input() pokemonsUrl;
  @Output() pokemons: EventEmitter<any> = new EventEmitter<any>();
  poke = [];

  orders: Array<Object> = [
    {orderBy: '', label: 'Ordenar por...'},
    {orderBy: 'id', label: 'Número inferior'},
    {orderBy: '-id', label: 'Número superior'},
    {orderBy: 'name', label: 'A-Z'},
    {orderBy: '-name', label: 'Z-A'},
  ];

  ngOnInit(): void {
  }

  getPokemonsByOrder(orderBy) {
    this.poke = [];
    let arrSorted;
    if (orderBy === 'name' || orderBy === '-name') {
      arrSorted = this.pokemonsUrl.sort(this.pokemonService.dynamicSort(orderBy));
    } else if (orderBy === 'id') {
      arrSorted = this.pokemonsUrl.sort(function (a,b)  { return a.id - b.id });
    } else if (orderBy === '-id') {
      arrSorted = this.pokemonsUrl.sort(function (a,b)  { return b.id - a.id });
    }
    this.pokemons.emit(arrSorted);
  }

}
