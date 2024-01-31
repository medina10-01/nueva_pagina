// añadir y quitar los rejogs

let circularPomodoro = document.getElementById('circularPomodoro');
let circularChronometer = document.getElementById('circularChronometer');
let circularHour = document.getElementById('circularHour');

circularPomodoro.addEventListener('click', function () {

})
circularChronometer.addEventListener('click', function () {

})
circularHour.addEventListener('click', function () {

})








let pomodoro = document.getElementById('boxPomodoro');
let Chronometer = document.getElementById('boxChronometer');
let long = document.getElementById('boxLong');

pomodoro.addEventListener('click', function () {
    if (!pomodoro.classList.contains('select')) {
        pomodoro.classList.add('select')
        Chronometer.classList.remove('select')
        long.classList.remove('select')

        circularChronometer.classList.add('none')
        circularHour.classList.add('none')
        circularPomodoro.classList.remove('none')
    }
})

long.addEventListener('click', function () {
    if (!long.classList.contains('select')) {
        pomodoro.classList.remove('select')
        Chronometer.classList.remove('select')
        long.classList.add('select')

        circularChronometer.classList.add('none')
        circularHour.classList.remove('none')
        circularPomodoro.classList.add('none')
    }
});

Chronometer.addEventListener('click', function () {
    Chronometer.addEventListener('click', function () {
        if (!Chronometer.classList.contains('select')) {
            pomodoro.classList.remove('select')
            Chronometer.classList.add('select')
            long.classList.remove('select')

            circularChronometer.classList.remove('none')
            circularHour.classList.add('none')
            circularPomodoro.classList.add('none')
        }
    });

})





// añadir y quitar las configuraciones

let opConfig = document.getElementById('optionConfig');
let config = document.getElementById('boxConfig');
let exit = document.getElementById('exitConfig');
let boxMessage = document.getElementById('boxMessage');



opConfig.addEventListener('click', function () {
    if (config.classList.contains('none')) {
        config.classList.remove('none')
    }
})

exit.addEventListener('click', function () {
    goBack(config,'none')
})

function goBack(className, listClass) {
    if (!className.classList.contains(listClass)) {
        className.classList.add(listClass)
    }
}