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