import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';

export const childRoutes: Routes = [
    {
      path: '', component: HomePageComponent,
    },
    {
      path: 'details/:id', component: DetailsPageComponent,
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class PagesRoutingModule {
}
