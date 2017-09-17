'use strict';
const stage = new createjs.Stage('cnv');
const man = new Entity('green_player.png', 100, 40);
createjs.Ticker.on('tick', function (event) {
    man.handleMovement(event);
});
stage.addChild(man.image);
$(document).ready(function () {
    stage.update();
});
$(document).bind('keydown', function (event) {
    "use strict";
    man.handleKeyPress(event);
    stage.update();
});
$('#cnv').bind('mousemove', function (event) {
    man.handleDirection(event);
    stage.update();
});
