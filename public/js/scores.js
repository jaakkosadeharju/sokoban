var Scores = (function () {
    function Scores() {
        var _this = this;
        this.draw = function (ctx) {
            ctx.fillStyle = _this.color;
            ctx.font = "20px Arial";
            ctx.fillText("Moves: " + _this.moves, 50, 30);
            ctx.fillText("Pushes: " + _this.pushes, 50, 55);
            ctx.fillText("Time: " + _this.timeElapsed() + " s", 50, 80);
            if (_this.endTime) {
                ctx.font = "50px Arial";
                ctx.fillText("Success!", 50, 200);
            }
        };
        this.finish = function () { _this.endTime = new Date(); };
        this.timeElapsed = function () { return Math.floor(((_this.endTime || new Date()).getTime() - _this.startTime.getTime()) / 1000); };
        this.color = "black";
        this.moves = 0;
        this.pushes = 0;
        this.startTime = new Date();
    }
    return Scores;
}());
export default Scores;
//# sourceMappingURL=scores.js.map