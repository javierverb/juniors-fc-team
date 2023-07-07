import players from '@app/players';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';

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

  constructor() {
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

  _buildTemplate(players: any): string {
    let template = '';
    players.forEach((player: any) => {
      template += `.${player.name} ${player.weight}\n`;
    });
    if (players.length % 2 !== 0) {
      template += `.Desconocido 0\n`;
    }
    return template;
  }

  buildTeams(): void {
    const selectedPlayers = this.playersToSelect.filter(
      (player: any) => player.selected
    );
    const bodyString = this._buildTemplate(selectedPlayers);
    // it makes an http request to the server with native fetch
    const url =
      'https://tibwgjsx16.execute-api.us-east-1.amazonaws.com/dev/telegram';
    Swal.fire({
      title: 'Armando equipos...',
      text: 'Por favor espere...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
        fetch(url, {
          method: 'POST',
          body: bodyString,
        })
          .then((response) => response.json())
          .then((data) => {
            Swal.close();
            Swal.fire({
              title: 'Equipos!',
              text: data.message,
              icon: 'success',
              confirmButtonText: 'Ok',
            });
          })
          .catch((error) => {
            Swal.close();
            Swal.fire({
              title: 'Error!',
              text: 'Something went wrong',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          });
      },
    });
  }

  ngOnInit(): void {}
}
