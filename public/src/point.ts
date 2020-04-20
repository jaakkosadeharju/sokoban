export default class Point {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    add: Function = (point: Point) => {
        return new Point(
            this.x + point.x,
            this.y + point.y);
    }
}