import * as Phaser from 'phaser';

class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'ball');
    scene.add.existing(this);
    this.setDisplaySize(50, 50);
    this.addPhysics();
  }

  // add physics to the ball
  addPhysics() {
    this.scene.physics.add.existing(this);
    this.setBounce(1);
    this.setCollideWorldBounds(true);
  }

  increaseVelocity() {
    // increase velocity in 1%
    this.setVelocityX(this.body.velocity.x * 1.01);
    this.setVelocityY(this.body.velocity.y * 1.01);
  }
}

export { Ball };
