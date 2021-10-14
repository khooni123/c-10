var playerMallet;

var goal1 = createSprite(200, 18, 100, 20);
goal1.shapeColor = ("yellow");
var compScore = 0;
var playerScore = 0;
var goal2 = createSprite(200, 382, 100, 20);
goal2.shapeColor = ("yellow");

var gamestate = "serve";

// making court
var boundary1 = createSprite(200, 0, 400, 10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200, 400, 400, 10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0, 200, 10, 400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400, 200, 10, 400);
boundary4.shapeColor = "white";



// creating objects and giving them colours
var striker = createSprite(200, 200, 10, 10);
striker.shapeColor = "white";

var playerMallet = createSprite(200, 50, 50, 10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200, 350, 50, 10);
computerMallet.shapeColor = "black";


function draw() {
    //clear the screen
    background("green");


    //make the player paddle move with the Arrow keys
    paddleMovement();


    //AI for the computer paddle
    //make it move with the striker's y position
    computerMallet.x = striker.x;


    //draw line at the centre
    for (var i = 0; i < 400; i = i + 20) {
        line(i, 200, i + 10, 200);
    }

    //create edge boundaries
    //make the striker bounce with the top and the bottom edges
    createEdgeSprites();

    striker.bounceOff(edges);
    striker.bounceOff(playerMallet);
    striker.bounceOff(computerMallet);

    playerMallet.bounceOff(edges);
    computerMallet.bounceOff(edges);




    //serve the striker when space is pressed
    if (gamestate == "serve") {
        text(18);
        fill("maroon");
        text("press space to strike", 120, 180);
    }

    if (keyDown("space")) {
        serve();
        gamestate = "play";
    }
    if (gamestate == "play") {
        textSize(18);
        fill("maroon");
        text(compScore, 25, 225);
        text(playerScore, 25, 185);
    }

    drawSprites();
}





function serve() {
    striker.velocityX = 10;
    striker.velocityY = 5;
}
function paddleMovement() {
    if (keyDown("left")) {
        playerMallet.x = playerMallet.x - 10;

    }

    if (keyDown("right")) {
        playerMallet.x = playerMallet.x + 10;

    }

    if (keyDown("up")) {
        if (playerMallet.y > 25) {
            playerMallet.y = playerMallet.y - 10;
        }
    }

    if (keyDown("down")) {
        if (playerMallet.y < 120) {
            playerMallet.y = playerMallet.y + 10;
        }
    }
    if (striker.isTouching(goal1)) {
        compScore = compScore + 1;
    }
    if (striker.isTouching(goal2)) {
        playScore = playScore + 1;
    }
    if (playerScore == 5 || compScore == 5) {
        fill("maroon");
        textSize(18);
        text("game over", 170, 160);
    }
}