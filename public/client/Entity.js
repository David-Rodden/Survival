const Entity = class {
    constructor(src, x, y) {
        let image = new Image();
        image.src = '/img/' + src;
        this.bitmap = new createjs.Bitmap(image);
        this.bitmap.x = x;
        this.bitmap.y = y;
        // temp regX & regY for rotation around center of default image
        this.bitmap.regX = 20;
        this.bitmap.regY = 20;
    };

    get image() {
        return this.bitmap;
    }

    get position() {
        return this.bitmap.x + ', ' + this.bitmap.y;
    };

    handleMovement(event) {
        this.bitmap.rotation++;
        if (event.keyCode === 38) this.bitmap.y -= 2;
        if (event.keyCode === 40) this.bitmap.y += 2;
        if (event.keyCode === 37) this.bitmap.x -= 2;
        if (event.keyCode === 39) this.bitmap.x += 2;
    };
};
