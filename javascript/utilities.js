function switchByid(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function btnColorswitchByid(id){
    document.getElementById('btn-donate').classList.remove('bg-color-primary');
    document.getElementById('btn-history').classList.remove('bg-color-primary');

    document.getElementById(id).classList.add('bg-color-primary');
}

function getinputValueByid(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);

    return amountNumber ;
}

function getinnertextValueByid(id){
    const currentinner = document.getElementById(id).innerText;
    const currentinnerNumber = parseFloat(currentinner);

    return currentinnerNumber ;
}

function addition(num1,num2){
    let sum = num1 + num2 ;

    return sum ;
}

function substraction(num3,num4){
    let rest = num3 - num4 ;

    return rest ;
}