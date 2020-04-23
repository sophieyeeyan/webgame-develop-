class ScenesManager {
    
    constructor() {
    	this.scenes = {};
    	this.currentScene = null;
    }

    create(width, height) {
        console.log(width, height)
      	if (this.renderer) return this;
      	const $this = this;
        this.renderer = PIXI.autoDetectRenderer({width:width, height:height, backgroundColor:0xFFFFFF});
        document.body.appendChild(this.renderer.view);
        requestAnimationFrame(function () { $this.loop() });
        return this;
    }

    loop() {
    	const $this = this;
        requestAnimationFrame(function () { $this.loop() });

        if (!this.currentScene) return;
        this.currentScene.update();
        this.renderer.render($this.currentScene);
    }

 	createScene(id, type) {
    	if (this.scenes[id]) return undefined;
 
        var scene = new type();
        this.scenes[id] = scene;

        return scene;
    }

    goToScene(id) {
    	if (this.scenes[id]) {
            if (this.currentScene) this.currentScene.pause();
            this.currentScene = this.scenes[id];
            this.currentScene.resume();
            return true;
        }
        return false;
    }
}