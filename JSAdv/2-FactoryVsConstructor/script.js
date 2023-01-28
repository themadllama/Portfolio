// This is a factory Function

function createCircle(radius){
    return {
        radius, // In ES6, identically named variables 
        //don't need to be defined
        draw:function(){
            console.log("Draw")
        }
    }
}
 // Circle is now made a circle
                                // by the use of return

// Constructor Function 
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Draw a constructor")
    }
}

const another = new createCircle(1)
console.log(another)
const creat = new Circle(5)
console.log(creat)

// The difference between these 2 is purely down to background and preference

// Factory functions return a copy of the class, Constructor functions create new instances
 
// ---------------------- Constructor Property ------------------------------------

/* Every object has a function. We normally use littorlas thoguh
*   i.e.
*   let name = Chris  === let name = new String("Chris")
*/

// ------------------------ Abstraction ------------------------------

/*
*   
*
*
*/

