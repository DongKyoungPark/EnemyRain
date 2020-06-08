const enemy = [];
const enemyCount = 10;
// const enemyDiv = document.createElement("div");

for (let i = 0; i < enemyCount; i++) {
    enemy[i] = document.createElement("div");
}
console.log(enemy);

// 적 떨어지는 속도
const RandomSpeed = (min, max) => {
    const getRandom = (min, max) => Math.random() * (max - min) + min;
    let delay = Math.floor(getRandom(min, max));
    // console.log(delay);
    return delay;
};

class Enemy {
    constructor(num) {
        // 랜덤 위치 생성
        let randomPos = Math.floor(Math.random() * 755);

        // 적 생성
        bg.appendChild(enemy[num]);
        enemy[num].setAttribute("class", `emeny${num}`);
        enemy[num].setAttribute(
            "style",
            `position:absolute; left:${randomPos}px; bottom:100%; visibility:hidden;
         background-image: url(./images/enemy.png); width:45px; height:60px; background-repeat:no-repeat;`
        );
        setTimeout(() => {
            enemy[num].style.visibility = "visible";
        }, 300);
        // console.log(enemyDiv);

        // 적 드랍 & 제거
        const EnemyDrop = (num) => {
            let y = parseInt(enemy[num].style.bottom);
            const randomSpeed = RandomSpeed(50, 100);

            const DropAndRemove = setInterval(() => {
                y -= 2;
                enemy[num].style.bottom = `${y}%`;
                // console.log(y);
                if (y < 0) {
                    y = 0;
                    enemy[num].style.backgroundImage =
                        "url(./images/enemy.png)";
                    enemy[num].style.backgroundPosition = "-45px 0";
                    randomPos = Math.floor(Math.random() * 755);
                    // delay = Math.floor(getRandom(30, 100));
                    // console.log(randomPos, randomSpeed);

                    const removeEnemy = setTimeout(() => {
                        enemy[num].remove(enemy[num]);
                    }, 300);
                    // clearTimeout(removeEnemy);
                    clearInterval(DropAndRemove);

                    // GameStart();
                }
            }, randomSpeed);
        };
        EnemyDrop(num);
    }
}

const GameStart = () => {
    const enemy0 = new Enemy(0);
    const enemy1 = new Enemy(1);
    const enemy2 = new Enemy(2);
    const enemy3 = new Enemy(3);
    const enemy4 = new Enemy(4);
    const enemy5 = new Enemy(5);
    const enemy6 = new Enemy(6);
    const enemy7 = new Enemy(7);
    const enemy8 = new Enemy(8);
    const enemy9 = new Enemy(9);    
};
// GameStart();

// setInterval(GameStart,5000);
