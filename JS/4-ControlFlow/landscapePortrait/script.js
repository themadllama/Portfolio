function auto(){
    const output = document.querySelector(".output");
    document.querySelector("button").addEventListener("click",()=>{
        calc() ? output.innerHTML = "Landscape" : output.innerHTML = "Portrait";       
    })
}
function calc(){
    const dim = document.querySelectorAll("input");
    return(dim[0].value >= dim[1].value );
}
