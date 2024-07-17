function generatePin(displayID){
    let randomNum = Math.floor(Math.random()*10000).toString();
    let pin = randomNum.padStart(4, '0');
    let displayElement = document.getElementById(displayID);
    displayElement.classList.add('animate');
    setTimeout(() => {
        displayElement.value = pin;
    }, 150);
    setTimeout(() => {
        displayElement.classList.remove('animate');
    }, 450);
}

function digitBtnHandle(value){
    let displayElement = document.getElementById('inputPin');
    if (value == ''){
        displayElement.value = '';
    }
    else{
        if (displayElement.value.length <4){
            displayElement.value += value;
        }
    }     
}

function delBtnHandle(){
    let displayElement = document.getElementById('inputPin');
    let currentValue = displayElement.value;
    displayElement.value = currentValue.slice(0, -1);
}

function submitBtnHandle(){
    let pin = document.getElementById('outputPin').value;
    let inputPin = document.getElementById('inputPin').value;
    if(pin == inputPin){
        document.getElementById('matchNote').style.display='block';
        document.getElementById('notMatchNote').style.display='none';
    }
    else{
        document.getElementById('matchNote').style.display='none';
        document.getElementById('notMatchNote').style.display='block';
    }
}