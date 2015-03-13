/**
 * heres what renderer will do, it will construct and draw the background, it will draw enemyships then draw player then draw bullets
 */
function Renderer(stage) {
	this.stage = stage;

	this.backgroundContainer = new createjs.Container();
	this.shipContainer = new createjs.Container();
	this.bulletContainer1 = new createjs.Container();
	this.bulletContainer2 = new createjs.Container();

	this.addBullets = function(list) {

	}
}