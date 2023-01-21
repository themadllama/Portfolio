const numbers = [1,2,3,4];
const cat = "George";
try{
countOccurences(numbers);
countOccurences(cat);
}catch(e){
    console.log(e);
}
function countOccurences(ray){
    if(!Array.isArray(ray))
        throw new Error("Not an array");

    for(let x in ray)
        console.log(x);


}