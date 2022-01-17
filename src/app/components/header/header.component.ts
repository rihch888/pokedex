import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Output() pokemonSearched: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onPokemonSearch(pokemonSearched) {
    this.pokemonSearched.emit(pokemonSearched);
  }

}
