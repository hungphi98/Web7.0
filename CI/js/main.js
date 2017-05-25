var Nakama = {};
Nakama.configs = {
  PLAYER_SPEED      : 10,
  BACKGROUND_SPEED  : 5
};

window.onload = function(){
  Nakama.game = new Phaser.Game(640,960,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.background = Nakama.game.add.tileSprite(0, 0, 640, 960, 'background');

  Nakama.player = new ShipController(300, 400, 'Spaceship1-Player.png', {
    UP    : Phaser.Keyboard.UP,
    DOWN  : Phaser.Keyboard.DOWN,
    LEFT  : Phaser.Keyboard.LEFT,
    RIGHT : Phaser.Keyboard.RIGHT,
    FIRE  : Phaser.Keyboard.CONTROL
});

  Nakama.partner = new ShipController(400, 400, 'Spaceship1-Partner.png', {
    UP    : Phaser.Keyboard.W,
    DOWN  : Phaser.Keyboard.S,
    LEFT  : Phaser.Keyboard.A,
    RIGHT : Phaser.Keyboard.D,
    FIRE  : Phaser.Keyboard.SPACEBAR
});

 /* Nakama.bullet = new BulletController(300,400,'BulletType1.png',Nakama.player);
  Nakama.bullet2 = new BulletController(600,400,'BulletType2.png',Nakama.partner);
  */
}

// update game state each frame
var update = function(){

  Nakama.background.tilePosition.y += Nakama.configs.BACKGROUND_SPEED;

  Nakama.player.update('BulletType1.png');

  Nakama.partner.update('BulletType2.png');


}

// before camera render (mostly for debug)
var render = function(){}
