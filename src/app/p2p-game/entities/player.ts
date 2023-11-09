import * as Phaser from 'phaser';
import players from '@app/players';
import { Ball } from './ball';

class Player extends Phaser.Physics.Arcade.Sprite {
  whoIAM: string;

  constructor(scene: Phaser.Scene, x: number, y: number, whoIAM: string) {
    const playerName = players[Math.floor(Math.random() * players.length)].name;
    super(scene, x, y, playerName);
    this.setDisplaySize(100, 100);
    this.whoIAM = whoIAM;
    scene.add.existing(this);
    this.addPhysics();
  }

  // add physics to the player
  addPhysics() {
    this.scene.physics.add.existing(this);
    this.setBounce(0.2);
    this.setCollideWorldBounds(true);
  }

  handleMovement(ball: Ball) {
    // just follow the ball coordinates using velocity
    this.setVelocityX((ball.x - this.x) * 1.1);
    this.setVelocityY((ball.y - this.y) * 1.1);
  }

  reset() {
    this.setVelocity(0, 0);
  }
}

export { Player };
