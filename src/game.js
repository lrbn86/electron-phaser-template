const config = {
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200},
      debug: false,
    }
  }
};

new Phaser.Game(config);

function preload() {
  this.load.image('ball', './assets/ball.png');
}

function create() {
  player = this.physics.add.sprite(config.width / 2, config.height / 2, 'ball');
  player.setCollideWorldBounds(true);
  player.setBounce(1);
}

function update() {
}
