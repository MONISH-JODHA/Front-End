
// function check(a,b){
//     if(a>b){
//         console.log("a is greater than b ");
//     }
//     else if(a<b){
//         console.log("a is not  greater than b ");
//     }
//     else{
//         console.log("both are equal");

//     }
// }

// check(5,11);

// result=function (a,b){
//     return (a+b);
// }



// console.log(result);
// result=result(2,9);

// console.log(result);



// const dynamicContent = document.getElementById("dynamic-text");
// console.log(dynamicContent)

// const phrases = ["Software Engineer...", "Student...", "Intern..."]
// let pharseIndex = 0;
// let letterIndex = 0;
// const typingSpeed = 150;
// const erasingSpeed = 75

// function printLetters(phrase) {

//     if (letterIndex == phrase.length) {
//         // clear letter which have been typed
//         clearLetters();
//     }
//     else if (letterIndex < phrase.length) {
//         dynamicContent.textContent += phrase.charAt(letterIndex);
//         letterIndex += 1;
//         setTimeout(function () {
//             printLetters(phrase)
//         }, typingSpeed)
//     }
// }

// function clearLetters() {
//     if (letterIndex == -1) {
//         pharseIndex = (pharseIndex + 1) % phrases.length;
//         letterIndex = 0;
//         printLetters(phrases[pharseIndex])
//     }
//     else if (letterIndex > -1) {
//         let updatedPhrase = "";
//         for (let index = 0; index < letterIndex; index++) {
//             updatedPhrase += phrases[pharseIndex].charAt(index);

//         }
//         console.log(updatedPhrase);
//         dynamicContent.textContent = updatedPhrase;
//         letterIndex -= 1;
//         setTimeout(clearLetters, erasingSpeed)
//     }
// }

// printLetters(phrases[pharseIndex])
