document.addEventListener('DOMContentLoaded', function () {
    var pwInput = document.querySelector('.pw');
    var chkBtn = document.querySelector('.chkBtn');

    chkBtn.addEventListener('click', function () {
        pwInput.value.toLowerCase()
        if (pwInput.value.toLowerCase() === 'daly') {
            console.log('성공!'); 
        } else {
            console.log('실패!'); 
        }
    });
});