const inp = document.querySelector("input");
const bttn = document.querySelector("button");
const display = document.querySelector(".display")
const data = [];

bttn.addEventListener("click",()=>{
    data.push(inp.value);
    display.innerHTML += data;
    console.log(data);
})

