class Button {

    constructor(img) {
        this.sprite = new PIXI.Sprite.from(img);
        this.sprite.interactive = true;
        this.sprite.buttonMode = true;
        return this.sprite;
    }

}