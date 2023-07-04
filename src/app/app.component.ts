import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'main';

  playPozitoAudio() {
    // stop all audio before playing
    let audio = new Audio();
    audio.src = 'assets/audio/pozito.ogg';
    audio.load();
    audio.play();
  }
}
