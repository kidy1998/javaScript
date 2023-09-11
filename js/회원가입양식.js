document.getElementById("inputId").addEventListener("change",function(){

    const regExp = /^[a-zA-Z0-9-_]{6,14}$/;
                   //  /^[a-z][\w-_]{5,13}$/;  -> 소문자시작(1) + 나머지(5~13)


    if(this.value.length == 0) {
        this.value = "";
        return;
    }

    if(regExp.test(this.value) ) {  //유효하면 true
       this.style.backgroundColor = "springgreen";

     }else {
        this.style.backgroundColor = "red";
        this.style.color = "white";
     }

});




document.getElementById("inputPwConfirm").addEventListener("keyup",function(){

    const pw = document.getElementById("inputPw");
    const result = document.getElementById("pwMessage");

    if(this.value.length != 0){

        if(pw.value.length == 0) {

            alert("비밀번호를 입력하세요");
            document.getElementById("inputPw").focus();
            this.value = "";

        }else if(this.value == pw.value) {
            result.innerText = "비밀번호 일치";
            result.style.color = "green";

        }else {
            result.innerText = "비밀번호 불일치";
            result.style.color = "red";
        }
    }

});


document.getElementById("inputName").addEventListener("change",function(){

    const result = document.getElementById("nameMessage");
    const regExp = /^[가-힣]{2,5}$/;  //테스트 기준
    // this.vaule : 테스트 받는 값

    if(regExp.test(this.value)) { //조건에 일치

        result.innerText = "정상입력";
        result.style.color = "green";
    }else {
        result.innerText = "한글만 입력하세요";
        result.style.color = "red";
    }
});



function validate(){

    const genderCheck = document.getElementsByName("gender");
    const inputTel = document.getElementById("inputTel");
    console.log(inputTel.value)

    var gender = true;
    const regExp =  /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;

    for(let i=0; i<genderCheck.length; i++){
       if(genderCheck[i].checked){
        gender = false;
        break;
       } 
    }

    if(!regExp.test(inputTel.value)){
        alert("전화번호 형식이 올바르지 않습니다");
        return false;

    }else if(gender){

        alert("성별을 선택해주세요");
        return false;

    }else{
        return true;
    }
    
}

