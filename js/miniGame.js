
// 캔버스를 초기화한다.
var canvas = document.getElementById("mg");
var ctx = canvas.getContext("2d");
canvas.width  = 1500;
canvas.height = 648;

// 이미지를 초기화하고 로딩한다.
var mgBg = new Image();
mgBg.src = 'media/miniGame/miniGameBg.png';
var mgChar = new Image();
mgChar.src = 'media/miniGame/miniChar.png';
var mgChar2 = new Image();
mgChar2.src = 'media/miniGame/miniChar2.png';
var mgChar3 = new Image();
mgChar3.src = 'media/miniGame/miniChar3.png';
var mgChar4 = new Image();
mgChar4.src = 'media/miniGame/miniChar4.png';
var mgMon = new Image();
mgMon.src = 'media/miniGame/miniMon.png';
var mgGem = new Image();
mgGem.src = 'media/miniGame/gem4.png';
var mgClear = new Image();
mgClear.src = 'media/miniGame/miniClear.png';

// 팝업창이 뜨고 화면을 초기화한다.
window.onload = function(){
    document.getElementById('miniGame').onclick = readyMG; //팝업창이 열리면 ready가 호출된다
}

// 배경 셋팅
var mgBackground = {
    img: mgBg,
    x: 0,
    speed: -10,
    
    moveBgMG: function() {
        this.x += this.speed;
        this.x %= canvas.width;
    },
    
    drawBgMG: function() {
        ctx.drawImage(this.img, this.x, 0);
        ctx.drawImage(this.img, this.x + canvas.width, 0);
    },
};

// 캐릭터 셋팅
var mgCharacter = {
    img: mgChar,
    x: 160,
    y: 162.5,

    setCharMG: function() {
        this.img = mgChar;
        this.y = 162.5;
    },

    drawCharMG: function() {
        ctx.drawImage(this.img, this.x, this.y);
    },    

    overCharMG: function() {
        this.img = mgChar4;
        this.y -= 100;
        setTimeout(() => {
            this.img = mgChar4;
            this.y += 100;
        }, 100);
    },

    jumpCharMG: function() {
        this.img = mgChar2;
        this.y -= 100;
        setTimeout(() => {
            this.img = mgChar;
            this.y += 100;
        }, 500);
    }
};

// 몬스터 셋팅
var mgMonster = {
    img: 0,
    x: mgCharacter.x + 1300,
    y: 473,
    speed: -10,
    
    moveMonMG: function() {
        if(this.x == 0){
            this.x = mgCharacter.x + 1300;
        }else{
            this.x += this.speed;
            this.x %= canvas.width;
        }
    },
    
    drawMonMG: function() {
        this.img = mgMon;
        this.moveMonMG();
        ctx.drawImage(this.img, this.x, this.y);
    },

    checkMonMG: function(){
        if(mgCharacter.x - this.x == -50){
            if(this.y - mgCharacter.y < 400){
                gameOverMG();
            }else{
                cnt++;
            }
        }
    }  
}

// 변수 셋팅
var isPlaying = true;
var isReady = true;
var isClear = false;
var stateMG;
var cnt = 0;

// 4. 게임 종료
// 4-1. 게임오버 상태가 되면, 배경이 멈추고 캐릭터가 바뀌고 문구가 뜬다
// 4-2. 5초 후 다시 시작 전 셋팅 단계로 바뀐다

// 1. 게임 준비
function readyMG(){
    if(!isClear){
        settingMG();
        // 1-3. 입력시(클릭 또는 키보드) 게임이 시작된다.
        canvas.addEventListener("click",startMG);
        document.addEventListener("keydown",startMG);
    
        ctx.font = "50px Black Han Sans";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        mgCharacter.setCharMG();
        stateMG = setInterval(() => {
            // 1-1. 배경과 캐릭터를 출력한다.
            ctx.drawImage(mgBg,0,0);
            ctx.drawImage(mgChar,160,162.5);
            setTimeout(() => {
            // 1-2. "게임을 시작하려면 클릭하거나 키보드를 누르세요"를 출력한다.
                ctx.fillText("click or press keyboard", canvas.width/2, canvas.height-80);
            }, 200);
        }, 400);

    }else{
        ctx.drawImage(mgClear, 0, 0);
    }
}

// 2. 게임 시작
function startMG(){
    //(로딩 화면은 멈춘다)
    clearInterval(stateMG);

    // 2-1. 입력시(클릭 또는 키보드) 발생하는 이벤트가 바뀐다.
    canvas.removeEventListener("click",startMG);
    document.removeEventListener("keydown",startMG);
    canvas.addEventListener("click",actionMG);
    document.addEventListener("keydown",actionMG);

    // 2-2. 게임 중일 때는 배경이 흘러간다.
    if(isPlaying){
        mgBackground.moveBgMG();
        mgBackground.drawBgMG();
        mgCharacter.drawCharMG();
        stateMG = requestAnimationFrame(startMG);
    // 2-3. 게임 오버 상태면 배경이 멈춘다.
    }else{
        cancelAnimationFrame(stateMG);
        mgBackground.drawBgMG();
        mgCharacter.drawCharMG();
    }

    // 3-1. 몬스터가 등장한다
    mgMonster.drawMonMG();
    // 3-2. 몬스터와 부딪히면 게임오버된다.
    mgMonster.checkMonMG();
    // 3-3. 팝업창을 닫아도 게임오버 상태가 된다.    
    
    // 3-4. 몬스터 다섯개를 해결하면 게임이 클리어된다.
    if(cnt == 5){
        gameClearMG();
    }
}

function actionMG(){
    mgCharacter.jumpCharMG();
}

function gameOverMG(){
    isPlaying = false;
    mgCharacter.overCharMG();
    setTimeout(() => {
        readyMG();
    }, 1000);
}

function gameClearMG(){
    isReady = false;
    isPlaying = false;
    mgBackground.drawBgMG();
    mgCharacter.y = 162.5; 
    mgCharacter.img = mgChar3;
    mgCharacter.drawCharMG();
    ctx.drawImage(mgGem, 1000, 150, 300, 300);
    canvas.removeEventListener("click",actionMG);
    document.removeEventListener("keydown",actionMG);
    isClear = true;
}

function settingMG(){
    mgBackground.img = mgBg;
    mgBackground.x = 0;
    mgCharacter.img = mgChar;
    mgCharacter.x = 160;
    mgCharacter.y = 162.5;
    mgMonster.x = mgCharacter.x + 1300;
    mgMonster.y = 473;

    isPlaying = true;
    isReady = true;
    isClear = false;
    cnt = 0;
}