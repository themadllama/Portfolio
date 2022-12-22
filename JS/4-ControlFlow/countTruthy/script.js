const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const output = document.querySelector(".output");
let arrayDisplay = document.querySelector(".arrayDisplay");
let arry = [];
buttons[0].addEventListener("click",()=>{
    let num =  input.value;
    arry.push(num)
    arrayDisplay.innerHTML = arry

})
buttons[1].addEventListener("click", ()=>{
    output.innerHTML = countTruthy(arry);
    arry=[]; 
})

function countTruthy(array){
    let message = `There are ${array.length} truthy values <br>`
    let x = array.length
    for(x=0;x<array.length;x++){
        if(array[x]) message+=(`${array[x]} is a truthy<br>`)
        else message+=(`${array[x]} is a falsy<br>`)
    }

    return(message)
}