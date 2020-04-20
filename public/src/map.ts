import Box from "./box.js";
import Player from "./player.js";
import Size from "./size.js";
import mapConfig, { MapElement } from "./levels/level-1.js";
import Target from "./target.js";
import Wall from "./wall.js";
import Point from "./point.js";

export default class Map {
    player: Player;
    boxes: Box[];
    walls: Wall[];
    targets: Target[];
    mapSize: Size;
    tileSize: Size;

    constructor(areaSize: Size) {
        // Init map from map config file
        this.mapSize = new Size(mapConfig[0].length, mapConfig.length);

        this.tileSize = new Size(
            areaSize.width / this.mapSize.width,
            areaSize.height / this.mapSize.height
        )

        this.boxes = [];
        this.walls = [];
        this.targets = [];

        for (let y = 0; y < mapConfig.length; y++) {
            for (let x = 0; x < mapConfig[y].length; x++) {
                const mapElement = mapConfig[y][x];
                switch (mapElement) {
                    case MapElement.WALL:
                        this.walls.push(new Wall(
                            new Point(x,y),
                            new Size(this.tileSize.width,
                                this.tileSize.height)));
                        break;
                    case MapElement.BOX:
                        this.boxes.push(new Box(
                            new Point(x,y),
                            new Size(this.tileSize.width,
                                this.tileSize.height)));
                        break;
                    case MapElement.TARGET:
                        this.targets.push(new Target(
                            new Point(x,y),
                            new Size(this.tileSize.width,
                                this.tileSize.height)));
                        break;
                    case MapElement.PLAYER:
                        this.player = new Player(
                            new Point(x,y),
                            new Size(this.tileSize.width,
                                this.tileSize.height));
                        break;
                    default:
                        break;
                }
            }
        }
    }

    findObject: Function = (p: Point) => [
        this.player,
        ...this.boxes,
        ...this.walls,
        ...this.targets
    ].filter(o =>
        o.position.x === p.x
        && o.position.y === p.y)

    draw: Function = (ctx: any) => {
        this.walls.forEach(wall => wall.draw(ctx));
        this.targets.forEach(target => target.draw(ctx));
        this.player.draw(ctx);
        this.boxes.forEach(box => box.draw(ctx));
    };
}