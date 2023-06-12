document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("bt").addEventListener("click",show)
    function show() {
        const k=document.querySelector(".menu");
        k.style.height="100%";
        k.style.background="gray";
        k.style.color="white";
        
    }
    document.getElementById("ll").addEventListener("click",close)
    function close(){
        const k=document.querySelector(".menu");
        k.style.height="0%";

    }
})