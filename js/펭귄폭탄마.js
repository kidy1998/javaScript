

const pen = document.getElementById("penguin");
let moveX = 50;
let moveY = 50;


document.addEventListener("keydown", function(event) {
   

   switch(event.key) {

        case "ArrowLeft":
            if(moveX>=5){
                moveX -= 2; 
                console.log("좌");
            }else{
                console.log("범위초과")
            }
        break;

        case "ArrowRight":
            if(moveX <= 95){
                moveX += 2; 
                console.log("우");
            }else{
                console.log("범위초과")
            }
        break;

        case "ArrowUp":
            if(moveY >= 5){
                moveY -= 2; 
                console.log("상");

            }else{
                console.log("범위초과")
            }
           
        break;

        case "ArrowDown":

            if(moveY <= 95 ){
                moveY += 2; 
                console.log("하");
            }
            else{
                console.log("범위초과")
            }
        break;

        case "x" :

            // ========터지기 전=====
            const bomb = document.createElement("img");
            

            bomb.setAttribute("src", "../images/펭귄폭탄마/boom.png");
            bomb.style.position = "absolute";
            bomb.style.left = moveX + "%";
            bomb.style.top = moveY + "%";

            // penguin 요소와 같은 위치에 추가 
            pen.parentElement.appendChild(bomb);
            console.log("bomb");

            // ================터진 후=====================//

            setTimeout( function() {
                
                bomb.setAttribute("src","../images/펭귄폭탄마/boom2.png")
               
            }, 2000);
           
        break;

    }

    pen.style.left = moveX + "%";
    pen.style.top = moveY + "%";
});



