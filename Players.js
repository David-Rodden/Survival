const Player = require('./Player.js');
const Players = class {
    constructor() {
        this._players = [];
    };

    addPlayer(player) {
        if (!this._players.includes(player))
            this._players.push(player);
    };

    removePlayer(player) {
        this._players.splice(this._players.indexOf(player, 1))
    }

    getAllInVicinity(self, radius) {
        this._players.filter(p => p.distanceFrom(self.x, self.y) <= radius);
    }
};
module.exports = Players;