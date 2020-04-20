export const MapElement: any = {
    OPEN: 'Open',
    WALL: 'Wall',
    PLAYER: 'Player',
    BOX: 'Box',
    TARGET: 'Target'
};

export default (() => {
    const O = MapElement.OPEN;
    const W = MapElement.WALL;
    const P = MapElement.PLAYER;
    const B = MapElement.BOX;
    const T = MapElement.TARGET;

    return [
        [O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O],
        [O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O],
        [O,O,O,O,W,W,W,W,W,O,O,O,O,O,O,O,O,O,O,O],
        [O,O,O,O,W,O,O,O,W,O,O,O,O,O,O,O,O,O,O,O],
        [O,O,O,O,W,B,O,O,W,O,O,O,O,O,O,O,O,O,O,O],
        [O,O,W,W,W,O,O,B,W,W,O,O,O,O,O,O,O,O,O,O],
        [O,O,W,O,O,B,O,B,O,W,O,O,O,O,O,O,O,O,O,O],
        [W,W,W,O,W,O,W,W,O,W,O,O,W,W,W,W,W,W,W,O],
        [W,O,O,O,W,O,W,W,O,W,W,W,W,O,O,O,T,T,W,O],
        [W,O,B,O,O,B,O,O,O,O,O,O,O,O,O,O,T,T,W,O],
        [W,W,W,W,W,O,W,W,W,O,W,P,W,W,O,O,T,T,W,O],
        [O,O,O,O,W,O,O,O,O,O,W,W,W,W,W,W,W,W,W,O],
        [O,O,O,O,W,W,W,W,W,W,W,O,O,O,O,O,O,O,O,O],
        [O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O],
        [O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O],
        [O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O],
    ]
})();