let num1 = 0;
let numAdd = '';
let intnum = '';
let operador = '';

let numPrint = document.getElementById('numPrint');
let resPrint = document.getElementById('resPrint');

function updateDisplay(num) {
    resPrint.textContent = num;
}

document.getElementById("btn1").addEventListener("click", () => {
    addNum(1);
    problem(1)
});
document.getElementById("btn2").addEventListener("click", () => {
    addNum(2);
    problem(2)
});
document.getElementById("btn3").addEventListener("click", () => {
    addNum(3);
    problem(3)
});
document.getElementById("btn4").addEventListener("click", () => {
    addNum(4);
    problem(4)
});
document.getElementById("btn5").addEventListener("click", () => {
    addNum(5);
    problem(5)
});
document.getElementById("btn6").addEventListener("click", () => {
    addNum(6);
    problem(6)
});
document.getElementById("btn7").addEventListener("click", () => {
    addNum(7);
    problem(7)
});
document.getElementById("btn8").addEventListener("click", () => {
    addNum(8);
    problem(8)
});
document.getElementById("btn9").addEventListener("click", () => {
    addNum(9);
    problem(9)
});
document.getElementById("btn0").addEventListener("click", () => {
    addNum(0);
    problem(0)
});
document.getElementById("btn-ponit").addEventListener("click", () => {
    addNum('.');
    problem('.')
});





function validar() {
    if (numAdd != '') {
        document.getElementById("btnX").addEventListener("click", () => {
            executeOperation('*');
            problem('*')
           
        });
        document.getElementById("btn+").addEventListener("click", () => {
            executeOperation('+');
            problem('+')

        });
        document.getElementById("btn/").addEventListener("click", () => {
            executeOperation('/');
            problem('/')
           
        });

        document.getElementById("btn=").addEventListener("click", () => {
            executeOperation('=');
        });
        document.getElementById("btn-").addEventListener("click", () => {
                executeOperation('-');
                problem('-')
        });
    }

}



function problem(num) {
    operador = operador + num
    print(operador)
    validar()
}

function addNum(num) {
    numAdd = numAdd + num;
    intnum = intnum + num;
}

function executeOperation(operator) {
    let numInt = parseFloat(intnum);
    if (numInt === '0') {
        numInt = 0
    }
    if (num1 === 0) {
        num1 = numInt;
    } else {
        num1 =  eval(num1 + numAdd);
    }
    numAdd = operator;
    updateDisplay(num1)
}

function print(numToPrint) {
    numPrint.innerHTML = numToPrint;
}


