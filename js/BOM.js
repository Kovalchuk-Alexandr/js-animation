console.log(window.innerWidth + " x " + window.innerHeight);
//window.open("https://itproger.com");
//window.open("about:blank", "hello", "width=200, heigth=200");
// window.open("https://itproger.com/rights", "hello", "width=500, heigth=400");

// console.log(navigator.userAgent);
// console.log(navigator.platform);

console.log(location.href);

let counter = 5;
function cnt() {
    counter--;
}

let interval = setInterval(function () {
    if (counter > 0) {
        console.log("Reload in: " + counter-- + " seconds ");
    } else {
        clearInterval(interval);
        console.log("Interval canseled");
    }
}, 1000);

let timeOut = setTimeout(function () {
    let conf = confirm("Confirm reloading: ");    
    if (conf) {
        console.log("Reloaded");
        location.reload();      // Перегружаем страницу
        location.href = "https://itproger.com"; // Меняет рабочий URL
    } else {
        console.log("canseled!!!")
        //location.reload();
    }
}, 9000);

setTimeout(function () {
    //clearTimeout(timeOut);
    clearInterval(interval);
    console.log("Everything Stoped!!!");
}, 7000);

