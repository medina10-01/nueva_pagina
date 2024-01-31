let circularProgres = document.querySelector('.circular-hour');
setInterval(() => {
    const tiempo = document.querySelector("#tiempo");
    let date = new Date();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (hora < 10) {
        hora = "0" + hora;
    }
    tiempo.textContent = hora + ":" + minutos + ":" + segundos;

    let barComplet = segundos * 60;
    let color = barComplet;


    circularProgres.style.background = `conic-gradient(#2a83e8 ${(( segundos) / 60) * 360}deg, #ededed 0deg)`;

}, 1000);
