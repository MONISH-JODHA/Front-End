function add(one,two){
    this.one=one
    this.two=two
}
let mj = new add("try","light");

add.prototype.make= function(){
    return this.one+ " "+ this.two
}

console.log(mj.make());