import Point from "./point.js";
import Size from "./size.js";
import Box from "./box.js";
import Wall from "./wall.js";

export default class Player {
    color: string = "red";
    position: Point;
    size: Size;

    constructor(position: Point, size: Size) {
        this.position = position;
        this.size = size;
    }

    move: Function = (direction: Point) => {
        this.position = this.position.add(direction);
    }

    draw: Function = (ctx: any) => {
        ctx.fillStyle = this.color;
        ctx.fillRect(
            this.position.x * this.size.width,
            this.position.y * this.size.height,
            this.size.width,
            this.size.height);
    }
}