var Target = (function () {
    function Target(position, size) {
        var _this = this;
        this.color = "green";
        this.target = true;
        this.draw = function (ctx) {
            ctx.fillStyle = _this.color;
            ctx.fillRect(_this.position.x * _this.size.width, _this.position.y * _this.size.height, _this.size.width, _this.size.height);
        };
        this.position = position;
        this.size = size;
    }
    return Target;
}());
export default Target;
//# sourceMappingURL=target.js.map