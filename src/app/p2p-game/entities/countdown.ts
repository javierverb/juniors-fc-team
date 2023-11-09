import * as Phaser from 'phaser';

class Countdown extends Phaser.GameObjects.Text {
  finished = false;

  constructor(scene: Phaser.Scene, x: number, y: number, value: string) {
    super(scene, x, y, value, {
      fontSize: '64px',
      color: '#000000',
    });
    scene.add.existing(this);
    this.setOrigin(0.5, 0.5);
    this.setDepth(3);
  }
  start() {
    this.scene.time.addEvent({
      delay: 1000,
      callback: () => {
        this.setText((parseInt(this.text) - 1).toString());
        if (parseInt(this.text) > 0) {
          this.start();
        } else {
          this.finished = true;
        }
      },
    });
  }
}

export { Countdown };
