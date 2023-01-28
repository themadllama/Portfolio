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
const circle = CreateCircle(1)  // Circle is now made a circle
                                // by the use of return

// Constructor Function 
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Draw a constructor")
    }
}

const another = new Circle(1)

// The difference between these 2 is purely down to background and preference

// Fsctory functions return a copy of the class, Constructor functions create new instances
 