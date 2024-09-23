

document.getElementById('btn-donate').addEventListener('click', function(){
    switchByid('donation-section');
    btnColorswitchByid('btn-donate');
})

document.getElementById('btn-history').addEventListener('click', function(){
    switchByid('history-section');
    btnColorswitchByid('btn-history');
})

document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href = '/blog.html';
} )


document.getElementById('donate-N').addEventListener('click', function(event){
    event.preventDefault();
    const donation = getinputValueByid('input-N');
    const currentDonation = getinnertextValueByid('currnt-N');
    const currentBalance = getinnertextValueByid('currnet-coin');

    if(isNaN(donation)){
        alert('Faild to Donate please enter correct amount');
        return;
    }

    if (donation > currentBalance) {
        alert('You do not have enough coin to Donate');
        return; 
    }

    if(donation < 0){
        alert('Faild to Donate please enter correct amount');
        return;
    }

    const newbalance = substraction(currentBalance,donation);
    const newdonation = addition(currentDonation,donation);


    document.getElementById('currnt-N').innerText = newdonation;
    
    document.getElementById('currnet-coin').innerText = newbalance;

    my_modal_11.showModal();
    const date = new Date().toString();

    const div = document.createElement('div');
    div.classList.add('border','rounded','mb-2');
    div.innerHTML = `
    <h4 class="text-xl font-bold my-2 ml-10">${donation} Taka is Donated for Flood at Noakhali, Bangladesh </h4>
    <p class="text-lg font-bold my-2 ml-10">${date}</p>

    `
    document.getElementById('history-container').appendChild(div);
})
document.getElementById('donate-F').addEventListener('click', function(event){
    event.preventDefault();
    const donation = getinputValueByid('input-F');
    const currentDonation = getinnertextValueByid('current-F');
    const currentBalance = getinnertextValueByid('currnet-coin');

    if(isNaN(donation)){
        alert('Faild to Donate please enter correct amount');
        return;
    }

    if (donation > currentBalance) {
        alert('You do not have enough coin to Donate');
        return; 
    }

    if(donation < 0){
        alert('Faild to Donate please enter correct amount');
        return;
    }

    const newbalance = substraction(currentBalance,donation);
    const newdonation = addition(currentDonation,donation);
    

    document.getElementById('current-F').innerText = newdonation;
    
    document.getElementById('currnet-coin').innerText = newbalance;

    my_modal_12.showModal();
    const date = new Date().toString();

    const div = document.createElement('div');
    div.classList.add('border','rounded','mb-2');
    div.innerHTML = `
    <h4 class="text-xl font-bold my-2 ml-10">${donation} Taka is Donated for Flood Relief in Feni,Bangladesh </h4>
    <p class="text-lg font-bold my-2 ml-10">${date}</p>

    `
    document.getElementById('history-container').appendChild(div);
})
document.getElementById('donate-Q').addEventListener('click', function(event){
    event.preventDefault();
    const donation = getinputValueByid('input-Q');
    const currentDonation = getinnertextValueByid('current-Q');
    const currentBalance = getinnertextValueByid('currnet-coin');

    if(isNaN(donation)){
        alert('Faild to Donate please enter correct amount');
        return;
    }


    if (donation > currentBalance) {
        alert('You do not have enough coin to Donate');
        return; 
    }

    if(donation < 0){
        alert('Faild to Donate please enter correct amount');
        return;
    }

    const newbalance = substraction(currentBalance,donation);
    const newdonation = addition(currentDonation,donation);


    document.getElementById('current-Q').innerText = newdonation;
    
    document.getElementById('currnet-coin').innerText = newbalance;

    my_modal_13.showModal();

    const date = new Date().toString();
    

    const div = document.createElement('div');
    div.classList.add('border','rounded','mb-2');
    div.innerHTML = `
    <h4 class="text-xl font-bold my-2 ml-10">${donation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh </h4>
    <p class="text-lg font-bold my-2 ml-10">${date}</p>

    `
    document.getElementById('history-container').appendChild(div);
})