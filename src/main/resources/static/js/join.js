document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".joinButton").addEventListener("click", function() {
        let idValue = document.querySelector(".idBox").value;
        let pwValue = document.querySelector(".pwBox").value;
        let pwCheckValue = document.querySelector(".pwcheckBox").value;

        if (validateId(idValue) && validatePassword(pwValue)) {
            if (pwValue === pwCheckValue) {
                console.log(idValue, pwValue);
            } else {
                alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
            }
        } else {
            alert("아이디와 비밀번호를 조건에 맞게 입력하세요");
        }
    });

    function validateId(id) {
        let idPattern = /^[A-Za-z0-9]{3,8}$/; //3글자 이상 8글자 이하
        return idPattern.test(id);
    }

    function validatePassword(password) {
        let passwordPattern = /^[A-Za-z0-9!@#$%^&*()_+{}|:"<>?~,./;'[\]\\-]{4,20}$/; //4글자 이상 20글자 이하
        return passwordPattern.test(password);
    }
});