/**
 *  what do i want? 
 *  iterate through queue, remove 
 */
function Queue() {
	var stack1 = [];
	var stack2 = [];

	this.enqueue = function(item) {
		stack1.push(item);
	}
	this.dequeue = function(item) {
		if(stack2.length === 0) {
			for(var i = 0; i < stack1.length; i++) {
				stack2.push(stack1.pop());
			}
		}
		if(stack2.length === 0) throw "attempt to dequeue an empty queue";
		return stack2.pop();
	}

	this.peak = function(item) {
		if(stack2.length === 0) {
			for(var i = 0; i < stack1.length; i++) {
				stack2.push(stack1.pop());
			}
		}
		if(stack2.length === 0) throw "attempt to peak into an empty queue";
		return stack2[stack2.length-1];
	}

	this.start = function() {

	}

	this.next = function() {
		
	}

	this.isEmpty = function() {
		return (stack1.length === 0 && stack2.length === 0);
	}

	this.clear = function() {
		stack1 = [];
		stack2 = [];
	}
}