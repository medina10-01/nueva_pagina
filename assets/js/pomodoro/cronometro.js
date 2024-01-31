let minutes = document.querySelector('.chronometer-mins');
let seconds = document.querySelector('.chronometer-seg');
let chronometer = document.querySelector('.circular-chronometer'); // circular
let btnStop = document.getElementById('btnStop'); // boton para detener
let funInit = document.getElementById('btnGo'); //iniciar 
let btnClear = document.getElementById('btnClear')// para limpiar el conatador
// contadores y declaracion de progreso

let contMinute=0;
let contSecond= 0;
let progres

// inicir el contador



funInit.addEventListener('click', function() {
    if (!funInit.classList.contains('none')) {
        funInit.classList.add('none')
        btnClear.classList.add('none')
        btnStop.classList.remove('none')
    }
    progres= setInterval(() => {
        contSecond++;
        if (contSecond < 10) {
            seconds.textContent=`0${contSecond}`
        }else{
            seconds.textContent=`${contSecond}`
        }
        if (contSecond == 60) {
            contSecond =0 ;
            seconds.textContent=`0${contSecond}`
            contMinute++;
            if (contSecond < 10) {
                minutes.textContent=`0${contMinute}:`
            }else{
                minutes.textContent=`${contMinute}:`
            }
        }

        chronometer.style.background = `conic-gradient(#2a83e8 ${(( contSecond) / 60) * 360}deg, #ededed 0deg)`;


    }, 1000);

    
});

// detener el contador

btnStop.addEventListener('click', function () {
    if (!btnStop.classList.contains('none')) {
        btnStop.classList.add('none')
        funInit.classList.remove('none')
        btnClear.classList.remove('none')
    }
    clearInterval(progres);
})


// limpiar el conatador

btnClear.addEventListener('click', function () {
    btnClear.classList.add('none')

    contSecond = 0;
    contMinute = 0;
    seconds.textContent=`0${contSecond}`
    minutes.textContent=`0${contMinute}:`

    chronometer.style.background = `conic-gradient(#2a83e8 ${(( contSecond) / 60) * 360}deg, #ededed 0deg)`;


})