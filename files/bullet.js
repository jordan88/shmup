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
	

	this.spriteSheet = new createjs.SpriteSheet({
		"images": [load.getResult("bullet")],
		"frames": {
			"width": 16,
			"height": 16,
			"count": 4,
			"regX": 4,
			"regY": 4
		},
		"animations":{
			"spin": {
				"frames": [0,1,2,3],
				"next": "spin",
				"speed": .2
			}
		}
	});

	this.sprite = new createjs.Sprite(this.spriteSheet, "spin");
	this.animations = this.sprite;
	gameStage.addChild(this.animations);

	this.animations.x = this.x;
	this.animations.y = this.y;

	this.update = function() {
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
function PurpleDot(x,y,vx,vy,width,height) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;

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
				"next": "spin",
				"speed": .2
			}
		}
	});

	this.sprite = new createjs.Sprite(this.spriteSheet, "spin");
	this.animations = this.sprite;
	gameStage.addChild(this.animations);

	this.animations.x = this.x;
	this.animations.y = this.y;

	this.update = function() {
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

function BlueOrb(x,y,vx,vy,width,height) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;

	this.life = 200;

	//this.hitbox = {width: width, height: height};
	

	this.spriteSheet = new createjs.SpriteSheet({
		"images": [load.getResult("white")],
		"frames": {
			"width": 16,
			"height": 16,
			"count": 4,
			"regX": 8,
			"regY": 8
		},
		"animations":{
			"spin": {
				"frames": [0],
				"next": "spin",
				"speed": .2
			}
		}
	});
	this.spriteSheet2 = new createjs.SpriteSheet({
		"images": [load.getResult("center")],
		"frames": {
			"width": 16,
			"height": 16,
			"count": 1,
			"regX": 8,
			"regY": 8
		},
		"animations":{
			"spin": {
				"frames": [0],
				"next": "spin",
			}
		}
	});

	this.sprite = new createjs.Sprite(this.spriteSheet, "spin");
	this.sprite2 = new createjs.Sprite(this.spriteSheet2, "spin");

	colorContainer.addChild(this.sprite);
	whiteContainer.addChild(this.sprite2);

	this.sprite.x = this.x;
	this.sprite.y = this.y;
	this.sprite2.x = this.x;
	this.sprite2.y = this.y;

	this.update = function() {
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
		colorContainer.removeChild(this.sprite);
		whiteContainer.removeChild(this.sprite2);
	};
}

function PinkOrb(x,y,vx,vy,width,height) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;

	this.life = 200;

	//this.hitbox = {width: width, height: height};
	

	this.spriteSheet = new createjs.SpriteSheet({
		"images": [load.getResult("white")],
		"frames": {
			"width": 16,
			"height": 16,
			"count": 4,
			"regX": 8,
			"regY": 8
		},
		"animations":{
			"spin": {
				"frames": [3],
				"next": "spin",
				"speed": .2
			}
		}
	});

	this.spriteSheet2 = new createjs.SpriteSheet({
		"images": [load.getResult("center")],
		"frames": {
			"width": 16,
			"height": 16,
			"count": 1,
			"regX": 8,
			"regY": 8
		},
		"animations":{
			"spin": {
				"frames": [0],
				"next": "spin",
			}
		}
	});

	this.sprite = new createjs.Sprite(this.spriteSheet, "spin");
	this.sprite2 = new createjs.Sprite(this.spriteSheet2, "spin");

	colorContainer.addChild(this.sprite);
	whiteContainer.addChild(this.sprite2);

	this.sprite.x = this.x;
	this.sprite.y = this.y;
	this.sprite2.x = this.x;
	this.sprite2.y = this.y;

	this.update = function() {
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
		colorContainer.removeChild(this.sprite);
		whiteContainer.removeChild(this.sprite2);
	};
}