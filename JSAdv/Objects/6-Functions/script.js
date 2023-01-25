// Functions are Objects

function circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Draw")
    }
}

const c1 = new circle(4)
const another = new circle(7)

console.log(c1)
console.log(another)