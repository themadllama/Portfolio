const circle = {
    radius:1
}
// All instances of a class are dynamic
// and can be modified or have fields added at anypoint

console.log(circle)
circle.weight = 5;
console.log(circle)

circle.draw = function(){
    console.log(draw);
}
console.log(circle)
// You can also remove variables from functions
delete circle.weight;
console.log(circle) 
