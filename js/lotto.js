
function createNum() {
    const list = document.querySelectorAll(".lottonum");
    console.log(list);

    for(let i=0; i<list.length; i++){

       
            list[i].innerText = Math.ceil(Math.random() * 45) ;
       
        
    }
    
}