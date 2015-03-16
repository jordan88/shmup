/**
 * functions for making different bullets, manipulating bullet lists
 *
 * kinda stupid but requires bulletSpawn attributes
 */

/**
 * Remove 
 * @param  {[type]} list [description]
 * @return {[type]}      [description]
 */

/**
 * gives angle from x, y on circle
 * @param  {[type]} x [description]
 * @param  {[type]} y [description]
 * @return {[type]}   [description]
 */
function getAngle(x, y) {
	// degenerate cases
	if(y === 0) {

	}
}

/**
 * returns object with normalized coord given by angle in radians
 * @param  {[type]} angle [description]
 * @return {[type]}       [description]
 */
function getNormalized(angle) {
	return {x: Math.cos(angle), y: Math.sin(angle)};
}

function circle() {
	if(this.counter % 100 === 0) {
		var speed = 7;
		var number = 20;
		var x = this.x;
		var y = this.y;
		for(var i = 0; i < number; i++) {
			var vx = speed*Math.cos(i*2*Math.PI/number);
			var vy = speed*Math.sin(i*2*Math.PI/number);

			var dAngle = Math.PI/number;
			var pvx = speed*Math.cos(dAngle + i*2*Math.PI/number);
			var pvy = speed*Math.sin(dAngle + i*2*Math.PI/number);
			var randomness = 10;
			this.bulletList.append(new Orb(random()*randomness + x, random()*randomness + y, vx, vy, -.05,-.05, "blue"));
			this.bulletList.append(new PurpleDot(random()*randomness + x, random()*randomness+ y, pvx, pvy, -.05,-.05))
		}
	}
}

function cherryBlossom() {
	var numBullets = 40;
	var speed = 2;
	var x = this.x;
	var y = this.y;
	var epsilon = .5 + 2*Math.PI/numBullets;
	if(this.counter % 100 === 0) {
		
		for(var i = 0; i < numBullets; i++) {
			var vx = speed*Math.cos(i*2*Math.PI/numBullets);
			var vy = speed*Math.sin(i*2*Math.PI/numBullets);
			this.bulletList.append(new Orb(x, y, vx, vy, 0,0, "red"));
		}
	}
	else if(this.counter % 100 === 25) {
		for(var i = 0; i < numBullets; i++) {
			var vx = speed*Math.cos(epsilon + i*2*Math.PI/numBullets);
			var vy = speed*Math.sin(epsilon + i*2*Math.PI/numBullets);
			this.bulletList.append(new Orb(x, y, vx, vy, 0,0, "purple"));
		}
	}
	else if(this.counter % 100 === 50) {
		for(var i = 0; i < numBullets; i++) {
			var vx = speed*Math.cos(2*epsilon + i*2*Math.PI/numBullets);
			var vy = speed*Math.sin(2*epsilon + i*2*Math.PI/numBullets);
			this.bulletList.append(new Orb(x, y, vx, vy, 0,0, "red"));
		}
	}
	else if(this.counter % 100 === 75) {
		for(var i = 0; i < numBullets; i++) {
			var vx = speed*Math.cos(3*epsilon + i*2*Math.PI/numBullets);
			var vy = speed*Math.sin(3*epsilon + i*2*Math.PI/numBullets);
			this.bulletList.append(new Orb(x, y, vx, vy, 0,0, "purple"));
		}
	}
}

function spread() {
	if(this.counter % 100 === 50) {
		var x = this.x;
		var y = this.y;
		for(var i = 0; i < 50; i++) {
			var vx = 3*Math.cos(i*2*Math.PI/100);
			var vy = 3*Math.sin(i*2*Math.PI/100);

			this.bulletList.append(new Orb(x, y, vx, vy, 0,0, "green"));
		}
	}
}

function shootAtEm() {
	if(this.counter % 50 === 0) {
		var x = this.x;
		var y = this.y;
		var vx = player.x - x;
		var vy = player.y - y;
		var mag = Math.sqrt(vx*vx + vy*vy);
		vx = 10*vx/mag;
		vy = 10*vy/mag;

		this.bulletList.append(new Orb(x, y, vx, vy, 0,0, "green"));
	}
}

function hose() {

	if(this.counter % 16 === 0) {
		var speed = 2;
		var x = this.x;
		var y = this.y;
		var vx = player.x - x;
		var vy = player.y - y;
		var mag = Math.sqrt(vx*vx + vy*vy);
		vx = speed*vx/mag;
		vy = speed*vy/mag;

		this.bulletList.append(new Orb(x, y, vx, vy, 0,0, "red"));
	}
	else if(this.counter % 16 === 8) {
		var speed = 2;
		var x = this.x;
		var y = this.y;
		var vx = player.x - x;
		var vy = player.y - y;
		var mag = Math.sqrt(vx*vx + vy*vy);
		vx = speed*vx/mag;
		vy = speed*vy/mag;

		this.bulletList.append(new PurpleDot(x, y, vx, vy, 0,0));
	}
}

function chain() {
	var count = this.counter % 30;
	 if(count === 0 || count ===  1 || count === 2) {
	 	var x = this.x;
		var y = this.y;
		var vx = player.x - x;
		var vy = player.y - y;
	 	this.bulletList.append(new Orb(x,y,vx,vy, 0,0, "green"));
	}
}

