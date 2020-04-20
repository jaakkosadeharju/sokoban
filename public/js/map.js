var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import Box from "./box.js";
import Player from "./player.js";
import Size from "./size.js";
import mapConfig, { MapElement } from "./levels/level-1.js";
import Target from "./target.js";
import Wall from "./wall.js";
import Point from "./point.js";
var Map = (function () {
    function Map(areaSize) {
        var _this = this;
        this.findObject = function (p) { return __spreadArrays([
            _this.player
        ], _this.boxes, _this.walls, _this.targets).filter(function (o) {
            return o.position.x === p.x
                && o.position.y === p.y;
        }); };
        this.draw = function (ctx) {
            _this.walls.forEach(function (wall) { return wall.draw(ctx); });
            _this.targets.forEach(function (target) { return target.draw(ctx); });
            _this.player.draw(ctx);
            _this.boxes.forEach(function (box) { return box.draw(ctx); });
        };
        this.mapSize = new Size(mapConfig[0].length, mapConfig.length);
        this.tileSize = new Size(areaSize.width / this.mapSize.width, areaSize.height / this.mapSize.height);
        this.boxes = [];
        this.walls = [];
        this.targets = [];
        for (var y = 0; y < mapConfig.length; y++) {
            for (var x = 0; x < mapConfig[y].length; x++) {
                var mapElement = mapConfig[y][x];
                switch (mapElement) {
                    case MapElement.WALL:
                        this.walls.push(new Wall(new Point(x, y), new Size(this.tileSize.width, this.tileSize.height)));
                        break;
                    case MapElement.BOX:
                        this.boxes.push(new Box(new Point(x, y), new Size(this.tileSize.width, this.tileSize.height)));
                        break;
                    case MapElement.TARGET:
                        this.targets.push(new Target(new Point(x, y), new Size(this.tileSize.width, this.tileSize.height)));
                        break;
                    case MapElement.PLAYER:
                        this.player = new Player(new Point(x, y), new Size(this.tileSize.width, this.tileSize.height));
                        break;
                    default:
                        break;
                }
            }
        }
    }
    return Map;
}());
export default Map;
//# sourceMappingURL=map.js.map