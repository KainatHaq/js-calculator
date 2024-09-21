function calculate(operator){
    let firstNumber = +document.getElementById("firstNum").value;
    let secondNumber = +document.getElementById("secNum").value;
    
    let result;
    
    
    if (operator === '+'){
        result = firstNumber + secondNumber;
    }
    else if (operator === '-'){
        result = firstNumber - secondNumber;
    }
    else if (operator === '*'){
        result = firstNumber * secondNumber;
    }
    else if (operator === '/'){
        result = (firstNumber / secondNumber).toFixed(2);
    }
    else{
        alert("Please Enter the number");
    }
    document.getElementById("result").innerHTML = result;
    }
    function reset(){
        document.getElementById("firstNum").value = "";
        document.getElementById("secNum").value = "";
        document.getElementById("result").innerHTML = "";
    }

