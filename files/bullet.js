/**
 *  file for different bullets
 */

function PlayerShot(x,y,vx,vy,width,height) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;

	this.life = 200;

	//this.hitbox = {width: width, height: height};
	

	this.spriteSheet = playerShotSpriteSheet;

	this.sprite = new createjs.Sprite(this.spriteSheet, "spin");
	this.animations = this.sprite;

	this.animations.x = this.x;
	this.animations.y = this.y;

	this.update = function() {


		colorContainer.addChild(this.animations);

		this.x += this.vx;
		this.y += this.vy;

		this.animations.x = this.x;
		this.animations.y = this.y;

		this.life--;
	}

	this.destroy = function() {
		this.life = 0;
		gameStage.removeChild(this.animations);
	}
}
function PurpleDot(x,y,vx,vy,ax, ay, damp) {

	this.damp = damp || 1;

	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.ax = ax;
	this.ay = ay;

	this.life = 1000;

	//this.hitbox = {width: width, height: height};
	

	this.spriteSheet = new createjs.SpriteSheet({
		"images": [load.getResult("purpleorb")],
		"frames": {
			"width": 7,
			"height": 7,
			"count": 1,
			"regX": 4,
			"regY": 4
		},
		"animations":{
			"spin": {
				"frames": [0],
				"next": "spin"
			}
		}
	});

	this.sprite = new createjs.Sprite(this.spriteSheet, "spin");
	this.animations = this.sprite;

	this.animations.x = this.x;
	this.animations.y = this.y;

	this.update = function() {


		colorContainer.addChild(this.animations);

		var epsilon = .001;
		this.ax *= this.damp;
		this.ay *= this.damp;

		if(this.ax < epsilon) {
			this.ax = 0;
		}
		if(this.ay < epsilon) {
			this.ay = 0;
		}

		this.vx += this.ax;
		this.vy += this.ay;

		this.x += this.vx;
		this.y += this.vy;

		this.animations.x = this.x;
		this.animations.y = this.y;

		this.life--;
	}

	this.destroy = function() {
		this.life = 0;
	}
}

function Orb(x,y,vx,vy,ax,ay, color, life, damp) {

	this.damp = damp || 1;
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.ax = ax;
	this.ay = ay;

	this.visible = true;

	this.life = life || 220;


	this.spriteSheet = colorSpriteSheet;
	this.spriteSheet2 = whiteSpriteSheet;

	this.sprite = new createjs.Sprite(this.spriteSheet, color);
	this.sprite2 = new createjs.Sprite(this.spriteSheet2, "spin");


	this.sprite.x = this.x;
	this.sprite.y = this.y;
	this.sprite2.x = this.x;
	this.sprite2.y = this.y;

	this.update = function() {


		colorContainer.addChild(this.sprite);
		whiteContainer.addChild(this.sprite2);

		var epsilon = .001;
		this.ax *= this.damp;
		this.ay *= this.damp;

		if(this.ax < epsilon) {
			this.ax = 0;
		}
		if(this.ay < epsilon) {
			this.ay = 0;
		}

		this.vx += this.ax;
		this.vy += this.ay;

		this.x += this.vx;
		this.y += this.vy;

		this.sprite.x = this.x;
		this.sprite.y = this.y;
		this.sprite2.x = this.x;
		this.sprite2.y = this.y;

		this.life--;
	};

	this.destroy = function() {
		this.life = 0;
	};
}

function MobilePattern(x, y, vx, vy, pattern, list, life) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.bulletList = list;
	this.pattern = pattern;
	this.visible = true;

	this.life = life || 220;

	//this.hitbox = {width: width, height: height};

	this.update = function() {
		this.counter = this.counter || 0;
		this.pattern();
		this.counter++;

		this.x += this.vx;
		this.y += this.vy;

		this.life--;
	};

	this.destroy = function() {
		this.life = 0;
	};
}