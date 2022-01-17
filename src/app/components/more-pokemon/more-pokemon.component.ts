import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-more-pokemon',
  templateUrl: './more-pokemon.component.html',
  styleUrls: ['./more-pokemon.component.scss']
})
export class MorePokemonComponent implements OnInit {

  constructor() { }
  @Output() morePokemon: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  loadMorePokemon() {
    this.morePokemon.emit(true);
  }

}
