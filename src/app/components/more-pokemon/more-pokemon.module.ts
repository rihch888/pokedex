import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorePokemonComponent } from './more-pokemon.component';

@NgModule({
    declarations: [
        MorePokemonComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MorePokemonComponent,
    ]
})
export class MorePokemonModule {

}