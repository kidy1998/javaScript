// 객체 생성1
document.getElementById("btn1").addEventListener("click",function() {

    const div1 = document.getElementById("div1");
    /** 중요 **/
    // 자바스크립트 객체의 key는 무조건 String 타입("key",'key',key 다 String)

    const product = {
        "pName" : "텀블러",
        'brand' : "스타벅스",
        color : ["white","black","silver"],
        price : 15000,

        //기능(메서드)
        mix : function() {
            console.log("음료 혼합");
        },

        infomation : function(){
            //같은 객체 내부의 다른 속성을 호출하고 싶은 경우 
            // 현재 객체를 뜻하는 this를 앞에 붙여야한다
            // -> this 없으면 객체 왜부의 변수를 호출함
            console.log(this.color);
            console.log(this.brand);
        }
    }

    div1.innerHTML += product.pName;
    product.mix();
    product.infomation();

});