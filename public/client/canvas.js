const stage = new createjs.Stage('cnv');
const man = new Entity('/img/man.png', 100, 40);
stage.addChild(man.image);
stage.update();
$(document).bind('keydown', function (event) {
    "use strict";
    stage.update();
});