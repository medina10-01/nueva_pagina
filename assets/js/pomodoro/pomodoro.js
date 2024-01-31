let progress;
let btnStar = document.getElementById('btnStart');
let Restar = document.getElementById('btnRestar');
let minutesValue = document.querySelector('.progress-minutes');
let circularProgress = document.querySelector('.circular-progress');
let secondsValue = document.querySelector('.progress-seconds');
let minutesStarValue = parseInt(minutesValue.textContent);
let contSeconds= 60;

// intervalo activo/inactivo
let intervalActive = false;

btnStar.addEventListener('click', function () {
    if (!btnStar.classList.contains('none')) {
       
        btnStar.classList.add('none'); 
        Restar.classList.remove('none');
        init(minutesStarValue, contSeconds); 
        
    }
})


Restar.addEventListener('click', function () {
    if (btnStar.classList.contains('none')) {
        btnStar.classList.remove('none');
        Restar.classList.add('none');
        clearInterval(progress);
        location.reload();
    }
});

function init(minutesStarValue, contSeconds) {
    let barComplet = minutesStarValue * 60;
    let color = barComplet;

    intervalActive = true;

    minutesStarValue--;
    if (minutesStarValue < 10) {
        minutesValue.textContent = `0${minutesStarValue}:`
    }else{
        minutesValue.textContent = `${minutesStarValue}:`
    }
    progress = setInterval(() => {
        color--;
        contSeconds--;
        if (contSeconds < 10) {
            secondsValue.textContent = `0${contSeconds}`
        }else{
            secondsValue.textContent = `${contSeconds}`
        }
        
        circularProgress.style.background = `conic-gradient(#2a83e8 ${((barComplet - color) / barComplet) * 360}deg, #ededed 0deg)`;

        if (contSeconds === 0) {
            if ((minutesStarValue == 0)&& (contSeconds == 0)) {
                minutesStarValue++; 
                clearInterval(progress)
            }
            minutesStarValue--;
            if (minutesStarValue < 10) {
                minutesValue.textContent = `0${minutesStarValue}:`
            }else{
                minutesValue.textContent = `${minutesStarValue}:`
            }
            contSeconds = 59;
        }
    }, 1000);
}

let apply = document.getElementById('apply');

apply.addEventListener('click', function () {

    if (intervalActive) {
        boxMessage.classList.remove('none')
    } else {
        let contentPomodoro = document.getElementById('pomodoro').value;
        let intPomodoro = parseInt(contentPomodoro);
        if (!isNaN(intPomodoro)) {
            minutesStarValue = intPomodoro;
            if (intPomodoro < 10) {
                minutesValue.textContent = `0${intPomodoro}:`;
    
            } else {
                minutesValue.textContent = `${intPomodoro}:`;
            }
            console.log(contentPomodoro); 
        } else {
            minutesStarValue = 25;
            minutesValue.textContent = `${minutesStarValue}:`;
            console.log(contentPomodoro)
        }
        goBack(config,'none')
    }
});



let btnOk = document.getElementById('btnOk');

btnOk.addEventListener('click', function () {
    goBack(boxMessage,'none');
    goBack(config,'none');
})

function goBack(className, listClass) {
    if (!className.classList.contains(listClass)) {
        className.classList.add(listClass)
    }
}