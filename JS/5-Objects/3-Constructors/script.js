// In this section, we learn about Factory Functions 

function createCircle(radius){
    // This returns a function when called
    return {
        // Here we just return the parameter value
        radius,
        // This is a quicker way to add a circle
        draw(){
            console.log("Draw a circle")
        }
        }
}
//The architecture of the objects is
//all in one place, reducing the need
// for duplication
const c1 = createCircle(3);
const c2 = createCircle(1);
console.log(c1);
console.log(c2)


//Constructor Function in JS
//Constructors should be named using pascal notation

function Circle(radius){
    this.radius = radius
    this.draw = function(){
        console.log("Draw")
    }
}
//Creates a new object
const circle = new Circle(1)

//There is no difference between these 2, use the one you are most used to 