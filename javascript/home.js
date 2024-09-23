

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

