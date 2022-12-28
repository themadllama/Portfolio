const button = document.querySelector("button");

button.addEventListener("click",()=>{
    const userInput = document.querySelector("#userInput").value;
    const output = document.querySelector(".output");
    output.innerHTML = " ";
    
    for(x=0;x<=userInput;x++){
    const message = x%2===0 ? "Even" : "Odd";
    output.innerHTML += `${x} - ${message} <br>`;
}
})


    // Below is original, works and is efficient, but second 
    // solution is simpler for human to read

    // x%2===0 ? output.innerHTML += `${x} is even<br>` : output.innerHTML += `${x} is odd<br>`