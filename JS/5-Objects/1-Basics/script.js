// These are all properties for a circle, they are 
// highly related in real life, but not in JS

let radius = 1;
let x = 1;
let y = 1;

//Objects link variables and groups together

const circle = {
    radius:1,
    location:{x:1,y:1},
    isVisible: true,
    draw: ()=>{
        console.log("Draw a circle")

    }
    }
circle.draw()

// To make multiple function, you would have to produce WET code, which is a bad idea

