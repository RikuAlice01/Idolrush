var context, controller, Actor, loop;
var ax = 0;
var tc = 0;
var cx = 0;
var kx = 0;
var scWx = 320;
var scrX = 320;
var scrY = 173;
var scrW = 320;
var scrH = 150;

var diffRock = 0;
var clearX;

var jaumpingEn = false;
var enterCh = false;

var HscoreIdolrush = localStorage.getItem("HscoreIdolrush");
if (isNaN(HscoreIdolrush) || HscoreIdolrush === null) HscoreIdolrush = 0;

var score = -1;
var Hiscore = HscoreIdolrush;

var timeToggle = 0;

var speedD = 4; //default 2
var diffSpeed = 0;
var run = 6; //default 8

var time;
var time2delay = 0;
var time2delay2 = 0;
var timech = 0;

var xRock = 320;

var TenSoundTigger = false;

var skill = false;
var Rran = Math.floor(Math.random() * 2);

var version = "0.1.5Beta";

var jumpSound = new sound("./sound/jump.wav");
var endSound = new sound("./sound/end.wav");
var bgSound = new sound("./sound/bgn.wav");
var TenSound = new sound("./sound/ten.wav");

//Get the canvas element by using the getElementById method.
let map = [[150, 150, 150, 150], [170, 150, 470, 150],
[150, 150, 150, 150], [150, 150, 150, 530],
[170, 170, 470, 500]];


var Chartye = 0;
let character = [["01", "02", "03", "04", "05", "06", "07", "08", "09", "39","40","41","48","49","50","51","52","53",""],
["11", "12", "13", "14", "15", "16","42", "43", "44", "45", "46", "47", ""],
["21", "22", "23", "24", "25", "26", "27", ""],
["31", "32", "33", "34", "35", "36", "37", "38", ""],
["54", "55", "56", "57", "58", "59", "60", ""],[""]
];

let name = [["ICE", "FANNY", "HIKARIN", "MARY", "MATILDA", "DOLLYRIN", "HARUPIII", "FERN", "NICO","MIHO","MISAKA", "MUSIC","ICE","FANNY","MATILDA","MUSIC","MISAKA","MIHO",""],
["PINGFAH", "MOBILE", "JENNIE", "RUBY", "SNOWPLOY", "MINMIN","SNOWPLOY", "RUBY", "MINMIN", "MOBILE", "PINGFAH", "JENNIE", ""],
["MAKIRIN", "SORARIN", "MINORIN", "UMERIN", "MERORIN", "AKARIN", "HIKARIN", ""],
["BEW", "NAMFAH", "F", "JANE", "BEAUTY", "BAITOEY", "KITA", "NOON", ""],
["MARY", "NUMFHON", "PORPOR", "MYFERN", "ELFFY", "FAHSAI", "FLUFFYFROY", ""],
,[""]];
let color = "white";

let skyx = ["01", "02", "03", "04", "05"];
let rockx = ["01", "02"];

context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 320;
context.canvas.width = 320;

Actor = {
    height: 80,
    jumping: true,
    width: 80,
    x: 120, // center of the canvas
    x_velocity: 0,
    y: 144,
    y_velocity: 0
};

controller = {
    left: false,
    right: false,
    up: false,
    d: false,
    a: false,
    enter: false,
    w: false,
    s: false,
    down: false,
    // tap: false,
    // alt: false,
    keyListener: function (event) {
        var key_state = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {
            case 37:// left key
                controller.left = key_state;
                break;
            case 38:// up key
                controller.up = key_state;
                break;
            case 39:// right key
                controller.right = key_state;
                break;
            case 40:// right key
                controller.down = key_state;
                break;
            case 65:// a key
                controller.a = key_state;
                break;
            case 68:// d key
                controller.d = key_state;
                break;
            case 13:// enter key
                controller.enter = key_state;
                break;
            case 87:// enter key
                controller.w = key_state;
                break;
            case 83:// enter key
                controller.s = key_state;
                break;
        }
    }
};

