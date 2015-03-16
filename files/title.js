/**
 * well this degenerated quickly into a mess. 
 */

function loadTitle() {

	var titleScreen = load.getResult("title");


	var title = new createjs.Bitmap(titleScreen);
	title.x = 0;
	title.y = 0;
	title.scaleX = canvasWidth/titleScreen.width;
	title.scaleY = canvasHeight/titleScreen.height;

	 var text = new createjs.Text("Click to Start", "20px Arial", "#ff7700");
	 text.x = canvasWidth/2 - 50;
	 text.y = 100;
	 text.textBaseline = "alphabetic";

	gameStage.addChild(title);
	var c = new createjs.Container();
	c.addChild(text);
	gameStage.addChild(text);
	gameStage.update();

	var titleClickListener = function(e) {
		this.removeEventListener("click", titleClickListener);
		gameStage.removeAllChildren();
		loadGame();
	}

	document.getElementById("c").addEventListener("click", titleClickListener);
}


function loadGame() {

	gameState = {
		lives: numLives,
		stage: 1,
		score: 0
	};

	gameState.lives--;

	bossList = [
		new DDP3(canvasWidth/2, canvasHeight/3),
		new Massive(canvasWidth/2, canvasHeight/3),
		new DDP4(canvasWidth/2, canvasHeight/3),
		new DDP5(canvasWidth/2, canvasHeight/3)
	];

	loadNextBoss();

}


function handleTick(event) {
	if(player) player.update();
	boss.update();
	overlayUpdate();
	gameStage.update();
	whiteContainer.children = [];
	colorContainer.children = [];
}

function clearForNext() {
	enemyList.clear();
	boss = null;
	gameStage.removeAllChildren();
	gameStage.removeAllEventListeners();
	whiteContainer.removeAllChildren();
	colorContainer.removeAllChildren();
	shipContainer.removeAllChildren();
	overlayContainer.removeAllChildren();
}

/**
 * game is still running, but clears screen and enemies to go to next level
 */
function playerDead() {

	shipLivesContainer.removeAllChildren();
	for(var i = 0; i < gameState.lives; i++) {
		var sprite = new createjs.Sprite(playerSpriteSheet, "still");
		sprite.scaleX = .5;
		sprite.scaleY = .5;

		sprite.x = i*25;
		sprite.y = 0;

		shipLivesContainer.addChild(sprite);
	}


	var x = player.x;
	var y = player.y;


	shipContainer.removeChild(player.animations);

	player = null;

	function showPlayerAgain() {
		player = new Player(x,y);
		shipContainer.addChild(player.animations);
	}

	setTimeout(showPlayerAgain, 2000)
}

function removeEverything() {
	createjs.Ticker.removeEventListener("tick", handleTick);

	enemyList.clear();
	boss = null;
	gameStage.removeAllChildren();
	gameStage.removeAllEventListeners();
	whiteContainer.removeAllChildren();
	colorContainer.removeAllChildren();
	shipContainer.removeAllChildren();
	overlayContainer.removeAllChildren();

}

/**
 * game is over, reset everything
 */
function gameOver() {


	shipContainer.removeChild(player.animations);

	player = null;


	setTimeout(function() {
		removeEverything
		loadTitle();
	}, 2000);
	
}

/**
 * function to update overlay, reads player lives and score and boss hp
 */
function overlayUpdate() {
	score.text = gameState.score;
	if(boss) {
		bossHp.graphics.clear();
		bossHp.graphics.beginStroke("grey").drawRect(20,20,250,25).beginFill("grey").drawRect(20,20,250,25).beginFill("green").drawRect(20, 20, 250*boss.hp/boss.maxhp, 25);
	}
}

function loadNextBoss() {
	if(bossList.length === 0) {
		winner();
	}
	else {
		clearForNext();

		boss = bossList[0];
		bossList.shift();

		gameStage.addChild(shipContainer, colorContainer, whiteContainer, overlayContainer);


		shipContainer.addChild(boss.animations);

		player = new Player(canvasWidth/2, 2*canvasHeight/3);
		shipContainer.addChild(player.animations);


		score.text = gameState.score;
		score.x = canvasWidth - 100;
		score.y = 0;

		overlayContainer.addChild(score);

		
		shipLivesContainer.x = 25;
		shipLivesContainer.y = canvasHeight - 25;

		for(var i = 0; i < gameState.lives; i++) {
			var sprite = new createjs.Sprite(playerSpriteSheet, "still");
			sprite.scaleX = .5;
			sprite.scaleY = .5;

			sprite.x = i*25;
			sprite.y = 0;

			shipLivesContainer.addChild(sprite);
		}
		overlayContainer.addChild(shipLivesContainer);

		if(boss) {

			bossHp.graphics.beginStroke("grey").beginFill("green").drawRect(20, 20, 250*boss.hp/boss.maxhp, 25).endFill();
			overlayContainer.addChild(bossHp);
		}

		createjs.Ticker.addEventListener("tick", handleTick);
		createjs.Ticker.useRAF = true;
		createjs.Ticker.setFPS(60);
	}
}

function checkIfPlayerDeadAndTakeAction() {
	if(!player.invincible) {
		player.die();
		gameState.lives--;
		if(gameState.lives < 0) {
			gameOver();
		}
		else {
			playerDead();
		}
	}
}

function winner() {
	console.log("you a winner");
	removeEverything();

	var endingScreen = load.getResult("ending");


	var endTitle = new createjs.Bitmap(endingScreen);
	endTitle.x = 0;
	endTitle.y = 0;
	endTitle.scaleX = canvasWidth/endingScreen.width;
	endTitle.scaleY = canvasHeight/endingScreen.height;

	 var text = new createjs.Text("Your score is " + gameState.score, "20px Arial", "#ff7700");
	 text.x = canvasWidth/2 - 50;
	 text.y = canvasHeight - 100;
	 text.textBaseline = "alphabetic";

	gameStage.addChild(endTitle);
	var c = new createjs.Container();
	c.addChild(text);
	gameStage.addChild(text);
	gameStage.update();

	var endTitleClickListener = function(e) {
	this.removeEventListener("click", endTitleClickListener);
	gameStage.removeAllChildren();
	loadTitle();
	}

	document.getElementById("c").addEventListener("click", endTitleClickListener);
}