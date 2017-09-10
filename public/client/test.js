var stage = new createjs.Stage('cnv');
var circle = new createjs.Shape();
circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
circle.x = 100;
circle.y = 100;
circle.on('pressmove', function (event) {
    circle.x = event.stageX;
    circle.y = event.stageY;
    console.log(circle.x);
    stage.update();
});
stage.addChild(circle);
stage.update();