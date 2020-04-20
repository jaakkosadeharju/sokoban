var Player = (function () {
    function Player(position, size) {
        var _this = this;
        this.color = "red";
        this.move = function (direction) {
            _this.position = _this.position.add(direction);
        };
        this.draw = function (ctx) {
            ctx.fillStyle = _this.color;
            ctx.fillRect(_this.position.x * _this.size.width, _this.position.y * _this.size.height, _this.size.width, _this.size.height);
        };
        this.position = position;
        this.size = size;
    }
    return Player;
}());
export default Player;
//# sourceMappingURL=player.js.map