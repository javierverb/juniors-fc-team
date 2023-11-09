import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { P2pGameRoutingModule } from './p2p-game-routing.module';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
    P2pGameRoutingModule
  ]
})
export class P2pGameModule { }
