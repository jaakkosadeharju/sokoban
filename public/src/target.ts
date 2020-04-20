import Point from "./point.js";
import Size from "./size.js";

export default class Target {
    color: string = "green";
    position: Point;
    size: Size;
    target: boolean = true;

    constructor(position: Point, size: Size) {
        this.position = position;
        this.size = size;
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