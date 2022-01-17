import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPokemonComponent } from './search-pokemon.component';

@NgModule({
    declarations: [
        SearchPokemonComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SearchPokemonComponent,
    ]
})
export class SearchPokemonModule {

}