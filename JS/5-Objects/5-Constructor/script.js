function Newcircle(radius){
    let area;
    function calc(){
        return((radius*3.14)*(radius*3.14))
    }
}

function TradCircle(radius){
    this.radius = radius;
    this.draw = function(para){
        return (para + " - Wing Wang");
    }
}

const circle = new TradCircle(15)
// console.log(`1 = ${circle.radius} & ${circle.draw()}`)
const orb = new Array();
for(let x = 0;x<6;x++){
    orb.push(new TradCircle(x*3))
}

for(let y = 0;y<6;y++){
    console.log(orb[y].radius)
    console.log(orb[y].draw(y))
}

