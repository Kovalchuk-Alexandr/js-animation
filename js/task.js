let button = document.querySelector(".button")
const countfld = document.querySelector(".counter")
const msgfld = document.querySelector(".msg")

let isMoveBtnFinished = false
let isFinished = false
let counter = 5;
let tale = '';
let x = 10;
let y = 10;

function cnt() {
    counter--;
}

function clickBtn() {
    let interval = setInterval(() => {
    let msg = ''
    if (counter > 0) {
        // console.log("Start in: " + counter-- + " seconds ");
        chkTale(counter);
        msg = `Start in ${counter--} секунд${tale}`
        button.innerHTML = msg;
    } else {
        clearInterval(interval);
        // console.log("Interval canseled");
        msg = `Lunch!!!`
        button.innerHTML = msg;
        button.disabled = "true";
        button.style.cursor = "auto"
        moveBtn();
    }
    }, 1000);
 };

function moveBtn() {
     button.style.transition = 'all 500ms ease';
    let intervalMove = setInterval(() => {
        if (y < 170) {
            x+=1.75
            y++
            button.style.left = x + "px"; 
            button.style.top = y + "px";
        } else {
            clearInterval(intervalMove);
            setTimeout(() => {
                counterField();
                // console.log("Everething Stoped!!!");
            }, 1500);
        }
    }, 50);
}

function counterField() {
    // console.log("Hello in counter Field!!!")
 
    countfld.style.display = 'block';
    counter = 30
    let interval = setInterval(() => {
        if (counter > 0) {
            counter--
            countfld.innerHTML = `waiting for ${counter} sec.`
         } else {
            clearInterval(interval);
            countfld.innerHTML = `Ready!!!`
            // console.log("counterField Interval canseled");
            setTimeout(() => {
                msgField();
                // console.log("Everything Stoped!!!");
            }, 1000);
        }
    }, 100);
}

function msgField() {
    // console.log("Hello in msgField!!!")
 
    msgfld.style.display = 'block';
 
}

function clearBtn() {
    location.reload();
}

function chkTale(num) {
    switch (num) {
        case 5:
            tale = ''
        break;
        case 4:
        case 3:
        case 2:
            tale = 'ы'
            break;
        case 1:
            tale = 'у'
            break;
        default:
            tale = ''
    }
}
