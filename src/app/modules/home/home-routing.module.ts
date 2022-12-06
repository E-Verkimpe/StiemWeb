import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GameListComponent } from './components/game-list/game-list.component';

const routes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: 'search/:searchTerm', component: GameListComponent },
  { path: 'genre/:genreTerm', component: GameListComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: 'cart', component: CartListComponent },
  { path: '**', redirectTo: 'games', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
