const para= document.createElement("p");
para.textContent=("this is a test <i>.xbjviudflbvzusidhbvuzdf</i>");
para.innerHTML=("this is a test <i>.xbjviudflbvzusidhbvuzdf</i>");  
para.style.backgroundColor=("pink");

para.setAttribute("id", "p-erid") ;
console.log(para.getAttribute("id"));
document.body.appendChild(para);
para.classList.add("one");
para.classList.add("two");
para.classList.replace("one","three")
para.classList.remove("one","three")

const sp= document.createElement("span");
sp.id="sp-id";
sp.className="der";
sp.textContent="this is spannnnnnn";
sp.style.backgroundColor="blue";
document.body.appendChild(sp);

const pi= document.createElement("p");
pi.id="pi-id";
pi.textContent="rhis is pi";
document.body.appendChild(pi);
pi.style.backgroundColor="black";

console.log(para.getAttribute("class"));


hobby=["code","write","cycle","fjdsgvuysv"];
hobby[1];

const list = document.createElement("ul");
for(i=0;i<hobby.length;i++){
    list.innerHTML+="<li class='der'>"+hobby[i]+"</li>"
   
}
    
document.body.appendChild(list);

console.log(document.getElementById("pi-id").textContent);
console.log(document.getElementsByClassName("der"));
console.log(document.getElementById("one"));
console.log(document.querySelector("#one").textContent);