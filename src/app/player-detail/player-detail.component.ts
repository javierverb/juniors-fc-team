import players from '@app/players';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
})
export class PlayerDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  playerId: number | null = null;
  playerDetail: any = null;
  origin: string[] | null = null;

  getPlayerDetails() {
    return players.find((player) => player.id == this.playerId);
  }

  getBackUrl() {
    // reads from route and check if queryparams has origin value
    // if yes, return the value
    // else return the default url: /teams
    return this.origin || ['/team'];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playerId = params['id'];
      this.playerDetail = this.getPlayerDetails();
    });
    this.route.queryParams.subscribe((params) => {
      this.origin = params['origin'] ? [`/${params['origin']}`] : null;
    });
  }
}
