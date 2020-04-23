const b_gap = 10;
const buttons = [
    {img:'img/button1.png', w:134, h:72, x:b_gap, y:0, speechImg:'img/speech1.png'},
    {img:'img/button2.png', w:72, h:72, x:134+b_gap, y:0, speechImg:'img/speech2.png'},
    {img:'img/button3.png', w:72, h:72, x:134+72+b_gap, y:0, speechImg:'img/speech3.png'},
    {img:'img/button4.png', w:72, h:72, x:134+72+72+b_gap, y:0, speechImg:'img/speech4.png'},
    {img:'img/button5.png', w:72, h:72, x:b_gap, y:60+b_gap, speechImg:'img/speech5.png'},
    {img:'img/button6.png', w:72, h:72, x:72+b_gap, y:60+b_gap, speechImg:'img/speech6.png'},
    {img:'img/button7.png', w:72, h:72, x:(72*2)+b_gap, y:60+b_gap, speechImg:'img/speech7.png'},
    {img:'img/button8.png', w:72, h:72, x:(72*3)+b_gap, y:60+b_gap, speechImg:'img/speech8.png'},
    {img:'img/button9.png', w:72, h:72, x:(72*4)+b_gap, y:60+b_gap, speechImg:'img/speech9.png'},
    {img:'img/button10.png', w:72, h:72, x:b_gap, y:(65*2)+b_gap, speechImg:'img/speech10.png'},
    {img:'img/button11.png', w:72, h:72, x:72+b_gap, y:(65*2)+b_gap, speechImg:'img/speech11.png'},
    {img:'img/button12.png', w:72, h:72, x:(72*2)+b_gap, y:(65*2)+b_gap, speechImg:'img/speech12.png'},
    {img:'img/button13.png', w:72, h:72, x:(72*3)+b_gap, y:(65*2)+b_gap, speechImg:'img/speech13.png'},
    {img:'img/button14.png', w:72, h:72, x:(72*4)+b_gap, y:(65*2)+b_gap, speechImg:'img/speech14.png'},
    {img:'img/button15.png', w:72, h:72, x:(72*4)+b_gap, y:(70*3)+b_gap, speechImg:'img/speech15.png'},
    {img:'img/button16.png', w:72, h:72, x:b_gap, y:(70*3)+b_gap, speechImg:'img/speech16.png'},
    {img:'img/button17.png', w:72, h:72, x:72+b_gap, y:(70*3)+b_gap, speechImg:'img/speech17.png'},
    {img:'img/button18.png', w:72, h:72, x:(72*2)+b_gap, y:(70*3)+b_gap, speechImg:'img/speech18.png'},
    {img:'img/button19.png', w:72, h:72, x:(72*3)+b_gap, y:(70*3)+b_gap, speechImg:'img/speech19.png'},
    {img:'img/button20.png', w:72, h:72, x:(72*4)+b_gap, y:(70*3)+b_gap, speechImg:'img/speech20.png'},
];

const codes = [
    "012",
    "0334",
    "0112",
]

var startTexture = PIXI.Texture.from('img/start1.png');
var startTextureDown = PIXI.Texture.from('img/start3.png');
var startTextureOver = PIXI.Texture.from('img/start2.png');

var pauseTexture = PIXI.Texture.from('img/pause1.png');
var pauseTextureDown = PIXI.Texture.from('img/pause3.png');
var pauseTextureOver = PIXI.Texture.from('img/pause2.png');

var aboutTexture = PIXI.Texture.from('img/about1.png');
var aboutTextureDown = PIXI.Texture.from('img/about3.png');
var aboutTextureOver = PIXI.Texture.from('img/about2.png');

var okTexture = PIXI.Texture.from('img/ok1.png');
var okTextureDown = PIXI.Texture.from('img/ok2.png');
var okTextureOver = PIXI.Texture.from('img/ok3.png');

var startgameTexture = PIXI.Texture.from('img/startpurple1.png');
var startgameTextureDown = PIXI.Texture.from('img/startpurple2.png');
var startgameTextureOver = PIXI.Texture.from('img/startpurple2.png');

var cancelTexture = PIXI.Texture.from('img/cancel1.png');
var cancelTextureDown = PIXI.Texture.from('img/cancel2.png');
var cancelTextureOver = PIXI.Texture.from('img/cancel2.png');

