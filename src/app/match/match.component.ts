import players from '@app/players';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { PlayersService } from '@app/players.service';

declare var ClipboardJS: any;

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent implements OnInit {
  players = players;
  selectedPlayer = players[0];
  term: any;
  playersToSelect: any;

  constructor(private playersService: PlayersService) {
    // copy the players list of objects adding a new property by default: 'selected' = false
    this.playersToSelect = this.players.map((player) => {
      return { ...player, selected: false };
    });
  }

  canWeBuildATeam(): boolean {
    const selectedPlayers = this.playersToSelect.filter(
      (player: any) => player.selected
    );
    return selectedPlayers.length >= 10;
  }

  get totalPlayersSelected(): number {
    const selectedPlayers = this.playersToSelect.filter(
      (player: any) => player.selected
    );
    return selectedPlayers.length;
  }

  _buildTemplateResponse(team_1: any[], team_2: any[]) {
    /* returns a
    <button class="btn btn-primary" data-clipboard-target="teams">Copy to clipboard</button>
    <p id="teams">
    Equipo A:
    1. PlayerA
    2. PlayerB
    ...
    Equipo B:
    1. PlayerC
    2. PlayerD
    */
    let response = `
    <button class="btn btn-primary" data-clipboard-target="#teams">
      Copiar equipos
    </button>`;
    response += '<div class="text-start mt-5" id="teams">';
    response += '<p class="fs-1">Equipo 1:</p>';
    team_1.forEach((player: any, index: number) => {
      response += `<p>${index + 1}. ${player}</p>`;
    });
    response += '<p class="fs-1">Equipo 2:</p>';
    team_2.forEach((player: any, index: number) => {
      response += `<p>${index + 1}. ${player}</p>`;
    });
    response += '</div>';
    return response;
  }

  buildTeams(): void {
    const selectedPlayers = this.playersToSelect.filter(
      (player: any) => player.selected
    );
    Swal.showLoading();
    this.playersService.buildTeam(selectedPlayers).subscribe({
      next: (response: any) => {
        Swal.fire({
          html: this._buildTemplateResponse(response.team_1, response.team_2),
          confirmButtonText: 'Ok',
          showCancelButton: false,
          backdrop: false,
        });
        new ClipboardJS('.btn');
        Swal.hideLoading();
      },
      error: (error: any) => {
        Swal.fire({
          title: 'Hay algo mal que no está bien',
          text: JSON.stringify(error),
          icon: 'error',
          confirmButtonText: 'Ok',
        });
        Swal.hideLoading();
      },
    });
  }

  ngOnInit(): void {}
}
