// JavaScript Document
var germinateState = 0;
var water = 0;
var mineral = 0;
var sugar = 0;
var rootNum = 0;
var stemNum = 0;
var leafNum = 0;
var turnNum = 0;
var rootCost = {water:5, mineral:5, sugar:5};
var stemCost = {water:5, mineral:5, sugar:5};
var leafCost = {water:5, mineral:5, sugar:5};
var rootUse = {water:3, mineral:3, sugar:-2};
var stemUse = {water:-1, mineral:0, sugar:-1};
var leafUse = {water:-1, mineral:-1, sugar:4};
var waterChange = rootNum*rootUse.water + stemNum*stemUse.water + leafNum*leafUse.water;
var mineralChange = rootNum*rootUse.mineral + stemNum*stemUse.mineral + leafNum*leafUse.mineral;
var sugarChange = rootNum*rootUse.sugar + stemNum*stemUse.sugar + leafNum*leafUse.sugar;
document.getElementById('turnNum').innerHTML = turnNum;
update();

function germinate(){
	if(germinateState == 0){
		leafNum++;
		stemNum++;
		rootNum++;
		germinateState++;
		update();
	}else if(germinateState == 1){
		document.getElementById('message').innerHTML = "you lost";
		germinateState++;
	}else{
		document.getElementById('message').innerHTML = "you lost. again.";
		germinateState++;
	};
	
};


function growLeaf(){
	if(water >= leafCost.water && mineral >= leafCost.mineral && sugar >= leafCost.sugar){
		water -= leafCost.water;
		mineral -= leafCost.mineral;
		sugar -= leafCost.sugar;
		leafNum++;
	}else{
		message = "you don't have enough to buy this"
	};
	update();
};

function growStem(){
	if(water >= stemCost.water && mineral >= stemCost.mineral && sugar >= stemCost.sugar){
		water -= stemCost.water;
		mineral -= stemCost.mineral;
		sugar -= stemCost.sugar;
		stemNum++;
	}else{
		message = "you don't have enough to buy this"	
	};
	update();
};

function growRoot(){
	if(water >= rootCost.water && mineral >= rootCost.mineral && sugar >= rootCost.sugar){
		water -= rootCost.water;
		mineral -= rootCost.mineral;
		sugar -= rootCost.sugar;
		rootNum++;
	}else{
		message = "you don't have enough to buy this"
	};
	update();	
};

function nextTurn(){
	water += waterChange;
	mineral += mineralChange;
	sugar += sugarChange;
	turnNum++
	update();
	document.getElementById('turnNum').innerHTML = turnNum;
};

function update(){
	document.getElementById('water').innerHTML = water;
	document.getElementById('sugar').innerHTML = sugar;
	document.getElementById('mineral').innerHTML = mineral;
	document.getElementById('leafNum').innerHTML = leafNum;
	document.getElementById('stemNum').innerHTML = stemNum;
	document.getElementById('rootNum').innerHTML = rootNum;
	waterChange = rootNum*rootUse.water + stemNum*stemUse.water + leafNum*leafUse.water;
	mineralChange = rootNum*rootUse.mineral + stemNum*stemUse.mineral + leafNum*leafUse.mineral;
	sugarChange = rootNum*rootUse.sugar + stemNum*stemUse.sugar + leafNum*leafUse.sugar;
	document.getElementById('waterChange').innerHTML = waterChange;
	document.getElementById('sugarChange').innerHTML = sugarChange;
	document.getElementById('mineralChange').innerHTML = mineralChange;
};
