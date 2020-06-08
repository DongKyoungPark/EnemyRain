const divHero = document.createElement("div");

const heroInit = bg.appendChild(divHero);
heroInit.setAttribute("class", "hero");
heroInit.setAttribute(
    "style",
    `position:absolute; bottom:0; left:50%; 
    background-image: url(./images/hero.png); width:35px; height:50px;
    background-repeat:no-repeat;`
);

const heroMove = document.querySelector(".hero");
// console.log(heroMove);

keyCodes = { left: 37, right: 39 };
keys = [];

window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

window.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});

setInterval(() => {
    let x = parseInt(heroMove.style.left);
    // console.log(x);

    if (heroMove.style.left < 0 + "%") {
        x = 0;
    } else if (heroMove.style.left > 95 + "%") {
        x = 95;
    }

    if (keys[keyCodes.left]) {
        heroMove.style.backgroundPosition = "-70px 0";
        x -= 1;
    } else if (keys[keyCodes.right]) {
        heroMove.style.backgroundPosition = "-100px 0";
        x += 1;
    } else {
        heroMove.style.backgroundPosition = "0 0";
    }

    heroMove.style.left = x + "%";
}, 20);
