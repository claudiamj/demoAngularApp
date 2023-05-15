import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './components/layout/search-page/search-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  {
    path: 'search',
    component: SearchPageComponent,
    data: { title: 'Find a book' },
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
