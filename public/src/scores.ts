export default class Scores {
    moves: number;
    pushes: number;
    startTime: Date;
    endTime: Date;
    color: string;

    constructor() {
        this.color = "black";
        this.moves = 0;
        this.pushes = 0;
        this.startTime = new Date();
    }

    draw: Function = (ctx: any) => {
        ctx.fillStyle = this.color;

        ctx.font = "20px Arial";
        ctx.fillText(`Moves: ${this.moves}`, 50, 30);
        ctx.fillText(`Pushes: ${this.pushes}`, 50, 55);
        ctx.fillText(`Time: ${this.timeElapsed()} s`, 50, 80);

        if (this.endTime) {
            ctx.font = "50px Arial";
            ctx.fillText(`Success!`, 50, 200);
        }
    }

    finish: Function = () => {this.endTime = new Date()}

    timeElapsed: Function = (): number => Math.floor(((this.endTime || new Date()).getTime() - this.startTime.getTime())/1000);
}