"use strict";

function mazeSpace(){
	this.north = false;
	this.south = false;
	this.east = false;
	this.west = false;
	

}

mazeSpace.prototype.setWall = function(direction){
	 if (direction === "north"){
	 	this.north = true;
	 }
	 if (direction === "south"){
	 	this.south = true;
	 }
	 if (direction === "east"){
	 	this.east = true;
	 }
	 if (direction ===  "west"){
	 	this.west = true;
	 }
}