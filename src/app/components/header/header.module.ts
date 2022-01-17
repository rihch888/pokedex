import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchPokemonModule } from '../search-pokemon/search-pokemon.module';

@NgModule({
    declarations: [
        HeaderComponent,
    ],
    imports: [
        CommonModule,
        SearchPokemonModule
    ],
    exports: [
        HeaderComponent,
    ]
})
export class HeaderModule {

}