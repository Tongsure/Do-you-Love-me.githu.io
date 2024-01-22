const Nobtn = document.querySelector("#no");
const ansEl =document.querySelector("#ans");
const Yesbtn = document.querySelector("#yes")
Nobtn.addEventListener("mouseover",function () {
    function getnumber() {
        return Math.floor(Math.random() * 301);
    }
    Nobtn.style.left = getnumber() + "px";   
    
    Nobtn.style.top = getnumber() + "px";  
   
});
Yesbtn.addEventListener('click',function(){
    ansEl.innerText = "Yes i do😘💖"
})