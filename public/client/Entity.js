const Entity = class {
    constructor(src, x, y) {
        let image = new Image();
        image.src = '/img/' + src;
        let bitmap = new createjs.Bitmap(image);
        bitmap.x = x;
        bitmap.y = y;
        bitmap.scaleX = bitmap.scaleY = 0.25;
        bitmap.regX = image.width / 2;
        bitmap.regY = image.height / 2;
        this._bitmap = bitmap;
        this._dx = this._dy = 0;
    };

    get image() {
        return this._bitmap;
    }

    get position() {
        return this.bitmap.x + ', ' + this.bitmap.y;
    };

    handleDirection(event) {
        let bitmapX = this._bitmap.x, bitmapY = this._bitmap.y;
        this._bitmap.rotation = Math.atan2(event.offsetY - bitmapY, event.offsetX - bitmapX) * 180 / Math.PI + 90;
    }

    handleKeyPress(event) {
        if (event.keyCode === 38 || (event.keyCode === 40 && this._dy > 0)) this._dy -= 1;
        if (event.keyCode === 40 || (event.keyCode === 38 && this._dy < 0)) this._dy += 1;
        if (event.keyCode === 37 || (event.keyCode === 39 && this._dx > 0)) this._dx -= 1;
        if (event.keyCode === 39 || (event.keyCode === 37 && this._dx < 0)) this._dx += 1;
    };

    handleMovement(event) {
        this._bitmap.x += this._dx;
        this._bitmap.y += this._dy;
        if (!(event.keyCode === 37 || event.keyCode === 39))
            this._dx += this._dx < 0 ? 1 : this._dx > 0 ? -1 : 0;
        if (!(event.keyCode === 38 || event.keyCode === 40)) {
            this._dy += this._dy < 0 ? 1 : this._dy > 0 ? -1 : 0;
        }
    };
};
