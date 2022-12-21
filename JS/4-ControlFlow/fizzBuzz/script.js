// Divisible by 3 -> Fizz
// Divisible by 5 -> Buzz
// Divisible by 3 & 5 -> FizzBuzz
// Not divisible by 3 or 5 -> input number
// Not a Number -> "Not a number"

document.querySelector("button").addEventListener("click",()=>{
    document.querySelector(".output").innerHTML = fizzBuzz(document.querySelector("input").value)
})
function fizzBuzz(num){
    console.log(num)
    if(isNaN(num) || num === ""){
        return("Is not a number")
    }else if (num%3 === 0 && num%5 === 0){
        return("FizzBuzz");
    }else if(num%3 === 0 ){
        return("fizz");
    }else if(num%5 === 0){
        return("Buzz");
    }else{
        return(num);
    }

}