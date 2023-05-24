let tap = document.getElementById("tap");

// Событие, вызываемое при первом нажатии на экран
window.addEventListener('touchstart', function (event) {
    tap.style.background = "purple";
});

// восстаннавливаем цвет после отпускания мышки
window.addEventListener('touchend', function (event) {
    tap.style.background = "#1f4744";
});

// отслеживаем движение кружка
window.addEventListener('touchmove', function (event) {
    tap.style.left = event.targetTouches[0].pageX + "px"; // Берем первый "палец"
    tap.style.top = event.targetTouches[0].pageY + "px";
});