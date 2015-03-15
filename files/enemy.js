/**
 *  file for all enemy types
 */
function Massive(x, y) {
	this.x = x;
	this.y = y;
	this.hp = 1000000;
	this.bulletSpawns = [
	new BulletSpawn(0,-100, shotgun, this),
	new BulletSpawn(0,0,shotgun, this),
		new BulletSpawn(-50,10,shootAtEm,this), 
		new BulletSpawn(50, 10, shootAtEm, this),
		new BulletSpawn(-40, 20, hose, this),
		new BulletSpawn(40, 20, hose, this)
	//	new BulletSpawn(0,0, circle, this),
	];

	this.invincible = false;

	this.image = load.getResult("massive");

	var img = new Image();
	img.src = this.image.src;

	this.hitbox = {width: img.width, height: img.height};

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

	this.sprite = new createjs.Sprite(this.spriteSheet, "still");

	this.animations = new createjs.Container();
	this.animations.addChild(this.sprite);

	this.animations.x = this.x;
	this.animations.y = this.y;


	var move = function() {
		move.parameter = move.parameter || 0;
		var epsilon = .01;

		this.x = canvasWidth/2 + 50*Math.cos(move.parameter);
		move.parameter += epsilon;
		if(move.parameter >= 2*Math.PI) {
			move.parameter = 0;
		}
	}.bind(this);


	this.update = function() {

		move();
		this.animations.x = this.x;
		this.animations.y = this.y;
		for(var i = 0; i < this.bulletSpawns.length; i++) {
			this.bulletSpawns[i].update([player], this.collisionCallback);
		}

	}
}

Massive.prototype.collisionCallback = function() {
//	console.log("Player hit");
}

function DDP3(x, y) {
	this.x = x;
	this.y = y;
	this.hp = 1000;
	this.maxhp = this.hp;
	this._node;

	this.bulletSpawns = [
		new BulletSpawn(-50,-100,shootAtEm,this), 
		new BulletSpawn(50, -100, shootAtEm, this),
		new BulletSpawn(0,0, hose, this),
		new BulletSpawn(50,0, spinnerFactory(13), this),
		new BulletSpawn(-50,0, spinnerFactory(11), this)
		//new BulletSpawn(0,0, cherryBlossom, this),
		//new BulletSpawn(0,0, circle, this),
	];

	this.invincible = false;

	this.image = load.getResult("ddp3");

	var img = new Image();
	img.src = this.image.src;

	this.hitbox = {width: img.width, height: img.height};

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

	this.sprite = new createjs.Sprite(this.spriteSheet, "still");

	this.animations = new createjs.Container();
	this.animations.addChild(this.sprite);

	this.animations.x = this.x;
	this.animations.y = this.y;


	var move = function() {
		move.parameter = move.parameter || 0;
		var epsilon = .01;

		this.x = canvasWidth/2 + 50*Math.cos(move.parameter);
		move.parameter += epsilon;
		if(move.parameter >= 2*Math.PI) {
			move.parameter = 0;
		}
	}.bind(this);


	this.update = function() {

		move();
		this.animations.x = this.x;
		this.animations.y = this.y;
		for(var i = 0; i < this.bulletSpawns.length; i++) {
			this.bulletSpawns[i].update([player], this.collisionCallback);
		}
	}
	this.destroy = function() {
		shipContainer.removeChild(this.animations);
		enemyList.remove(this._node);
	}
}

DDP3.prototype.collisionCallback = function() {
	console.log("Player hit");
	if(!player.invincible) {
		player.die();
		gameState.lives--;
		if(gameState.lives < 0) {
			resetGame();
		}
		else {
			clearGame();
		}
	}
}

function DDP4(x, y) {
	this.x = x;
	this.y = y;
	this.hp = 10000;

	this.bulletSpawns = [
	new BulletSpawn(0,-100, shotgun, this),
	new BulletSpawn(0,0,shotgun, this),
		new BulletSpawn(-50,10,shootAtEm,this), 
		new BulletSpawn(50, 10, shootAtEm, this),
	//	new BulletSpawn(0,0, circle, this),
	];

	this.invincible = false;

	this.image = load.getResult("ddp4");

	var img = new Image();
	img.src = this.image.src;

	this.hitbox = {width: img.width, height: img.height};

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

	this.sprite = new createjs.Sprite(this.spriteSheet, "still");

	this.animations = new createjs.Container();
	this.animations.addChild(this.sprite);

	this.animations.x = this.x;
	this.animations.y = this.y;


	var move = function() {
		move.parameter = move.parameter || 0;
		var epsilon = .01;

		this.x = canvasWidth/2 + 50*Math.cos(move.parameter);
		move.parameter += epsilon;
		if(move.parameter >= 2*Math.PI) {
			move.parameter = 0;
		}
	}.bind(this);


	this.update = function() {

		move();
		this.animations.x = this.x;
		this.animations.y = this.y;
		if(player) {
			for(var i = 0; i < this.bulletSpawns.length; i++) {
				this.bulletSpawns[i].update([player], this.collisionCallback);
			}

		}
		
	}
}

DDP4.prototype.collisionCallback = function() {
//	console.log("Player hit");
}


function DDP5(x, y) {
	this.x = x;
	this.y = y;
	this.hp = 100000;

	this.bulletSpawns = [
	new BulletSpawn(0,-100, shotgun, this),
	new BulletSpawn(0,0,shotgun, this),
		new BulletSpawn(-50,10,shootAtEm,this), 
		new BulletSpawn(50, 10, shootAtEm, this),
	//	new BulletSpawn(0,0, circle, this),
	];

	this.invincible = false;

	this.image = load.getResult("ddp5");

	var img = new Image();
	img.src = this.image.src;

	this.hitbox = {width: img.width, height: img.height};

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

	this.sprite = new createjs.Sprite(this.spriteSheet, "still");

	this.animations = new createjs.Container();
	this.animations.addChild(this.sprite);

	this.animations.x = this.x;
	this.animations.y = this.y;


	var move = function() {
		move.parameter = move.parameter || 0;
		var epsilon = .01;

		this.x = canvasWidth/2 + 50*Math.cos(move.parameter);
		move.parameter += epsilon;
		if(move.parameter >= 2*Math.PI) {
			move.parameter = 0;
		}
	}.bind(this);


	this.update = function() {

		move();
		this.animations.x = this.x;
		this.animations.y = this.y;
		for(var i = 0; i < this.bulletSpawns.length; i++) {
			this.bulletSpawns[i].update([player], this.collisionCallback);
		}

	}
}

DDP5.prototype.collisionCallback = function() {
	console.log("Player hit");
	
}