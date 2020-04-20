var Point = (function () {
    function Point(x, y) {
        var _this = this;
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.add = function (point) {
            return new Point(_this.x + point.x, _this.y + point.y);
        };
        this.x = x;
        this.y = y;
    }
    return Point;
}());
export default Point;
//# sourceMappingURL=point.js.map