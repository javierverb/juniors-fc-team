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

  getPlayerDetails() {
    return players.find((player) => player.id == this.playerId);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.playerId = params['id'];
      this.playerDetail = this.getPlayerDetails();
    });
  }
}
