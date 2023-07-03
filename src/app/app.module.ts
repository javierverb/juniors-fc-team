import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BaseComponent } from './base/base.component';
import { BrowserModule } from '@angular/platform-browser';
import { CompleteTeamComponent } from './complete-team/complete-team.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, CompleteTeamComponent, BaseComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [BaseComponent],
})
export class AppModule {}
