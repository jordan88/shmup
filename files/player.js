/**
 * 
 */
function Player(x,y) {
	this.x = x;
	this.y = y;

	this.hitbox = {width:4, height:10};
	this.alive = true;

	this.invincible = false;

	this.bulletList = new List();

	this.image = load.getResult("player");

	var img = new Image();
	img.src = this.image.src;

	this.spriteSheet = new createjs.SpriteSheet({
		"images": [this.image],
		"frames": {
			"width": img.width,
			"height": img.height,
			"regX": img.width/2,
			"regY": img.height/2,
			"count": 1
		},
		"animations":{
			"still": {
				"frames": [0],
				"next": "still",
			},
			"movingRight": {
				"frames": [0],
				"next": "movingRight"
			},
			"movingLeft": {
				"frames": [0],
				"next": "movingLeft"
			}
		}
	});

	this.spriteSheetPixel = new createjs.SpriteSheet({
		"images": [load.getResult("pixel")],
		"frames": {
			"width": 1,
			"height": 1,
			"count": 1
		},
		"animations":{
			"still": {
				"frames": [0],
				"next": "still",
			},
			"movingRight": {
				"frames": [0],
				"next": "movingRight"
			},
			"movingLeft": {
				"frames": [0],
				"next": "movingLeft"
			}
		}
	});

	this.sprite = new createjs.Sprite(this.spriteSheet, "still");
	this.spritePixel = new createjs.Sprite(this.spriteSheetPixel, "still");
	this.spritePixel.scaleX = this.hitbox.width;
	this.spritePixel.scaleY = this.hitbox.height;
	this.spritePixel.x = -this.hitbox.width/2;
	this.spritePixel.y = -this.hitbox.height/2;
	this.animations = new createjs.Container();
	this.animations.addChild(this.sprite, this.spritePixel);

	this.animations.x = this.x;
	this.animations.y = this.y;

	var moveListener = function(event) {
		this.x = event.pageX;
		this.y = event.pageY;
		this.animations.x = this.x;
		this.animations.y = this.y;

	}.bind(this);

	document.getElementById("c").addEventListener("mousemove", moveListener);


	var fire = function() {
		if(this.alive) {
			this.bulletList.append(new PlayerShot(this.x, this.y-1, 1,-9,1,1));
			this.bulletList.append(new PlayerShot(this.x, this.y-1, -1,-9,1,1));
			this.bulletList.append(new PlayerShot(this.x, this.y-1, 0,-10,1,1));
			setTimeout(fire, 100);
		}
		
	}.bind(this);

	fire();

	var hitCallback = function() {
		/*
		this.die;
		setTimeout(function() {
			
			gameStage.removeChild(this.explodeSprite);
			player = new Player(this.x, this.y);
			player.invincible = true;

			setTimeout(function() {
				player.invincible = false;
			}, 1000);
		},100);
*/
	}.bind(this);


	this.update = function() {
		removeDeadBullets(this.bulletList);
		
		updateBullets(this.bulletList, [boss], this.collisionCallback);
	};

	this.die = function() {
/*
		var image = load.getResult("player");

		var img = new Image();
		img.src = image.src;

		var explodeSpriteSheet = new createjs.SpriteSheet({
			"images": [image],
			"frames": {
				"width": img.width/5,
				"height": img.height/3,
				"regX": img.width/2,
				"regY": img.height/2,
				"count": 15
			},
			"animations":{
				"explode": {
					"frames": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
					"next": "explode",
				}
			}
		});

		this.explodeSprite = new createjs.Sprite(explodeSpriteSheet, "explode");
		explodeSprite.x = player.x;
		explodeSprite.y = player.y;
		gameStage.addChild(explodeSprite);
		*/
	}
}

Player.prototype.collisionCallback = function() {
	//console.log("Boss hit");
}