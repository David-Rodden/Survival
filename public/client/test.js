var cnv = document.getElementById('cnv');
var ctx = cnv.getContext('2d');
var test = new Image();
test.src = '/img/test.png';
test.onload = function () {
    ctx.drawImage(test, cnv.width / 2 - 50, cnv.height / 2 - 50, 100, 100);
};