
// 기본함수
function clickCount(btn){ //함수선언
    btn.innerText = Number(btn.innerText) + 1;
}

document.addEventListener("click", function(){
    console.log("익명함수");
})

//즉시실행 함수
(function(){

    console.log("즉시 실행");

}) ();