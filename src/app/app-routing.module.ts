import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './modules/home/components/game-list/game-list.component';

const routes: Routes = [
  {
    path: '',
    component: GameListComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then((x) => x.HomeModule),
      },
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
