const enemy = [];
const enemyCount = 30;
// const enemyDiv = document.createElement("div");

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
        const enemyInit = bg.appendChild(enemy[num]);
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
            const randomSpeed = RandomSpeed(30, 80);

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
                }
            }, randomSpeed);
        };
        EnemyDrop(num);
    }
}

// 적을 EnemyCount만큼 생성
for (let i = 0; i < enemyCount; i++) {
    enemy[i] = document.createElement("div");
}
console.log(enemy);

const CreateEnemy = (count) => {
    for (let i = 0; i < count; i++) {
        new Enemy(i);
    }
};

// 게임 시작
const GameStart = () => {
    CreateEnemy(enemyCount);
};
// setInterval(GameStart, 4000);
