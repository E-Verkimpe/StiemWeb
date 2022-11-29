import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { GameListComponent } from './components/game-list/game-list.component';

const routes: Routes = [
  { path: 'games', component: GameListComponent },
  { path: 'game/:id', component: GameDetailComponent },
  { path: '**', redirectTo: 'games', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
