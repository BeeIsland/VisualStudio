var currentHeight = Number(document.getElementById("animatedCircle").style.top.slice(0, 3));
var currentLat = Number(document.getElementById("animatedCircle").style.left.slice(0, 3));
document.getElementById("animatedCircle").style = "position: absolute; width: 50px; height: 50px; border-radius: 50%; background-color: darkgoldenrod; Heightition: absolute; left: 225px; top: 100px;";


function beginAnimation() {
    if (currentHeight < 225 && currentLat < 350) {
        var firstQ = setInterval(function () {
            currentHeight = Number(document.getElementById("animatedCircle").style.top.slice(0, 3));
            currentLat = Number(document.getElementById("animatedCircle").style.left.slice(0, 3));
            currentHeight += 1;
            currentLat += 1;
            document.getElementById("animatedCircle").style.top = String(currentHeight) + "px";
            document.getElementById("animatedCircle").style.left = String(currentLat) + "px";
            if (currentHeight >= 225 && currentLat >= 350) {
                clearInterval(firstQ);
                secondQuarter();
            }
        }, 5)
    }
}

function secondQuarter() {
    if (currentHeight >= 225 && currentLat <= 350) {
        var secondQ = setInterval(function () {
            currentHeight = Number(document.getElementById("animatedCircle").style.top.slice(0, 3));
            currentLat = Number(document.getElementById("animatedCircle").style.left.slice(0, 3));
            currentHeight += 1;
            currentLat -= 1;
            document.getElementById("animatedCircle").style.top = String(currentHeight) + "px";
            document.getElementById("animatedCircle").style.left = String(currentLat) + "px";
            if (currentHeight >= 350 && currentLat <= 225) {
                clearInterval(secondQ);
                thirdQuarter();
            }
        }, 5)
    }
}

function thirdQuarter() {
    if (currentHeight >= 350 && currentLat <= 225) {
        var thirdQ = setInterval(function () {
            currentHeight = Number(document.getElementById("animatedCircle").style.top.slice(0, 3));
            currentLat = Number(document.getElementById("animatedCircle").style.left.slice(0, 3));
            currentHeight -= 1;
            currentLat -= 1;
            document.getElementById("animatedCircle").style.top = String(currentHeight) + "px";
            document.getElementById("animatedCircle").style.left = String(currentLat) + "px";
            if (currentHeight >= 225 && currentLat <= 100) {
                clearInterval(thirdQ);
                fourthQuarter();
            }
        }, 5)
    }
}

function fourthQuarter() {
    if (currentHeight == 225 && currentLat == 100) {
        var fourthQ= setInterval(function () {
            currentHeight = Number(document.getElementById("animatedCircle").style.top.slice(0, 3));
            currentLat = Number(document.getElementById("animatedCircle").style.left.slice(0, 3));
            currentHeight -= 1;
            currentLat += 1;
            document.getElementById("animatedCircle").style.top = String(currentHeight) + "px";
            document.getElementById("animatedCircle").style.left = String(currentLat) + "px";
            if (currentHeight == 100 && currentLat == 225) {
                clearInterval(fourthQ);
                beginAnimation();
            }
        }, 5)
    }
}
