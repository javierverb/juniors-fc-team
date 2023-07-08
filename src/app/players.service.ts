import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor(private http: HttpClient) {}

  buildBody(players: any) {
    /* returns something with this format:
    {
    "team": [
        {"name": "Nano", "score": 1},
        {"name": "Javi", "score": 2},
        {"name": "Juan", "score": 2},
        {"name": "May", "score": 1}
      ]
    }
    */
    const body = {
      team: players.map((player: any) => {
        return { name: player.name, score: player.weight };
      }),
    };
    return body;
  }

  buildTeam(players: any) {
    //  allow cors
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': '*',
    };
    const body = this.buildBody(players);
    const url =
      'https://o8v1n39p98.execute-api.us-east-1.amazonaws.com/dev/web';
    return this.http.post(url, body, { headers });
  }
}