function Sky() {
    if (time.getHours() < 18 && !(time.getHours() < 6)) kx = 0;
    else if (time.getHours() == 0) kx = 4;
    else if (time.getHours() == 18) kx = 1;
    else if (time.getHours() == 5) kx = 3;
    else kx = 2;

    var sky = new Image();
    sky.src = './img/sky' + skyx[kx] + '.png';

    var Moon = new Image();
    Moon.src = './img/moon.png';
    var Sun = new Image();
    Sun.src = './img/sun.png';

    var Star = new Image();
    Star.src = './img/Star.png';
    var Cloud = new Image();
    Cloud.src = './img/cloud.png';

    context.drawImage(sky, 0, 0, 320, 320);

    if (kx == 2 || kx == 3 || kx == 4) {
        context.drawImage(Star, 0 - time2delay, 160, 640, 160);
        time2delay += 0.1;
        if (time2delay > 320) time2delay = 0;
    }

    //moon and sun
    if (time.getHours() >= 6 && time.getHours() <= 18) { //day
        switch (time.getHours()) {
            case 6: context.drawImage(Sun, 0, 200, 68, 68);
                break;
            case 7: context.drawImage(Sun, 4, 167, 68, 68);
                break;
            case 8: context.drawImage(Sun, 17, 137, 68, 68);
                break;
            case 9: context.drawImage(Sun, 37, 111, 68, 68);
                break;
            case 10: context.drawImage(Sun, 63, 91, 68, 68);
                break;
            case 11: context.drawImage(Sun, 93, 78, 68, 68);
                break;
            case 12: context.drawImage(Sun, 126, 74, 68, 68);
                break;
            case 13: context.drawImage(Sun, 159, 78, 68, 68);
                break;
            case 14: context.drawImage(Sun, 189, 91, 68, 68);
                break;
            case 15: context.drawImage(Sun, 215, 111, 68, 68);
                break;
            case 16: context.drawImage(Sun, 235, 137, 68, 68);
                break;
            case 17: context.drawImage(Sun, 248, 167, 68, 68);
                break;
            case 18: context.drawImage(Sun, 252, 200, 68, 68);
                break;
        }
    }
    else {
        switch (time.getHours()) {
            case 19: context.drawImage(Moon, 0, 200, 68, 68);
                break;
            case 20: context.drawImage(Moon, 17, 137, 68, 68);
                break;
            case 21: context.drawImage(Moon, 37, 111, 68, 68);
                break;
            case 22: context.drawImage(Moon, 63, 91, 68, 68);
                break;
            case 23: context.drawImage(Moon, 93, 78, 68, 68);
                break;
            case 24: context.drawImage(Moon, 126, 74, 68, 68);
                break;
            case 0: context.drawImage(Moon, 126, 74, 68, 68);
                break;
            case 1: context.drawImage(Moon, 159, 78, 68, 68);
                break;
            case 2: context.drawImage(Moon, 189, 91, 68, 68);
                break;
            case 3: context.drawImage(Moon, 215, 111, 68, 68);
                break;
            case 4: context.drawImage(Moon, 235, 137, 68, 68);
                break;
            case 5: context.drawImage(Moon, 252, 200, 68, 68);
                break;
        }
    }

    time2delay2 = time2delay2 += 0.5;
    context.drawImage(Cloud, 0 - time2delay2, 30, 640, 160);
    if (time2delay2 >= 320) time2delay2 = 0;


}


function ChUnlockCharacterDLCL(c) { //++ D
    Actor.y_velocity -= 5;

    if(c > character[Chartye].length-2) { return 0; }
    return c;
}

function ChUnlockCharacterDLCR(c) { //-- A
    Actor.y_velocity -= 5;

    if(c < 0 ) { return character[Chartye].length-2; }
    return c;

}


