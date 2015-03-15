/**
 * code for title menu
 * click handler
 */

function loadTitle() {
	clearGame();

	var titleScreen = load.getResult("title");


	var title = new createjs.Bitmap(titleScreen);
	console.log(title);
	title.x = 0;
	title.y = 0;
	title.scaleX = canvasWidth/titleScreen.width;
	title.scaleY = canvasHeight/titleScreen.height;

	 var text = new createjs.Text("Press Start", "20px Arial", "#ff7700");
	 text.x = 100;
	 text.y = 100;
	 text.textBaseline = "alphabetic";

	gameStage.addChild(title);
	var c = new createjs.Container();
	c.addChild(text);
	gameStage.addChild(text);
	gameStage.update();

	var titleClickListener = function(e) {
		gameStage.removeAllChildren();
		loadGame();
		this.removeEventListener("click", titleClickListener);
	}

	document.getElementById("c").addEventListener("click", titleClickListener);
	document.addEventListener("keypress", titleClickListener);
}

function loadGame() {
	clearGame();

	gameStage.addChild(shipContainer, colorContainer, whiteContainer, overlayContainer);

	player = new Player(canvasWidth/2, 2*canvasHeight/3);
	shipContainer.addChild(player.animations);

	boss = new DDP3(canvasWidth/2, canvasHeight/3);
	shipContainer.addChild(boss.animations);

	score = new createjs.Text(gameState.score, "20px Arial", "#ff0000");
	score.x = canvasWidth - 100;
	score.y = 0;

	overlayContainer.addChild(score);

	if(boss) {

		bossHp.graphics.beginStroke("grey").beginFill("green").drawRect(20, 20, 250*boss.hp/boss.maxhp, 25).endFill();
		overlayContainer.addChild(bossHp);
	}


	createjs.Ticker.addEventListener("tick", handleTick);
	createjs.Ticker.useRAF = true;
	createjs.Ticker.setFPS(60);
}

/**
 * game is still running, but clears screen and enemies
 */
function clearGame() {
	gameStage.removeAllChildren();
	gameStage.removeAllEventListeners();
	whiteContainer.removeAllChildren();
	colorContainer.removeAllChildren();
	shipContainer.removeAllChildren();
	overlayContainer.removeAllChildren();

	enemyList.clear();

	player = null;
}
/**
 * game is over, reset everything
 */
function resetGame() {

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