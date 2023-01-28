// ------------------------ Abstraction ------------------------------

/*
*   Abstraction === Keep your private parts private
*/


function Circle(radius){
    this.radius = radius;
    let myRad = radius
    console.log("myRad (from internal -" + myRad)
    this.defaultLocation = {x:0,y:0}
    //Lamda notation works fine
    this.draw = ()=>{
        console.log("Draw a constructor")
    }
}

const create = new Circle(5)
// By default, all variables in a constructor class are private

console.log("radius"+create.radius)

// to Hide them, replace this with let
console.log("Myrad -" +create.myRad)

// Calling methods from outside is fine
create.draw();