import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import { NgModule } from '@angular/core';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayersComponent } from './players/players.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: AppComponent },
  { path: 'team', component: PlayersComponent },
  { path: 'team/detail/:id', component: PlayerDetailComponent },
  { path: 'match', component: MatchComponent },
  {
    path: 'game',
    loadChildren: () =>
      import('./p2p-game/p2p-game.module').then((m) => m.P2pGameModule),
  },
  {
    path: '**',
    redirectTo: '/main',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
