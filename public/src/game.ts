import Map from "./map.js";
import Size from "./size.js";
import Point from "./point.js";
import Wall from "./wall.js";
import Box from "./box.js";
import Scores from "./scores.js";

export default class Game {
    width: number = 1920;
    height: number = 1080;
    canvas: any;
    context: any;
    interval: number = 20;
    map: Map;
    keysPressed: any;
    scores: Scores;
    finished: boolean;

    constructor() {
        this.canvas = document.getElementById("game-area");
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext("2d");
        this.interval = window.setInterval(this.processFrame, this.interval);
        this.map = new Map(new Size(this.width, this.height));
        this.keysPressed = {};
        this.scores = new Scores();
        this.finished = false;

        document.addEventListener('keydown', (event: KeyboardEvent) => {
            this.keysPressed[event.key] = true;
        });
        document.addEventListener('keyup', (event: KeyboardEvent) => {
            this.keysPressed[event.key] = false;
        });
    }

    clear: Function = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw: Function = () => {
        this.map.draw(this.context);
        this.scores.draw(this.context);
    }

    processFrame: Function = () => {
        if (this.finished) {
            return;
        }

        for (const key in this.keysPressed) {
            if (this.keysPressed.hasOwnProperty(key)) {
                if (this.keysPressed[key]) {
                    let p = this.map.player;

                    this.keysPressed[key] = false;

                    let direction: Point;

                    // move player
                    switch (key) {
                        case 'ArrowUp':
                            direction = new Point(0, -1);
                            break;
                        case 'ArrowDown':
                            direction = new Point(0, 1);
                            break;
                        case 'ArrowLeft':
                            direction = new Point(-1, 0);
                            break;
                        case 'ArrowRight':
                            direction = new Point(1, 0);
                            break;
                        default:
                            break;
                    }

                    if (direction) {
                        let objectsAtTarget = this.map.findObject(p.position.add(direction));
                        let walls: Wall[]= objectsAtTarget
                            .filter((o: any) => o.wall);
                        let boxes: Box[] = objectsAtTarget
                            .filter((o: any) => o.box);

                        if (walls.length == 0) {
                            let boxTarget = p.position
                                .add(direction)
                                .add(direction);
                            let objectsAtBoxTarget = this.map.findObject(boxTarget);
                            
                            if (objectsAtBoxTarget.every((o: any) => !o.wall && !o.box)) {
                                boxes.forEach(b => {
                                    b.move(direction);
                                    this.scores.pushes += 1;

                                    if (objectsAtBoxTarget.some((o: any) => o.target)) {
                                        b.isAtTarget = true;
                                    }
                                })
                                p.move(direction);
                            }
                            else if (objectsAtTarget.every((o: any) => !o.wall && !o.box)) {
                                p.move(direction);
                            }
                            this.scores.moves += 1;
                        }
                    }

                    // check if game finished
                    let finished = this.map.boxes.every(b => 
                        this.map
                            .findObject(b.position)
                            .filter((o: any) => o.target)
                            .length > 0
                    );

                    if (finished) {
                        this.finish();
                    }
                }
            }
        }

        this.clear();
        this.draw();
    }

    finish: Function = () => {
        this.scores.finish();
        this.finished = true;
    }
}

let game = new Game();
game.draw();