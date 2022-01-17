import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPokemonComponent } from './random-pokemon.component';

@NgModule({
    declarations: [
        RandomPokemonComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        RandomPokemonComponent,
    ]
})
export class RandomPokemonModule {

}