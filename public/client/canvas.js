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
// while (man.isCenterOff()) man.initializeCenter();
$(document).bind('keydown', function (event) {
    "use strict";
    man.handleKeyPress(event);
    stage.update();

});
$('#cnv').bind('mousemove', function (event) {
    man.handleDirection(event);
    stage.update();
});
const socket = io();
socket.emit('connection', {"ok": 3});

socket.on('initmap', function (data) {
    data.forEach(function (item) {
        const rock = new Entity('rock.png', item.x, item.y);
        rock._bitmap.rotation = Math.random() * 360;
        stage.addChild(rock.image);
    });
});