function shotgun() {
	if(this.counter % 200 === 0) {
		var speed = 1;
		var x = this.x;
		var y = this.y;
		var vx = player.x - x;
		var vy = player.y - y;
		var mag = Math.sqrt(vx*vx + vy*vy);
		vx = speed*vx/mag;
		vy = speed*vy/mag;

		var number = 20;
		for(var i = 0; i < number; i++) {
			this.bulletList.append(new PurpleDot(x+Math.random()*60-30, y + Math.random()*100, vx, vy, 0,0));
		}
	}
}

function spinnerFactory(cycle) {
	return function() {
		var counter = this.counter;
		if(this.counter % cycle === 0) {
			var x = this.x;
			var y = this.y;
			var n = 0;

			var vx = 3*Math.cos((counter % 100 + n)*2*Math.PI/100);
			var vy = 3*Math.sin((counter % 100 + n)*2*Math.PI/100);
			this.bulletList.append(new Orb(x,y,vx,vy, 0,0, "blue"));
			n++;
			var vx = 3*Math.cos((counter % 100 + n)*2*Math.PI/100);
			var vy = 3*Math.sin((counter % 100 + n)*2*Math.PI/100);
			this.bulletList.append(new Orb(x,y,vx,vy, 0,0, "blue"));
			n++;
			var vx = 3*Math.cos((counter % 100 + n)*2*Math.PI/100);
			var vy = 3*Math.sin((counter % 100 + n)*2*Math.PI/100);
			this.bulletList.append(new Orb(x,y,vx,vy, 0,0, "blue"));
			n++;
			var vx = 3*Math.cos((counter % 100 + n)*2*Math.PI/100);
			var vy = 3*Math.sin((counter % 100 + n)*2*Math.PI/100);
			this.bulletList.append(new Orb(x,y,vx,vy, 0,0, "blue"));
			n++;
			var vx = 3*Math.cos((counter % 100 + n)*2*Math.PI/100);
			var vy = 3*Math.sin((counter % 100 + n)*2*Math.PI/100);
			this.bulletList.append(new Orb(x,y,vx,vy, 0,0, "blue"));
			n++;
		}
	};

}

function shootDownFactory(option) {
	return function() {
		var r = .5
		if(option) {
			r = option
		}
		if(this.counter %5 === 0) {
			var x = this.x;
			var y = this.y;
			this.bulletList.append(new Orb(x, y, 0, 1.5, r*(random()-.5), .2, "blue"));
		}
	};
}

function rain() {

	if(this.counter % 50 === 0) {
		var x = this.x;
		var y = this.y;

		this.bulletList.append(new MobilePattern(x,y,-3, 0, shootDownFactory(.1), this.bulletList));
		this.bulletList.append(new MobilePattern(x,y,3,0, shootDownFactory(-.1), this.bulletList));
	}
}

function updateBullets(list, targetList, collisionCallback) {
	var node = list.start();

	if(node) {
		while(true) {
			var bullet = node.data;



			// remove dead bullet
			if(isDead(bullet)) {
				bullet.destroy();
				list.remove(node);
			}
			else {

				bullet.update();
				for(var i = 0; i < targetList.length; i++) {
					var target = targetList[i];
					if(target) {
						var lowX = target.x - target.hitbox.width/2;
						var highX = target.x + target.hitbox.width/2;
						var lowY = target.y - target.hitbox.height/2;
						var highY = target.y + target.hitbox.height/2;

						if(!(bullet.x < lowX ||
							bullet.x > highX ||
							bullet.y < lowY ||
							bullet.y > highY)) {
							bullet.destroy();
							list.remove(node);
							collisionCallback(target);
						}
					}
					
				}
				
			}
			if(!list.hasNext(node)) break;
			node = list.next(node);
		}
	}
}

function removeDeadBullets(list) {
	var margin = 8;
	var node = list.start();

	if(node) {
		while(true) {
			var bullet = node.data;
			if(isDead(bullet) || outOfBounds(bullet, 0-8,0-8, canvasWidth+8, canvasHeight+8)) {
				bullet.destroy();
				list.remove(node);
			}
			if(!list.hasNext(node)) break;
			node = list.next(node);
		}
	}
}

function isDead(bullet) {
	return bullet.life <= 0;
}

function outOfBounds(bullet, lowX, lowY, highX, highY) {
	var x = bullet.x;
	var y = bullet.y;
	return (
		x < lowX ||
		y < lowY ||
		x > highX ||
		y > highY
		);
}

function checkCollision(object, list, callback) {
	if(!object.invincible) {
		var lowX = object.x - object.hitbox.width/2;
		var highX = object.x + object.hitbox.width/2;
		var lowY = object.y - object.hitbox.height/2;
		var highY = object.y + object.hitbox.height/2;

		var node = list.start();

		if(node) {
			while(true) {
				var bullet = node.data;

				if(!(bullet.x < lowX ||
					bullet.x > highX ||
					bullet.y < lowY ||
					bullet.y > highY)) {
					bullet.life = 0;
					callback();
				}

				if(!list.hasNext(node)) break;
				node = list.next(node);
			}
		}
	}

}

function random() {
	
	random.seed = random.seed || 1;
    var x = Math.sin(random.seed++) * 10000;
    return x - Math.floor(x);
   
}