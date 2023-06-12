function Input(){
    let x=document.getElementById("fnf").value;
    let y=document.getElementById("faf").value;
    let m=document.createElement("h1");

    const result = x.codePointAt(0);
    const k= parseInt(result);
    const final= k - 32;
    let text = String.fromCharCode(final);
    var g=x.slice(1,x.length);
    
    const result1 = y.codePointAt(0);
    const k1= parseInt(result1);
    const final1= k1 - 32;
    let text1 = String.fromCharCode(final1);
    var g1=y.slice(1,y.length);

    m.innerHTML="Your name is " +text+g+" "+ text1+g1; 
    document.body.appendChild(m);
   
}

// document.addEventListener("keypress", function(e){
//     console.log(e.key);
//     if(e.key==1){
//         e.preventDefault();
//     }
// })
// document.addEventListener("keyup", function(e){
//     console.log(e.key);
//     if(e.key==1){
//         e.preventDefault();
//     }
// })
// document.addEventListener("keydown", function(e){
//     console.log(e.key);
//     if(e.key==1){
//         e.preventDefault();
//     }
// })
// document.getElementById("fnf").addEventListener("focus",function(e){
//     console.log("focus is on");
// })
// document.getElementById("fnf").addEventListener("blur",function(e){
//     console.log("blur is on");
// })

document.querySelector(".parent").addEventListener("click",function(e){
    console.log("parent is clicked");
},true)
document.querySelector(".child").addEventListener("click",function(e){
    console.log("child is clicked");
    // e.stopPropagation();
},true)
document.querySelector("#subchild").addEventListener("click",function(e){
    console.log("subbbchild is clicked");
    // e.stopPropagation();
},true)
document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("form").addEventListener("submit",function(e){
        e.preventDefault();
        console.log(e.target.faf.value);
    })
})
console.log(document.getElementById("ff4"));
document.getElementById("ff4").addEventListener("input",function(e){
    console.log(document.getElementById("ff4"));
    if(e.target.validity.typeMismatch){
        e.target.setCustomValidity("Please enter the email");
        e.target.reportValidity();
    }else{
        e.target.setCustomValidity("");
    }
})
