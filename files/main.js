/*
 */
// constants
var canvasWidth = 400;
var canvasHeight = 600;

// vars that can be initialized
var load = new createjs.LoadQueue(false);

// vars to be initialized
var gameStage = null;
var titleStage = null;
var shipContainer = null;
var bulletContainer = null;
var renderer = null;
var colorContainer = null;
var whiteContainer = null;
var overlayContainer = null;

// game vars
var player = null;
var boss = null;
var bossList = [];
var enemyList = null;
var gameState = null;
var numLives = 10;
var score = null;
var bossHp = null;
var shipLivesContainer = null;
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
		{id: "title", src: "graphics/title.png"},
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
	loadTitle();
}

function initBasicVars() {

	gameStage = new createjs.Stage("c");
	gameStage.clear();
	gameStage.snapToPixelEnabled = true;
	shipContainer = new createjs.Container();
	renderer = new Renderer(gameStage);
	colorContainer = new createjs.Container();
	whiteContainer = new createjs.Container();
	overlayContainer = new createjs.Container();
	enemyList = new List();
	score = new createjs.Text(0, "20px Arial", "#ff0000");
	bossHp = new createjs.Shape();
	shipLivesContainer = new createjs.Container();
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


	var loadimage = load.getResult("player");

	var img = new Image();
	img.src = loadimage.src;

	playerSpriteSheet = new createjs.SpriteSheet({
		"images": [loadimage],
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
}
