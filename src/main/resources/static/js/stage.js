let menu = document.querySelector('.menu');
let xBtn = document.querySelector('.menuXBtn');

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