var yellowTexture = PIXI.Texture.from('imgstart/startbutton1.png');
var yellowTextureDown = PIXI.Texture.from('imgstart/startbutton2.png');
var yellowTextureOver = PIXI.Texture.from('imgstart/startbutton3.png');

//var coverTexture = PIXI.Texture.fromVideo('vid/cover.mp4');
//let cover = new PIXI.Sprite(coverTexture);

//let videoSource = texture.baseTexture.resource.source;
//console.warn(texture.baseTexture)


//var videoSprite = new PIXI.Sprite(coverTexture);
//var source = coverTexture.baseTexture.source;



const styleXXX = new PIXI.TextStyle({
    fontSize: 40,
    fontFamily: 'Courier',
    fill: 0x4A4879
});

const styleXXXX = new PIXI.TextStyle({
    fontSize: 20,
    fontFamily: 'Courier',
    fill: 0x4A4879
});

class StartScene extends Scene {

    constructor() {
    	super();
        const $this = this;


        this.startgameButton = new PIXI.Sprite(yellowTexture);
        this.startgameButton.anchor.set(0.5);
        this.startgameButton.x = 500;
        this.startgameButton.y = 400;
        this.startgameButton.interactive = true;
        this.startgameButton.buttonMode = true;
        this.startgameButton.normal = yellowTexture;
        this.startgameButton.over = yellowTextureOver;
        this.startgameButton.down = yellowTextureDown;
        this.startgameButton.on('pointerdown', this.onButtonDown);
        this.startgameButton.on('pointerup', this.onButtonUp);
        this.startgameButton.on('pointerover', this.onButtonOver);
        this.startgameButton.on('pointerout', this.onButtonOut);
        this.addChild(this.startgameButton);
        this.startgameButton.on('pointerdown', function() {
            $this.onPlayVideo1
        });
        

        //this.cover = new PIXI.Sprite(coverTexture);
        


        //this.coverSprite.width = 1300;
        //this.coverSprite.height = 800;
        //this.cover.video.autoplay = true;
        //this.cover.video.loop = true; 
        //this.cover.video.oncanplay = addToPIXI;
       //this.addChild(this.coverSprite);



    }

     onButtonDown() {
        this.isdown = true;
        this.texture = this.down;
        this.alpha = 1;
    }

    onButtonUp() {
        this.isdown = false;
        if (this.isOver) {
            this.texture = this.over;
        }
        else {
            this.texture = this.normal;
        }
    }

    onButtonOver() {
        this.isOver = true;
        if (this.isdown) {
            return;
        }
        this.texture = this.over;
    }

    onButtonOut() {
        this.isOver = false;
        if (this.isdown) {
            return;
        }
        this.texture = this.normal;
    }

    onPlayVideo1() {
    // Don't need the button anymore
        this.startgameButton.destroy();


        // create a video texture from a path
        const covertexture = PIXI.Texture.from('vid/cover.mp4');

        // create a new Sprite using the video texture (yes it's that easy)
        const videoSprite = new PIXI.Sprite(covertexture);

        // Stetch the fullscreen
        videoSprite.width = 1300;
        videoSprite.height = 800;

        this.addChild(videoSprite);
    }


    //addToPIXI() {
        //PIXI.Texture.fromVideo('vid/cover.mp4');
        // continue from here ...
    //}

    
}









    	