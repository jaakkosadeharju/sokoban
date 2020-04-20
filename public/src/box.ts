import Point from "./point.js";
import Size from "./size.js";

export default class Box {
    color: Function = () => (this.isAtTarget ? "purple" : "blue");
    position: Point;
    size: Size;
    box: boolean = true;
    isAtTarget: boolean;

    constructor(position: Point, size: Size) {
        this.position = position;
        this.size = size;
        this.isAtTarget = false;
    }

    move: Function = (direction: Point) => {
        this.position = this.position.add(direction);
    }

    draw: Function = (ctx: any) => {
        ctx.fillStyle = this.color();
        ctx.fillRect(
            this.position.x * this.size.width,
            this.position.y * this.size.height,
            this.size.width,
            this.size.height);
    }
}