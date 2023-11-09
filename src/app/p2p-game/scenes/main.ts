import * as Phaser from 'phaser';
import players from '@app/players';
import { Ball } from '../entities/ball';
import { Countdown } from '../entities/countdown';
import { Player } from '../entities/player';
import { PointerFollower } from '../entities/pointer';
import { SoccerGoal } from '../entities/soccer_goal';

class MainScene extends Phaser.Scene {
  score: Phaser.GameObjects.Text;
  playerA: Player;
  playerB: Player;
  countDown: Countdown;
  ball: Ball;
  soccer_goal_a: Phaser.GameObjects.Rectangle;
  soccer_goal_b: Phaser.GameObjects.Rectangle;
  pointerFollower: PointerFollower;
  lastPlayedKickSoundTimestamp: number;

  scoreA = 0;
  scoreB = 0;

  constructor() {
    super({ key: 'main' });
  }

  preload() {
    this.load.image('ball', 'assets/game/ball.png');
    this.load.image('bg', 'assets/game/bg.png');
    for (let player of players) {
      this.load.image(player.name, player.imagePath);
    }
    // load audio
    this.load.audio('gol', 'assets/game/gol.mp3');
    this.load.audio('kick', 'assets/game/kick.mp3');
  }

  private _getScoreText() {
    return `${this.scoreA} - ${this.scoreB}`;
  }
  drawScore() {
    return this.add.text(700, 10, this._getScoreText(), {
      fontSize: '30px',
      fontStyle: 'bold',
      color: '#ffffff',
    });
  }

  playKickSound() {
    // check if the last played kick sound was more than 100ms ago
    if (Date.now() - this.lastPlayedKickSoundTimestamp > 100) {
      this.sound.play('kick');
      this.lastPlayedKickSoundTimestamp = Date.now();
    }
  }

  create() {
    // set the last played kick sound timestamp
    this.lastPlayedKickSoundTimestamp = Date.now();
    this.add.image(400, 300, 'bg').setDisplaySize(800, 600);
    this.soccer_goal_a = new SoccerGoal(this, 400, 0, 300, 50, 0);
    this.soccer_goal_b = new SoccerGoal(this, 400, 600, 300, 50, 1);
    this.ball = new Ball(this, 400, 300).setDepth(2);
    // set player in the goal keeper position in top
    this.playerA = new Player(this, 400, 70, 'A').setDepth(2);
    // and another in the middle of the bottom
    this.playerB = new Player(this, 400, 550, 'B').setDepth(2);
    // add score ir the top right corner
    this.score = this.drawScore();
    this.countDown = new Countdown(this, 400, 300, '5');
    this.countDown.start();
    this.pointerFollower = new PointerFollower(
      this,
      0,
      0,
      this.playerB,
      this.countDown
    );
    // add collider between the ball and the players
    this.physics.add.collider(this.ball, this.playerA, () => {
      this.playKickSound();
      this.ball.increaseVelocity();
    });
    this.physics.add.collider(this.ball, this.playerB, () => {
      this.playKickSound();
      this.ball.increaseVelocity();
    });
    this.physics.add.collider(this.playerA, this.playerB);
    this.physics.add.collider(this.ball, this.soccer_goal_a, () => {
      this.restart();
      this.scoreB++;
      this.score.setText(this._getScoreText());
    });
    this.physics.add.collider(this.ball, this.soccer_goal_b, () => {
      this.restart();
      this.scoreA++;
      this.score.setText(this._getScoreText());
    });
  }

  restart() {
    this.sound.stopAll();
    this.sound.play('gol');
    this.ball.setPosition(400, 300);
    this.ball.setVelocity(0, 0);
    this.playerA.setPosition(400, 70).reset();
    this.playerB.setPosition(400, 550).reset();
    this.countDown.setText('5');
    this.countDown.finished = false;
    this.countDown.start();
  }

  override update() {
    if (this.countDown.finished) {
      this.playerA.handleMovement(this.ball);
    }
  }
}

export { MainScene };
