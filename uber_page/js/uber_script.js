document.addEventListener("DOMContentLoaded", function() {
    const year = new Date().getFullYear();
    const companyName = "Uber Technologies Inc.";
    const copyrightText = `&copy; ${year} ${companyName}`;

    const copyrightContainer = document.getElementById("copyright-text");
    copyrightContainer.innerHTML = copyrightText;
});
let company = document.getElementById('boxCompany');
let boxCompanyMenu = document.getElementById('boxCompanyMenu');
let selecIdioma = document.getElementById('selecIdioma');
let miIdioma= document.getElementById('miIdioma');
let selectProd = document.getElementById('selectProd');
let munuProducts = document.getElementById('munuProducts');
let inSesion = document.getElementById('inSesion');
let btnInicio = document.getElementById('btnInicio');
let newReg = document.getElementById('newReg');
let boxRegistrate = document.getElementById('boxRegistrate');
let exitSesion = document.getElementById('exitSesion');
let exitInSesion = document.getElementById('exitInSesion');
let exitBoxRegistro = document.getElementById('exitBoxRegistro');


function toggleElementVisibility(elementId) {
    const element = document.getElementById(elementId);
    if (element.classList.contains('none')) {
        element.classList.remove('none');
    } else {
        element.classList.add('none');
    }
}

company.addEventListener('click', function() {
    toggleElementVisibility('boxCompanyMenu');
});


selecIdioma.addEventListener('click', function() {
    toggleElementVisibility('miIdioma');

});
exitSesion.addEventListener('click', function() {
    toggleElementVisibility('miIdioma');
});

selectProd.addEventListener('click', function() {
    toggleElementVisibility('munuProducts');
});

btnInicio.addEventListener('click', function() {
    toggleElementVisibility('inSesion');
});
exitInSesion.addEventListener('click', function() {
    toggleElementVisibility('inSesion');
});
newReg.addEventListener('click', function() {
    toggleElementVisibility('boxRegistrate');
});
exitBoxRegistro.addEventListener('click', function() {
    toggleElementVisibility('boxRegistrate');
});


