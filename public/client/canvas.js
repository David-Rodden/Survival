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
    man.bitmap.rotation += 45;
    stage.update();
});
$('#cnv').bind('mousemove', function (event) {
    stage.update();
});