function ChClass(c) {
    Actor.y_velocity -= 5;

    if (!enterCh) {

        if (c > 4) return 0;
        return c;
    }
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;

    if (Actor.jumping == false && enterCh) {    //jump
        Actor.y_velocity -= 25;
        ax = 4;
        Actor.jumping = true;
        jumpSound.play();
    }
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0) {
            /* left swipe */
            if (xDiff > 8) {
                cx = ChUnlockCharacterDLCR(--cx);
                timeToggle = 20;
            }
        } else {
            /* right swipe */
            if (xDiff < -8) {
                cx = ChUnlockCharacterDLCL(++cx);
                timeToggle = 20;
            }

        }
    } else {
        if (yDiff > 0) {
            /* up swipe */
            if (!enterCh && yDiff > 9) enterCh = true;
        } else {
            if (skill) {
                speedD = speedD - 10;
                skill = false;
            } else if (!enterCh) {
                Chartye = ChClass(++Chartye);
                cx = 0
            }

            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

loop = function () {


    if (score % 10 == 0 && score > 9 && !TenSoundTigger) {
        TenSound.play();
        TenSoundTigger = true;
    }
    if (score % 10 != 0 && score > 9 && TenSoundTigger) {
        TenSoundTigger = false;
    }

    bgSound.play();
    if (controller.up && Actor.jumping == false) {
        Actor.y_velocity -= 25;
        ax = 4;
        Actor.jumping = true;
        jumpSound.play();
        controller.up = false;
    }

    if (controller.down && timeToggle <= 0) {
        if (skill && cx == 5 && Chartye == 0) {
            speedD = speedD - 8;
            skill = false;
        } else if (!enterCh) {
            Chartye = ChClass(++Chartye);
            cx = 0
        }

        timeToggle = 20;
    }

    if (controller.a && timeToggle <= 0) {
        cx = ChUnlockCharacterDLCR(--cx);
        timeToggle = 20;
    }

    else if (controller.d && timeToggle <= 0) {
        cx = ChUnlockCharacterDLCL(++cx);
        timeToggle = 20;
    }


    if (timeToggle > 0) timeToggle--;

    //   if (controller.left) {
    //     Actor.x_velocity -= 0.4;
    //     if(!Actor.jumping){
    //         if(3==Math.floor(tc/8)) tc=0
    //         ax = 1 + Math.floor(tc/8);
    //         tc++
    //     }
    //   }

    //  if (controller.right) {
    //     Actor.x_velocity += 0.4;
    //     if(!Actor.jumping){
    //         if(3==Math.floor(tc/8)) tc=0
    //         ax = 1 + Math.floor(tc/8);
    //         tc++
    //     }
    //  }

    // Act
    if (!Actor.jumping) {
        if (3 == Math.floor(tc / run)) tc = 0
        ax = 1 + Math.floor(tc / run);
        tc++
    }

    Actor.y_velocity += 1.5;// gravity
    Actor.x += Actor.x_velocity;
    Actor.y += Actor.y_velocity;
    Actor.x_velocity *= 0.9;// friction
    Actor.y_velocity *= 0.9;// friction


    // if Actor is falling below floor line
    if (Actor.y > 280 - 16 - 80) {
        // if(!controller.left&&!controller.right){
        //     //tc = 0;
        //     //ax = 0;
        // } 
        Actor.jumping = false;
        Actor.y = 280 - 16 - 80;
        Actor.y_velocity = 0;

    }

    // if Actor is going off the left of the screen
    //   if (Actor.x < -32) {
    //     Actor.x = 320;
    //   } else if (Actor.x > 320) {// if Actor goes past right boundary
    //     Actor.x = -32;
    //   } 

    speed = speedD + score / 10;

    if (controller.enter) enterCh = true;
    if (enterCh)
        SetImg();
    else
        StartSec();
    context.stroke();
    // call update when the browser is ready to draw again
    window.requestAnimationFrame(loop);
};

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        try {
            this.sound.play();
        }
        catch (err) {
            console.log(err.message);
        }
    };
    this.stop = function () {
        this.sound.pause();
    };
}


function StartSec() {

    time = new Date();

    var imgActor = new Image();
    
    imgActor.src = './img/' + character[Chartye][cx] + '.svg';
    var floor = new Image();
    floor.src = './img/floor.png';
    var tree = new Image();
    tree.src = './img/tree.png';

    var titile = new Image();
    titile.src = './img/name.png';

    var destWidth = map[0][0];
    var destHeight = map[0][1];
    var destX = map[0][2] / 2 - destWidth / 2;
    var destY = map[0][3] / 2 - destHeight / 2;

    Sky();

    //make floor
    if (scrX <= scWx) {
        // reset, start from beginning
        if (scrX < 0) {
            scrX = 320;
        }
        // draw additional image1
        if (scrX > 0) {
            context.drawImage(tree, -scrW + scrX, scrY, scrW, scrH);
            context.drawImage(floor, -scrW + scrX, scrY, scrW, scrH);
        }
    }
    // image is > Canvas Size
    else {
        // reset, start from beginning
        if (scrX < (scWx - 10)) {
            scrX = scWx + scrW;
        }
    }
    context.drawImage(floor, scrX, scrY, scrW, scrH);
    context.drawImage(tree, scrX, scrY, scrW, scrH);
    //make floor

    context.drawImage(imgActor, destX, destY, destWidth, destHeight, Actor.x, Actor.y, Actor.width, Actor.height);
    context.drawImage(titile, 0, 0, 320, 320);

    context.font = "20px Kanit";
    context.strokeText("Score : " + Hiscore, 30, 95);
    context.fillText("Score : " + Hiscore, 30, 95);

    context.font = "9px Kanit";
    context.fillStyle = "Black";
    context.fillText("V" + version, 245, 85);

    context.font = "14px Kanit";
    context.fillStyle = "white";
    context.fillText("Press Enter or Swipe Up to Start", 20, 295);
    context.fillText("Press Up or Tap to jump, A or D to change.", 20, 310);

    context.font = "14px Kanit";
    context.fillStyle = "white";
}

