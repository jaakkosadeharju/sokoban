import Map from "./map.js";
import Size from "./size.js";
import Point from "./point.js";
import Scores from "./scores.js";
var Game = (function () {
    function Game() {
        var _this = this;
        this.width = 1920;
        this.height = 1080;
        this.interval = 20;
        this.clear = function () {
            _this.context.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
        };
        this.draw = function () {
            _this.map.draw(_this.context);
            _this.scores.draw(_this.context);
        };
        this.processFrame = function () {
            if (_this.finished) {
                return;
            }
            var _loop_1 = function (key) {
                if (_this.keysPressed.hasOwnProperty(key)) {
                    if (_this.keysPressed[key]) {
                        var p = _this.map.player;
                        _this.keysPressed[key] = false;
                        var direction_1;
                        switch (key) {
                            case 'ArrowUp':
                                direction_1 = new Point(0, -1);
                                break;
                            case 'ArrowDown':
                                direction_1 = new Point(0, 1);
                                break;
                            case 'ArrowLeft':
                                direction_1 = new Point(-1, 0);
                                break;
                            case 'ArrowRight':
                                direction_1 = new Point(1, 0);
                                break;
                            default:
                                break;
                        }
                        if (direction_1) {
                            var objectsAtTarget = _this.map.findObject(p.position.add(direction_1));
                            var walls = objectsAtTarget
                                .filter(function (o) { return o.wall; });
                            var boxes = objectsAtTarget
                                .filter(function (o) { return o.box; });
                            if (walls.length == 0) {
                                var boxTarget = p.position
                                    .add(direction_1)
                                    .add(direction_1);
                                var objectsAtBoxTarget_1 = _this.map.findObject(boxTarget);
                                if (objectsAtBoxTarget_1.every(function (o) { return !o.wall && !o.box; })) {
                                    boxes.forEach(function (b) {
                                        b.move(direction_1);
                                        _this.scores.pushes += 1;
                                        if (objectsAtBoxTarget_1.some(function (o) { return o.target; })) {
                                            b.isAtTarget = true;
                                        }
                                    });
                                    p.move(direction_1);
                                }
                                else if (objectsAtTarget.every(function (o) { return !o.wall && !o.box; })) {
                                    p.move(direction_1);
                                }
                                _this.scores.moves += 1;
                            }
                        }
                        var finished = _this.map.boxes.every(function (b) {
                            return _this.map
                                .findObject(b.position)
                                .filter(function (o) { return o.target; })
                                .length > 0;
                        });
                        if (finished) {
                            _this.finish();
                        }
                    }
                }
            };
            for (var key in _this.keysPressed) {
                _loop_1(key);
            }
            _this.clear();
            _this.draw();
        };
        this.finish = function () {
            _this.scores.finish();
            _this.finished = true;
        };
        this.canvas = document.getElementById("game-area");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext("2d");
        this.interval = window.setInterval(this.processFrame, this.interval);
        this.map = new Map(new Size(this.width, this.height));
        this.keysPressed = {};
        this.scores = new Scores();
        this.finished = false;
        document.addEventListener('keydown', function (event) {
            _this.keysPressed[event.key] = true;
        });
        document.addEventListener('keyup', function (event) {
            _this.keysPressed[event.key] = false;
        });
    }
    return Game;
}());
export default Game;
var game = new Game();
game.draw();
//# sourceMappingURL=game.js.map