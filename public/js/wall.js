var Wall = (function () {
    function Wall(position, size) {
        var _this = this;
        this.color = "grey";
        this.wall = true;
        this.draw = function (ctx) {
            ctx.fillStyle = _this.color;
            ctx.fillRect(_this.position.x * _this.size.width, _this.position.y * _this.size.height, _this.size.width, _this.size.height);
        };
        this.position = position;
        this.size = size;
    }
    return Wall;
}());
export default Wall;
//# sourceMappingURL=wall.js.map