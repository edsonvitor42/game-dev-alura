
const GAME = {
    get context() {
        return GAME.canvas ? GAME.canvas.getContext('2d') : undefined;
    },
    resizeScreen() {
        if (!GAME.canvas)
            return

        GAME.canvas.width = window.innerWidth;
        GAME.canvas.height = window.innerHeight;

        GAME.context.drawImage(
            GAME.imageBackground, 
            0, 
            0,
            GAME.imageBackground.width,
            GAME.imageBackground.height,
            0,
            0,
            GAME.imageBackground.width * (GAME.canvas.width/GAME.imageBackground.width),
            GAME.imageBackground.height * (GAME.canvas.height/GAME.imageBackground.height),
        );
    }
};

function onLoad() {
    GAME.canvas = document.querySelector('canvas');
    GAME.imageBackground = new Image();
    GAME.imageBackground.src = 'assets/imagens/cenario/floresta.png';

    draw();
};

function draw() {
    GAME.resizeScreen();
    requestAnimationFrame(draw);
}