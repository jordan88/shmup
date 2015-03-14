/**
 *  all bullets should be emitted and tracked by bulletspawn
 *  rules is an object containing an update function to call and 
 *  
 */
function BulletSpawn(x, y, pattern, owner) {
	this.x = x;
	this.y = y;
	this.pattern = pattern.bind(this);
	this.owner = owner;
	this.bulletList = new List();
	this.counter = 0;

	this.update = function(targetList, callback) {
		removeDeadBullets(this.bulletList);
		updateBullets(this.bulletList, targetList, callback);
		this.pattern();
		this.counter++;
	};
}