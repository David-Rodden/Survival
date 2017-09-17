'use strict';
const stage = new createjs.Stage('cnv');
const man = new Entity('man.png', 100, 40);
stage.addChild(man.image);
$(document).ready(function () {
    stage.update();
});
$(document).bind('keydown', function (event) {
    "use strict";
    man.handleMovement(event);
    stage.update();
});
$('#cnv').bind('mousemove', function (event) {
    let angle = Math.atan2(event.offsetY - man.bitmap.y, event.offsetX - man.bitmap.x) * 180 / Math.PI;
    man.bitmap.rotation = angle;
    stage.update();
});
