import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete-team',
  templateUrl: './complete-team.component.html',
  styleUrls: ['./complete-team.component.scss'],
})
export class CompleteTeamComponent implements OnInit {
  constructor() {}

  buildFilePath(idPlayer: Number) {
    return `assets/imgs/team/${idPlayer}.png`;
  }

  ngOnInit(): void {}
}
