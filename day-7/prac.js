// function add(one,two){
//     this.one=one
//     this.two=two
// }
// let mj = new add("try","light");

// add.prototype.make= function(){
//     return this.one+ " "+ this.two
// }

// console.log(mj.make());

let monish ={
    class:'fourth',
    surname:"Jodha",
    printname: function(){
        console.log( this.class)
    }
}

function mj(x,y){
    
        console.log(this.surname + this.printname())
        console.log(x+y);
        console.log(this.surname,x)
    }


// let jodha=mj.bind(monish,1,2)
// console.log(jodha());

// let jodha1=mj.call(monish,1,1);

// let jodha2=mj.apply(monish,[5,5]);

function sum(){
    let total=0;
    for(let i=0;i<arguments.length;i++){
        
       total+=arguments[i]
        
    }return total;
}
console.log(sum(1,2,3,4,5,5))

