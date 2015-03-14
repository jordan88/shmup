/*
	maybe we should place bullets in a global enemyBulletContainer
 */
// constants
var canvasWidth = 400;
var canvasHeight = 600;

// vars that can be initialized
var load = new createjs.LoadQueue(false);

// vars to be initialized
var gameStage = null;
var shipContainer = null;
var bulletContainer = null;
var renderer = null;
var colorContainer = null;
var whiteContainer = null;

// game vars
var player = null;
var boss = null;

// bullet sprite sheets

var whiteSpriteSheet = null;
var colorSpriteSheet = null;
var playerShotSpriteSheet = null;


var keymap = [];

function keyListener(event) {
	if(event.keyCode) {
		keymap[event.keyCode] = event.type == "keydown";
	}
	else if(event.charCode) {
		keymap[event.charCode] = event.type == "keydown";
	}
}

document.addEventListener("keydown", keyListener);
document.addEventListener("keyup", keyListener);

window.onload = function() {
	initBasicVars();

	load.addEventListener("progress", progressHandler);
	load.addEventListener("complete", loadCompleteHandler);

	load.loadManifest([
		{id: "pixel", src: "graphics/pixel.png"},
		{id: "purpleorb", src: "graphics/purpleorb.png"},
		{id: "explosion", src: "graphics/explosion.png"},
		{id: "bullet", src: "graphics/bullet.png"},
		{id: "bullets", src: "graphics/bullets.png"},
		{id: "player", src: "graphics/player.png"},
		{id: "ground1", src: "graphics/ground1.png"},
		{id: "massive", src: "graphics/massive.png"},
		{id: "ddp3", src: "graphics/ddp3.png"},
		{id: "ddp4", src: "graphics/ddp4.png"},
		{id: "ddp5", src: "graphics/ddp5.png"},
		{id: "pinkorb", src: "graphics/pinkorb.png"},
		{id: "blueorb", src: "graphics/blueorb.png"},
		{id: "purpledot", src: "graphics/purpledot.png"},
		{id: "white", src: "graphics/white.png"},
		{id: "center", src: "graphics/center.png"}
	]);
};

// show a load bar or something
function progressHandler(event) {

}

function loadCompleteHandler(event) {
	initAssets();
}

function initBasicVars() {

	gameStage = new createjs.Stage("c");
	gameStage.clear();
	gameStage.snapToPixelEnabled = true;
	shipContainer = new createjs.Container();
	renderer = new Renderer(gameStage);
	colorContainer = new createjs.Container();
	whiteContainer = new createjs.Container();
	gameStage.addChild(shipContainer, colorContainer, whiteContainer);
}

function initAssets() {

	whiteSpriteSheet = new createjs.SpriteSheet({
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

	colorSpriteSheet =  new createjs.SpriteSheet({
		"images": [load.getResult("white")],
		"frames": {
			"width": 16,
			"height": 16,
			"count": 4,
			"regX": 8,
			"regY": 8
		},
		"animations":{
			"blue": {
				"frames": [0],
				"next": "blue"
			},
			"green": {
				"frames": [2],
				"next": "green"
			},
			"purple": {
				"frames": [1],
				"next": "purple"
			},
			"red": {
				"frames": [3],
				"next": "red"
			}
		}
	});

	playerShotSpriteSheet = new createjs.SpriteSheet({
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


	player = new Player(canvasWidth/2, 2*canvasHeight/3);
	boss = new DDP3(canvasWidth/2, canvasHeight/3);
	shipContainer.addChild(boss.animations);
	shipContainer.addChild(player.animations);

	createjs.Ticker.addEventListener("tick", handleTick);
	createjs.Ticker.useRAF = true;
	createjs.Ticker.setFPS(60);
}

function handleTick(event) {
	player.update();
	boss.update();
	gameStage.update();
	whiteContainer.children = [];
	colorContainer.children = [];
}