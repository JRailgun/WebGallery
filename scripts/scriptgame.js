var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var paimon = new Image();
var bg = new Image();
var pipeup = new Image();
var pipedown = new Image();

paimon.src = "img/paimon.png";
bg.src = "img/bg.png";
pipedown.src = "img/piped.png";
pipeup.src = "img/pipeu.png";

var gap = 130;

document.addEventListener("keydown", moveUp);

function moveUp() {
    yPos -= 40;
}

var pipe = [];
pipe[0] = {
    x: cvs.width,
    y: 0
}

var xPos = 10;
var yPos = 150;
var grav = 1.5;
var score = 0;

function draw() {
    ctx.drawImage(bg, 0, 0);

    for (var i = 0; i < pipe.length; i++)
    {
        ctx.drawImage(pipedown, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeup, pipe[i].x, pipe[i].y + pipedown.height + gap);

        pipe[i].x--;

        if (pipe[i].x == 750) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipedown.height) - pipedown.height
            });
        }

        if (xPos + paimon.width >= pipe[i].x &&
            xPos <= pipe[i].x + pipedown.width &&
            (yPos <= pipe[i].y + pipedown.height ||
                yPos + paimon.height >= pipe[i].y + pipedown.height +
                gap) || yPos + paimon.height >= cvs.height) {
            location.reload();
        }

        if (pipe[i].x == 5) {
            score++;
        }
    }

    ctx.drawImage(paimon, xPos, yPos);

    yPos += grav;

    ctx.fillStyle = 'white';
    ctx.font = "46xp Verdana";
    ctx.fillText("Score: " + score, 10, cvs.height - 20);

    requestAnimationFrame(draw);
}

pipeup.onload = draw;
