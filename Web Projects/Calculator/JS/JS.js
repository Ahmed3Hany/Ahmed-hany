const resultBox = document.getElementById("resultBox");
const resultBox2 = document.getElementById("resultBox2");
const resultBtn = document.getElementById("result");
const numberBtns = document.querySelectorAll(".btns .numbers button");
const operationBtns = document.querySelectorAll(".btns .op");

let second = false;
numberBtns.forEach(number => {
    number.addEventListener('click', function(){
        if((resultBox.value != '0' && second == false) || resultBox.value.includes('.')){
            resultBox.value += number.innerHTML
        }else{
            resultBox.value = number.innerHTML
            if(second == true){
                second = false
            }
        }
    });
});

let firstNumber = 0;
let secondNumber = 0;
let add = false;
let sub = false;
let multi = false;
let div = false;
let mod = false;
let pow = false;
let sqrt = false;
let getResult = false;
let shift = false;

function switchOp(operation){
    switch (operation.id){
        case "add":
            add = true;
            break;
        case "sub":
            sub = true;
            break;
        case "multi":
            multi = true;
            break;
        case "divide":
            div = true;
            break;
        case "modulus":
            mod = true;
            break;
        case "pow":
            pow = true;
            break;
        case "sqrt":
            resultBox2.value = `${parseFloat(resultBox.value)} =`;
            resultBox.value = Math.sqrt(parseFloat(resultBox.value));
            break;
        case "cbrt":
            resultBox.value = Math.cbrt(parseFloat(resultBox.value));
            break;
        case "sin":
            resultBox2.value = `Sin(${parseFloat(resultBox.value)}) =`;
            resultBox.value = Math.sin(parseFloat(resultBox.value) * (Math.PI / 180));
            break;
        case "cos":
            resultBox2.value = `Cos(${parseFloat(resultBox.value)}) =`;
            resultBox.value = Math.cos(parseFloat(resultBox.value) * (Math.PI / 180));
            break;
        case "tan":
            resultBox2.value = `Tan(${parseFloat(resultBox.value)}) =`;
            resultBox.value = Math.tan(parseFloat(resultBox.value) * (Math.PI / 180));
            break;
        case "asin":
            resultBox2.value = `Sin-1(${parseFloat(resultBox.value)}) =`;
            resultBox.value = Math.asin(parseFloat(resultBox.value)) * 180 / Math.PI;
            break;
        case "acos":
            resultBox2.value = `Cos-1(${parseFloat(resultBox.value)}) =`;
            resultBox.value = Math.acos(parseFloat(resultBox.value)) * 180 / Math.PI;
            break;
        case "atan":
            resultBox2.value = `Tan-1(${parseFloat(resultBox.value)}) =`;
            resultBox.value = Math.atan(parseFloat(resultBox.value)) * 180 / Math.PI;
            break;
    }
}

function allOperations(num1, num2){
    if(add == true){
        resultBox.value = num1 + num2;
        add = false;
    }
    else if(sub == true){
        resultBox.value = num1 - num2;
        sub = false;
    }
    else if(multi == true){
        resultBox.value = num1 * num2;
        multi = false
    }
    else if(div == true){
        if (num2 == 0){
            console.log("Can't divide by zero")
        }
        else{
            resultBox.value = num1 / num2;
            div = false
        }
    }
    else if(mod == true){
        resultBox.value = num1 % num2;
        mod = false
    }
    else if(pow == true){
        resultBox.value = Math.pow(num1, num2);
        pow = false
    }
}

operationBtns.forEach(operation => {
    operation.addEventListener('click', function(){
        if(getResult == true){
            secondNumber = parseFloat(resultBox.value);
            allOperations(firstNumber, secondNumber);
            firstNumber = parseFloat(resultBox.value);
            switchOp(operation);
            second = true;
        }
        else{
            firstNumber = parseFloat(resultBox.value);
            second = true;
            getResult = true;
            switchOp(operation);
        }
    });
});


resultBtn.addEventListener('click', function(){
    if(getResult == true){
        secondNumber = parseFloat(resultBox.value);
        getResult = false;
    }
    allOperations(firstNumber, secondNumber);
    second = true
});



document.getElementById("pi").addEventListener('click', function(){
    resultBox.value = Math.PI;
});

document.getElementById("dot").addEventListener('click', function(){
    if(resultBox.value.includes('.')){
        console.log(".....")
    }else{
        resultBox.value += '.';
    }
});

document.getElementById("clearOne").addEventListener('click', function(){
    if (resultBox.value.length > 1){
        resultBox.value = resultBox.value.slice(0, -1);
    }else if(resultBox.value.length == 1 && resultBox.value != 0){
        resultBox.value  = 0;
    }
});

document.getElementById("negative").addEventListener('click', function(){
    if(resultBox.value != 0){
        if(resultBox.value.includes('-')){
            resultBox.value = Math.abs(parseFloat(resultBox.value))
        }else{
            resultBox.value = '-'+parseFloat(resultBox.value)
        }
    }
});

document.getElementById("shift").addEventListener('click', function(){
    if(shift == false){    
        shift = true;
        document.getElementById('sin').id = 'asin';
        document.getElementById('asin').innerHTML = 'sin-1';
        document.getElementById('cos').id = 'acos';
        document.getElementById('acos').innerHTML = 'cos-1';
        document.getElementById('tan').id = 'atan';
        document.getElementById('atan').innerHTML = 'tan-1';
        document.getElementById('sqrt').id = 'cbrt';
        document.getElementById('cbrt').innerHTML = '3&Sqrt;';
    }else{
        shift = false;
        document.getElementById('asin').id = 'sin';
        document.getElementById('sin').innerHTML = 'sin';
        document.getElementById('acos').id = 'cos';
        document.getElementById('cos').innerHTML = 'cos';
        document.getElementById('atan').id = 'tan';
        document.getElementById('tan').innerHTML = 'tan';
        document.getElementById('cbrt').id = 'sqrt';
        document.getElementById('sqrt').innerHTML = '&Sqrt;';
    }
    

});