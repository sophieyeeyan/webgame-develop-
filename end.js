



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

    

    //addToPIXI() {
        //PIXI.Texture.fromVideo('vid/cover.mp4');
        // continue from here ...
    //}

    
}









    	