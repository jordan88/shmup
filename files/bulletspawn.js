/**
 *  all bullets should be emitted and tracked by bulletspawn
 *  rules is an object containing an update function to call and 
 *  
 */
function BulletSpawn(xOffset, yOffset, pattern, owner) {
	this.xOffset = xOffset;
	this.yOffset = yOffset;
	this.pattern = pattern.bind(this);
	this.owner = owner;
	this.x = this.xOffset + this.owner.x;
	this.y = this.yOffset + this.owner.y;
	this.bulletList = new List();
	this.counter = 0;

	this.update = function(targetList, callback) {

		
		this.x = this.xOffset + this.owner.x;
		this.y = this.yOffset + this.owner.y;
		removeDeadBullets(this.bulletList);
		updateBullets(this.bulletList, [player], callback);
		if(player) {

			this.pattern();
			this.counter++;
		}
	};

}