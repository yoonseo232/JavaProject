let menu = document.querySelector('.menu');
let xBtn = document.querySelector('.menuXBtn');
let itemKey = document.querySelector('.itemKey');
var key = document.querySelectorAll('.key');

function clickMenuBtn(){
    menu.style.display = "block";
    menu.style.display = 'flex';
    menu.style.justifyContent = 'center';
    menu.style.alignItems = 'center';
    xBtn.style.display = "block";
    xBtn.style.position = 'absolute';
}

function clickXBtn(){
    menu.style.display = "none";
    xBtn.style.display = "none";
}

function clickHomeBtn(){
    if(confirm("정말 메인화면으로 돌아가겠습니까?(save 확인 필수)")){
        location.href='index.html'
    }
}
function clickKey() {
    var key = document.querySelector('.key');
    if (key) {
        key.style.display = 'none';
    }

    var itemKey = document.querySelectorAll('.itemKey')[0];
    itemKey.style.display = 'block';

    localStorage.setItem('keyState', 'hidden');
}

function clickMemo() {
    document.getElementById('memoPopup').style.display = 'block';

    var memoText = localStorage.getItem('memo');
    if (memoText) {
        document.getElementById('memoText').value = memoText;
    }
}

function saveMemo() {
    var memoText = document.getElementById('memoText').value;
    localStorage.setItem('memo', memoText);

    closeMemoPopup();
}

function closeMemoPopup() {
    document.getElementById('memoPopup').style.display = 'none';
}
var startTime = localStorage.getItem('stopwatchStartTime');

        if (!startTime) {
            startTime = new Date().getTime();
            localStorage.setItem('stopwatchStartTime', startTime);
        }

        setInterval(updateStopwatch, 1000);

        function updateStopwatch() {
            var currentTime = new Date().getTime();
            var elapsedTime = currentTime - startTime;

            var hours = Math.floor(elapsedTime / 3600000);
            var minutes = Math.floor((elapsedTime % 3600000) / 60000);
            var seconds = Math.floor((elapsedTime % 60000) / 1000);

            hours = (hours < 10) ? '0' + hours : hours;
            minutes = (minutes < 10) ? '0' + minutes : minutes;
            seconds = (seconds < 10) ? '0' + seconds : seconds;

            var stopwatchDisplay = hours + ':' + minutes + ':' + seconds;

            document.getElementById('stopwatch').innerText = stopwatchDisplay;
        }