function SetImg() {
    time = new Date();

    var imgActor = new Image();
    imgActor.src = './img/' + character[Chartye][cx] + '.svg';

    var floor = new Image();
    floor.src = './img/floor.png';
    var tree = new Image();
    tree.src = './img/tree.png';

    var Rock = new Image();
    Rock.src = './img/rock' + rockx[Rran] + '.png';

    var destWidth = map[ax][0];
    var destHeight = map[ax][1];
    var destX = map[ax][2] / 2 - destWidth / 2;
    var destY = map[ax][3] / 2 - destHeight / 2;

    Sky();

    //make floor
    scrX = scrX - speed;

    if (scrX <= scWx) {
        // reset, start from beginning
        if (scrX <= 4) {
            diffSpeed = 4 - scrX;
            scrX = 320;
        }
        // draw additional image1
        if (scrX > 0) {
            context.drawImage(floor, -scrW + scrX, scrY, scrW, scrH);
            context.drawImage(tree, -scrW + scrX, scrY, scrW, scrH);
        }
    }
    // image is > Canvas Size
    else {
        // reset, start from beginning
        if (scrX < (scWx)) {
            scrX = scWx + scrW;
        }
    }
    context.drawImage(floor, scrX - diffSpeed, scrY, scrW, scrH);
    context.drawImage(tree, scrX - diffSpeed, scrY, scrW, scrH);

    //make floor

    if (skill) {
        context.font = "14px Kanit";
        context.fillStyle = "white";
        context.fillText("Press Down", 230, 30);
        context.fillText("to slow down", 230, 45);
    }

    context.drawImage(imgActor, destX, destY, destWidth, destHeight, Actor.x, Actor.y, Actor.width, Actor.height);
    context.font = "20px Kanit";
    context.fillStyle = color;
    context.strokeStyle = 'black';

    context.strokeText(name[Chartye][cx], 20, 30);
    context.fillText(name[Chartye][cx], 20, 30);

    if (timech < time.getSeconds()) {
        score++;

        if (score % 100 == 0 && score != 0 && !skill) { skill = true; }
    }
    timech = time.getSeconds();

    if (score == 100000000000000000000) {
        score = 0;
    }

    diffRock = Math.floor((Math.random() * 100) + 50);
    xRock = xRock - speed; //160 attack    -30 <<<  320 >>>  

    context.drawImage(Rock, 0, 0, 4000, 4000, xRock, 250, 320, 320);

    if (xRock < -30) { xRock = 320 + diffRock; }

    if (xRock <= 165 && xRock >= 155 && Actor.jumping == false) { //damage
        endSound.play();


        if (Hiscore < score) Hiscore = score;
        xRock = 320 + diffRock;
        
        localStorage.setItem("HscoreIdolrush", Hiscore);

        score = 0;
        speedD = 3;
        skill = false;
        enterCh = false;
    }

    context.font = "18px Kanit";
    context.fillStyle = "white";
    context.strokeStyle = 'black';
    context.strokeText("Score : " + score, 20, 50);
    context.fillText("Score : " + score, 20, 50);
}

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);

$(document).keydown(function (event) {
    if (event.keyCode == 123 || event.keyCode == 9 || event.keyCode == 18 || event.ctrlKey) {
        return false;
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 67) {
        return false;
    }
});

$(document).on("contextmenu", function (e) {
    e.preventDefault();
});
