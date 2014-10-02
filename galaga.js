var stage;
var playership;
var KY_RT;
var KY_LT;
var background;
function init() {
	stage = new createjs.Stage("screen");
	createjs.Ticker.addEventListener("tick", handleTick);
	window.addEventListener('keydown',handleKeyDown);
	window.addEventListener('keyup',handleKeyUp)
	start();
}
function start() {
	playership = new createjs.Bitmap("galagaship.png");
	playership.x = 250;
	playership.y = 590;
	playership.scaleX = .5
	playership.scaleY = .5
	playership.regX = 50
	playership.regY = 105
	background = new createjs.Shape();
	background.graphics.beginFill("black").drawRect(0, 0, 500, 600);
	stage.addChild(background);
	stage.addChild(playership);
	stage.update();
}
function handleTick() {
	if(KY_RT) {
		playership.x += 5;
	} else if (KY_LT) {
		playership.x -= 5;
	}
	stage.update();
}
function handleClick() {
	playership.x += 10;
}
function handleKeyDown(e) {		
	switch (e.keyCode) {
		case 39:
			KY_RT = true
			break;
		case 37:
			KY_LT = true
			break;
		default:
			break;
	}
}
function handleKeyUp(e) {
	switch (e.keyCode) {
		case 39:
			KY_RT = false
			break;
		case 37:
			KY_LT = false
			break;
		default:
			break;
	}
}
function check(e) {
	alert(e.keyCode)
}