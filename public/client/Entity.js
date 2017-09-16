const Entity = class {
    constructor(src, x, y) {
        let image = new Image();
        image.src = '/img/' + src;
        this.bitmap = new createjs.Bitmap(image);
        this.bitmap.x = x;
        this.bitmap.y = y;
    };

    get image() {
        return this.bitmap;
    }

    get position() {
        return this.bitmap.x + ', ' + this.bitmap.y;
    };

    handleMovement(event) {
        if (event.keyCode === 38) this.bitmap.y -= 2;
        if (event.keyCode === 40) this.bitmap.y += 2;
        if (event.keyCode === 37) this.bitmap.x -= 2;
        if (event.keyCode === 39) this.bitmap.x += 2;
    };
};