var abtnextTexture = PIXI.Texture.from('img/abtnext1.png');
var abtnextTextureDown = PIXI.Texture.from('img/abtnext3.png');
var abtnextTextureOver = PIXI.Texture.from('img/abtnext2.png');

const style40 = new PIXI.TextStyle({
    fontSize: 40,
    fontFamily: 'Courier',
    fill: 0x4A4879
});

const style20 = new PIXI.TextStyle({
    fontSize: 20,
    fontFamily: 'Courier',
    fill: 0x4A4879
});

class GameScene extends Scene {

    constructor() {
       
        super();
        const $this = this;
        this.timer;
        this.playing = true;
        this.c = 0;
        this.people = [];
        this.selectedPerson;
        this.score = 0;
        this.input = "";
        this.inputContainer = new PIXI.Container();
        this.buttons();


        PIXI.sound.add('fail', 'sound/fail.mp3');
        PIXI.sound.add('correct', 'sound/correct.mp3');
        
        this.startButton = new PIXI.Sprite(startTexture);
        this.startButton.anchor.set(0.5);
        this.startButton.x = 1100;
        this.startButton.y = 27;
        this.startButton.interactive = true;
        this.startButton.buttonMode = true;
        this.startButton.normal = startTexture;
        this.startButton.over = startTextureOver;
        this.startButton.down = startTextureDown;
        this.startButton.on('pointerdown', this.onButtonDown);
        this.startButton.on('pointerup', this.onButtonUp);
        this.startButton.on('pointerover', this.onButtonOver);
        this.startButton.on('pointerout', this.onButtonOut);
        this.addChild(this.startButton);

        this.pauseButton = new PIXI.Sprite(pauseTexture);
        this.pauseButton.anchor.set(0.5);
        this.pauseButton.x = 1150;
        this.pauseButton.y = 27;
        this.pauseButton.interactive = true;
        this.pauseButton.buttonMode = true;
        this.pauseButton.normal = pauseTexture;
        this.pauseButton.over = pauseTextureOver;
        this.pauseButton.down = pauseTextureDown;
        this.pauseButton.on('pointerdown', this.onButtonDown);
        this.pauseButton.on('pointerup', this.onButtonUp);
        this.pauseButton.on('pointerover', this.onButtonOver);
        this.pauseButton.on('pointerout', this.onButtonOut);
        this.addChild(this.pauseButton);
         this.pauseButton.on('pointerdown', function() {
            $this.addChild($this.pauseContainer);
            });

        this.pauseContainer = new PIXI.Container();

        this.rect = new PIXI.Graphics();
        this.rect.beginFill(0xEAC21D);
        this.rect.drawRect(0, 0, 1300, 800);
        this.rect.alpha = 0.75;
        this.rect.endFill();
        this.addChild(this.rect);

        this.pauseContainer.addChild(this.rect);
    

        this.aboutButton = new PIXI.Sprite(aboutTexture);
        this.aboutButton.anchor.set(0.5);
        this.aboutButton.x = 1200;
        this.aboutButton.y = 27;
        this.aboutButton.interactive = true;
        this.aboutButton.buttonMode = true;
        this.aboutButton.normal = aboutTexture;
        this.aboutButton.over = aboutTextureOver;
        this.aboutButton.down = aboutTextureDown;
        this.aboutButton.on('pointerdown', this.onButtonDown);
        this.aboutButton.on('pointerup', this.onButtonUp);
        this.aboutButton.on('pointerover', this.onButtonOver);
        this.aboutButton.on('pointerout', this.onButtonOut);
        this.addChild(this.aboutButton);
        this.aboutButton.on('pointerdown', function() {
            $this.addChild($this.aboutContainer);

            });

        this.aboutContainer = new PIXI.Container();
        this.aboutbg = new PIXI.Sprite.from('img/aboutbg.png');
        this.aboutbg.x =0;
        this.aboutbg.y =0;
        this.aboutbg.width = 1300;
        this.aboutbg.height = 800;

        this.addChild(this.aboutbg);

        this.abtnextButton = new PIXI.Sprite(abtnextTexture);
        this.abtnextButton.anchor.set(0.5);
        this.abtnextButton.x = 1200;
        this.abtnextButton.y = 700;
        this.abtnextButton.interactive = true;
        this.abtnextButton.buttonMode = true;
        this.abtnextButton.normal = abtnextTexture;
        this.abtnextButton.over = abtnextTextureOver;
        this.abtnextButton.down = abtnextTextureDown;
        this.abtnextButton.on('pointerdown', this.onButtonDown);
        this.abtnextButton.on('pointerup', this.onButtonUp);
        this.abtnextButton.on('pointerover', this.onButtonOver);
        this.abtnextButton.on('pointerout', this.onButtonOut);
        this.addChild(this.abtnextButton);

        
        this.aboutContainer.addChild(this.aboutbg);
        this.aboutContainer.addChild(this.abtnextButton);
        this.abtnextButton.on('pointerdown', function() {
            $this.removeChild($this.aboutContainer);
        })
        

        //testing adding text
        this.timerText = new PIXI.Text('03:00', style40);
        this.timerText.x = 50;
        this.timerText.y = 80;
        this.addChild(this.timerText);


        this.scoreText = new PIXI.Text(this.score, style40);
        this.scoreText.x = 1050;
        this.scoreText.y = 80;
        this.addChild(this.scoreText);
    
        this.h1 = new PIXI.Text('Time Remaining', style20);
        this.h1.x = 50;
        this.h1.y = 55;
        this.addChild(this.h1);

        this.h2 = new PIXI.Text('Popularity Score', style20);
        this.h2.x = 1050;
        this.h2.y = 55;
        this.addChild(this.h2);

        this.line = new PIXI.Graphics();
        this.line.lineStyle(2, 0x4A4879, 1);
        this.line.position.x = 0;
        this.line.position.y = 450;
        this.line.moveTo(0,5);
        this.line.lineTo(1300, 5);
        this.addChild(this.line);

        this.speechContainer = new PIXI.Container();

        this.tweetButton = new Button('img/sendbutton.png');
        this.tweetButton.x = 840;
        this.tweetButton.y = 700;
        this.tweetButton.width = 130;
        this.tweetButton.height = 50;
        this.tweetButton.on('pointerdown', function() {
            $this.submitCode();
        });

        this.cancelButton = new PIXI.Sprite(cancelTexture);
        this.cancelButton.anchor.set(0.5);
        this.cancelButton.x = 385;
        this.cancelButton.y = 525;
        this.cancelButton.interactive = true;
        this.cancelButton.buttonMode = true;
        this.cancelButton.normal = cancelTexture;
        this.cancelButton.over = cancelTextureOver;
        this.cancelButton.down = cancelTextureDown;
        this.cancelButton.on('pointerdown', function() {
            while($this.inputContainer.children[0]) { 
                $this.inputContainer.removeChild($this.inputContainer.children[0]); 
            }
            $this.input = "";
        });
        this.cancelButton = new PIXI.Sprite(cancelTexture);
        this.cancelButton.anchor.set(0.5);
        this.cancelButton.x = 410;
        this.cancelButton.y = 525;
        this.cancelButton.interactive = true;
        this.cancelButton.buttonMode = true;
        this.cancelButton.normal = cancelTexture;
        this.cancelButton.over = cancelTextureOver;
        this.cancelButton.down = cancelTextureDown;
        this.cancelButton.on('pointerdown', function() {
            while($this.inputContainer.children[0]) { 
                $this.inputContainer.removeChild($this.inputContainer.children[0]); 
            }
            $this.input = "";
        });
        this.speechbg = new PIXI.Sprite.from('img/speechbg.png');
        this.speechbg.x = 375;
        this.speechbg.y = 500;
        this.autoresize = true;
        // this.addChild(this.speechbg);

        this.speechContainer.addChild(this.speechbg);
        this.speechContainer.addChild(this.tweetButton);
        this.speechContainer.addChild(this.cancelButton);
        this.speechContainer.addChild(this.inputContainer);    

        this.manual1 = new PIXI.Sprite.from('img/manual1.png');
        this.manual1.anchor.set(0.5);
        this.manual1.x = 1150;
        this.manual1.y = 640;
        this.manual1.width = 250;
        this.manual1.height = 312;
        this.autoresize = true;
        this.addChild(this.manual1);

        this.cyber = new PIXI.Sprite.from('img/cyber.png');
        this.cyber.anchor.set(0.5);
        this.cyber.x = this.width/2;
        this.cyber.y = 200;
        this.cyber.width = 500;
        this.cyber.height = 426;
        // this.autoresize = true;
        this.addChild(this.cyber);

        //this.side = new PIXI.Sprite.from('img/side.png');
        //this.side.anchor.set(0.5);
        //this.side.width = 30;
        //this.side.height = 300;
        //this.side.x = 1285;
        //this.side.y = 150;
        //this.autoresize = true;
        //this.addChild(this.side);

 // 
        
        this.popup1Container = new PIXI.Container();
        this.addChild(this.popup1Container)
        this.popup1 = new PIXI.Graphics();
        this.popup1.lineStyle(2, 0xFF00FF, 1);
        this.popup1.beginFill(0xFFFFFF, 1);
        this.popup1.drawRoundedRect(0, 0, 200, 150, 16);
        this.popup1.endFill();
        this.popup1Container.addChild(this.popup1);

        this.popup1Text = new PIXI.Text();
        this.popup1Text.text = "Select a\ncharacter", style20;
        this.popup1Text.x = (this.popup1Container.width/2) - (this.popup1Text.width/2);;
        this.popup1Text.y = (this.popup1Container.height/2) - (this.popup1Text.height/2);
        this.addChild(this.popup1Text);
        this.popup1Text.style.fontFamily = 'Courier';
        this.popup1Text.style.fontSize = 20;
        this.popup1Text.style.fill = 0x4A4879;

        this.popup1Container.addChild(this.popup1Text);



        this.popup1Container.position.x = 900;
        this.popup1Container.position.y = 200;

        this.okButton = new PIXI.Sprite(okTexture);
        this.okButton.anchor.set(0.5);
        this.okButton.x = (this.popup1Container.width/2);
        this.okButton.y = (this.popup1Container.height/2) + 50;
        this.okButton.interactive = true;
        this.okButton.buttonMode = true;
        this.okButton.normal = okTexture;
        this.okButton.over = okTextureOver;
        this.okButton.down = okTextureDown;
        this.okButton.on('pointerdown', this.onButtonDown);
        this.okButton.on('pointerup', this.onButtonUp);
        this.okButton.on('pointerover', this.onButtonOver);
        this.okButton.on('pointerout', this.onButtonOut);
        this.addChild(this.okButton);

        this.popup1Container.addChild(this.okButton);

        this.okButton.on('pointerdown', function() {
            $this.removeChild($this.popup1Container);
            $this.addChild($this.popup2Container);

            });


        this.popup2Container = new PIXI.Container();
        this.popup2 = new PIXI.Graphics();
        this.popup2.lineStyle(2, 0xFF00FF, 1);
        this.popup2.beginFill(0xFFFFFF, 1);
        this.popup2.drawRoundedRect(0, 0, 300, 200, 16);
        this.popup2.endFill();
        this.popup2Container.addChild(this.popup2);

        this.popup2Text = new PIXI.Text();
        this.popup2Text.text = "Based on this manual,\ncreate a tweet for the\ncharacter with the \nsequence";
        this.popup2Text.x = (this.popup2Container.width/2) - (this.popup2Text.width/2);
        this.popup2Text.y = (this.popup2Container.height/2) - (this.popup2Text.height/2);
        this.addChild(this.popup2Text);
        this.popup2Text.style.fontFamily = 'Courier';
        this.popup2Text.style.fontSize = 20;
        this.popup2Text.style.fill = 0x4A4879;

        this.popup2Container.addChild(this.popup2Text);

        this.popup2Container.position.x = 700;
        this.popup2Container.position.y = 480;

        this.okButton = new PIXI.Sprite(okTexture);
        this.okButton.anchor.set(0.5);
        this.okButton.x = (this.popup2Container.width/2);
        this.okButton.y = (this.popup2Container.height/2) + 55;
        this.okButton.interactive = true;
        this.okButton.buttonMode = true;
        this.okButton.normal = okTexture;
        this.okButton.over = okTextureOver;
        this.okButton.down = okTextureDown;
        this.okButton.on('pointerdown', this.onButtonDown);
        this.okButton.on('pointerup', this.onButtonUp);
        this.okButton.on('pointerover', this.onButtonOver);
        this.okButton.on('pointerout', this.onButtonOut);
        this.addChild(this.okButton);

        this.popup2Container.addChild(this.okButton);

        this.okButton.on('pointerdown', function() {
            $this.removeChild($this.popup2Container);
            $this.addChild($this.popup3Container);

            });


        this.popup3Container = new PIXI.Container();
        this.popup3 = new PIXI.Graphics();
        this.popup3.lineStyle(2, 0xFF00FF, 1);
        this.popup3.beginFill(0xFFFFFF, 1);
        this.popup3.drawRoundedRect(0, 0, 400, 300, 16);
        this.popup3.endFill();
        this.popup3Container.addChild(this.popup3);

        this.goalText = new PIXI.Text();
        this.goalText.text = "Goal";
        this.goalText.x = (this.popup3Container.width/2) - (this.goalText.width/2);
        this.goalText.y = 50;
        this.addChild(this.goalText);
        this.goalText.style.fontFamily = 'Courier';
        this.goalText.style.fontSize = 30;
        this.goalText.style.fill = 0x4A4879;

        this.popup3Container.addChild(this.goalText);

        this.popup3Text = new PIXI.Text();
        this.popup3Text.text = "You have 3 minutes to \nearn 88 popularity points \nwith your tweets";
        this.popup3Text.x = (this.popup3Container.width/2) - (this.popup3Text.width/2);
        this.popup3Text.y = (this.popup3Container.height/2) - (this.popup3Text.height/2);
        this.addChild(this.popup3Text);
        this.popup3Text.style.fontFamily = 'Courier';
        this.popup3Text.style.fontSize = 20;
        this.popup3Text.style.fill = 0x4A4879;

        this.popup3Container.addChild(this.popup3Text);

        this.popup3Container.position.x = 450;
        this.popup3Container.position.y = 200;

        this.startgameButton = new PIXI.Sprite(startgameTexture);
        this.startgameButton.anchor.set(0.5);
        this.startgameButton.x = (this.popup3Container.width/2);
        this.startgameButton.y = (this.popup3Container.height/2) + 75;
        this.startgameButton.interactive = true;
        this.startgameButton.buttonMode = true;
        this.startgameButton.normal = startgameTexture;
        this.startgameButton.over = startgameTextureOver;
        this.startgameButton.down = startgameTextureDown;
        this.startgameButton.on('pointerdown', this.onButtonDown);
        this.startgameButton.on('pointerup', this.onButtonUp);
        this.startgameButton.on('pointerover', this.onButtonOver);
        this.startgameButton.on('pointerout', this.onButtonOut);
        this.addChild(this.startgameButton);

        this.popup3Container.addChild(this.startgameButton);

        this.startgameButton.on('pointerdown', function() {
            $this.removeChild($this.popup3Container);
            $this.startTimer(3000);
            $this.spawn();
        });

        this.popuploseContainer = new PIXI.Container();
        this.popuplose = new PIXI.Graphics();
        this.popuplose.lineStyle(2, 0xFF00FF, 1);
        this.popuplose.beginFill(0xFFFFFF, 1);
        this.popuplose.drawRoundedRect(0, 0, 400, 300, 16);
        this.popuplose.endFill();
        this.popuploseContainer.addChild(this.popuplose);

        this.lose1Text = new PIXI.Text();
        this.lose1Text.text = "You Lose";
        this.lose1Text.x = (this.popuploseContainer.width/2) - (this.lose1Text.width/2);
        this.lose1Text.y = 50;
        this.addChild(this.lose1Text);
        this.lose1Text.style.fontFamily = 'Courier';
        this.lose1Text.style.fontSize = 30;
        this.lose1Text.style.fill = 0x4A4879;

        this.popuploseContainer.addChild(this.lose1Text);

        this.popuploseText = new PIXI.Text();
        this.popuploseText.text = "You fail to influence enough\npeople with your tweet.\nStart again!";
        this.popuploseText.x = (this.popuploseContainer.width/2) - (this.popuploseText.width/2);
        this.popuploseText.y = (this.popuploseContainer.height/2) - (this.popuploseText.height/2);
        this.addChild(this.popuploseText);
        this.popuploseText.style.fontFamily = 'Courier';
        this.popuploseText.style.fontSize = 20;
        this.popuploseText.style.fill = 0x4A4879;

        this.popuploseContainer.addChild(this.popuploseText);

        this.popuploseContainer.position.x = 450;
        this.popuploseContainer.position.y = 200;

        this.startgameButton = new PIXI.Sprite(startgameTexture);
        this.startgameButton.anchor.set(0.5);
        this.startgameButton.x = (this.popuploseContainer.width/2);
        this.startgameButton.y = (this.popuploseContainer.height/2) + 75;
        this.startgameButton.interactive = true;
        this.startgameButton.buttonMode = true;
        this.startgameButton.normal = startgameTexture;
        this.startgameButton.over = startgameTextureOver;
        this.startgameButton.down = startgameTextureDown;
        this.startgameButton.on('pointerdown', this.onButtonDown);
        this.startgameButton.on('pointerup', this.onButtonUp);
        this.startgameButton.on('pointerover', this.onButtonOver);
        this.startgameButton.on('pointerout', this.onButtonOut);
        this.addChild(this.startgameButton);

        this.popuploseContainer.addChild(this.startgameButton);

        this.startgameButton.on('pointerdown', function() {
            //$this.removeChild($this.popuploseContainer);
            //$this.startTimer(60 * 3);
            //$this.spawn();

            });
       
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


    submitCode() {
        const $this = this;
        if(!this.selectedPerson) return;
        // for(var p of this.people) {
            if(this.input == this.selectedPerson.type) {
                // alert('cool');
                console.log(this.selectedPerson)
                this.removeChild(this.selectedPerson.sprite);
                // this.people.splice(p.i, 1);
                this.score += 8;
                this.scoreText.text = this.score;
                this.spawn();
                PIXI.sound.play('correct');
                this.correctText = new PIXI.Text();
                this.correctText.text = this.selectedPerson.messageIfCorrect;
                this.correctText.x = 400;
                this.correctText.y = 640;
                this.addChild(this.correctText);
                this.correctText.style.fontFamily = 'Courier';
                this.correctText.style.fontSize = 20;
                this.correctText.style.fill = 0x4A4879;
                this.selectedPerson = null;
                setTimeout(function() {
                    $this.removeChild($this.correctText);
                    $this.removeChild($this.speechContainer);
                },2000)


            } else {
                //alert('nope');

                this.score -= 3;
                this.scoreText.text = this.score;
                this.poop = new PIXI.Sprite.from('img/poop.png');
                this.poop.width = 115;
                this.poop.height = 115;
                this.poop.x = 625 ;
                this.poop.y = 600;
                this.autoresize = true;
                this.addChild(this.poop);
               
                setTimeout(function() {
                    $this.removeChild($this.poop);
                },2000)
        
                PIXI.sound.play('fail');
            }
        // }

        while(this.inputContainer.children[0]) { 
            this.inputContainer.removeChild(this.inputContainer.children[0]); 
        }

        this.input = "";

    }

    startTimer(duration) {
        console.log("hello");
        const $this = this;
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            $this.timerText.text = minutes + ":" + seconds;
            //display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
                console.log("foofoof");
                console.log($this.score);
                if ( $this.score < 88) {
                    console.log("score correct");
                    $this.addChild($this.popuploseContainer);
                    
                }

                if (this.timerText < 0 && this.score > 88) {
                    $this.addChild($this.popupwinContainer);
                }
            }
        }, 1000);

          
    }


    buttons() {
        const $this = this;
        for(var i=0; i<buttons.length; i++) {
            var button = new Button(buttons[i].img);
            
            button.x = buttons[i].x;
            button.y = 500 + buttons[i].y;
            button.w = 36
            button.h = 36

          
            button.number = i;
            this.addChild(button);
            button.on('pointerdown', function() {
                if(!$this.playing) return;
                $this.typeCode(this);
            });
        }
    }

    typeCode(button) {
        if(this.input.length > 4) return;
        const b = new PIXI.Sprite.from(buttons[button.number].speechImg);
        b.x = this.speechbg.x + (this.input.length * 48) + 100;
        b.y = this.speechbg.y + (this.speechbg.height/2) - 40;
        b.width = 48;
        b.height = 48;
        this.inputContainer.addChild(b);
        this.input+=button.number;
        console.log(this.input);
    }

    spawn() {
        var width = 30;
        var height = 30;
        var coordinates = [
            [730,215],
            [782, 143],
            [794, 207],
            [669, 274],
            [583, 230],
            [750, 155],
            [794, 234],
            [830, 294],
            [760, 169],
            [767, 350],
            [859,366]];
            var choice = ["a","b","c","d"];
        var c = coordinates[Math.floor(Math.random() * 9)];
        var myc =  choice[Math.floor(Math.random() * 4)];
        console.log(myc);
        var p = new Person(c[0],c[1], this.people.length, myc, width, height);
        
    
        console.log(p);
        var s = p.create();
        this.addChild(s);
        this.people.push(p);
        var $this = this;

        s.on('pointerdown', function() {
            // alert(p.type)
            $this.selectedPerson = p;
            $this.addChild($this.speechContainer)

        });
    }



    update() {
        super.update();
        this.c +=1;
    }

}