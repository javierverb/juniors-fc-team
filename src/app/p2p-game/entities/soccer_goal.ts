class SoccerGoal extends Phaser.GameObjects.Rectangle {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    origin: number
  ) {
    super(scene, x, y, width, height, 0x000000);
    this.setOrigin(0.5, origin);
    scene.add.existing(this);
    this.addPhysics();
  }

  addPhysics() {
    this.scene.physics.add.existing(this, true);
  }
}

export { SoccerGoal };
