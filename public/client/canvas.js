'use strict';
const stage = new createjs.Stage('cnv');
const man = new Entity('green_player.png', 100, 40);

const socket = io();
createjs.Ticker.on('tick', function (event) {
    man.handleMovement(socket, event);
});
stage.addChild(man.image);
$(document).ready(function () {
    stage.update();
});
let myId = 0;
socket.on('connectionSuccess', function (event) {
    socket.emit('configureId', {"id": myId = Math.round(Math.random() * 1000000)})
});
// while (man.isCenterOff()) man.initializeCenter();
$(document).bind('keydown', function (event) {
    "use strict";
    man.handleKeyPress(socket, event);
    stage.update();

});
$('#cnv').bind('mousemove', function (event) {
    man.handleDirection(event);
    stage.update();
});

socket.on('initmap', function (data) {
    data.rocks.forEach(function (item) {
        const rock = new Entity('rock.png', item.x, item.y);
        rock._bitmap.rotation = Math.random() * 360;
        stage.addChild(rock.image);
    });
    data.trees.forEach(function (item) {
        const tree = new Entity('tree.png', item.x, item.y);
        tree._bitmap.rotation = Math.random() * 360;
        stage.addChild(tree.image);
    });
});