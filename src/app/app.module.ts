import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './base/base.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatchComponent } from './match/match.component';
import { Ng2SearchPipe } from './ng2-search-pipe.pipe';
import { NgModule } from '@angular/core';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayersComponent } from './players/players.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    PlayerDetailComponent,
    PlayersComponent,
    MatchComponent,
    Ng2SearchPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [BaseComponent],
})
export class AppModule {}
