var scenesManager = new ScenesManager();
 
scenesManager.create(1300, 800);
//antialias: true

var start = scenesManager.createScene('start', StartScene);
var game = scenesManager.createScene('game', GameScene);

scenesManager.goToScene('start');
// scenesManager.goToScene('game');

