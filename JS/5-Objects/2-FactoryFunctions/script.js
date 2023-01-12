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
