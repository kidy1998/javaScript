document.getElementById("add").addEventListener("click",function(){

    const div = document.createElement("div"); //div 추가

    div.classList.add("row"); //div에 row 클래스 추가
    // <div clas="row"></div>

    // ====================================================

    //input 요소생성
    const input = document.createElement("input");

    input.classList.add("in");

    // <input class="in">

    // ====================================================

    //span 요소생성
    const span = document.createElement("span");

    span.classList.add("remove");

    span.innerText = "X";

    // <span class="remove"></span>

    div.append(input);
    div.append(span);
    /*
    <div class="row">
        <input class="in">
        <span class="romove"></span>    
    </div>
    */
   document.getElementById("container").append(div);

    span.addEventListener("click",function(){
        span.parentElement.remove();
    })

})