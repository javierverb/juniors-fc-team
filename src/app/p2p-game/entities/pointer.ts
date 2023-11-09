import { Countdown } from './countdown';
import { Player } from './player';

class PointerFollower extends Phaser.GameObjects.Container {
  player: Player;
  countdown: Countdown;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    player: Player,
    countdown: Countdown
  ) {
    super(scene, x, y);
    scene.add.existing(this);
    this.player = player;
    this.countdown = countdown;

    // take click for any place of the scene and call the follow method
    this.scene.input.on('pointerdown', () => this.follow());
  }

  private follow() {
    if (this.countdown.finished) {
      // get the pointer axis and move the player to this position with velocity
      const pointer = this.scene.input.activePointer;
      this.player.setVelocityX((pointer.x - this.player.x) * 1.5);
      this.player.setVelocityY((pointer.y - this.player.y) * 1.5);
    }
  }
}

export { PointerFollower };
