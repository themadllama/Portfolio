document.querySelector(".submit").addEventListener("click",function (){
    console.log("Click")
    let text = scrambler(document.querySelector("textarea").value)
    let input = document.querySelector(".input");
    let output = document.querySelector(".output");
    let sentences = document.querySelector(".myList")

    input.style.display = "none";
    output.style.display = "block";

   let li = document.createElement("li")
   li.innerText = scrambler(text)
   sentences.appendChild(li)
   

});
document.querySelector(".reset").addEventListener("click",()=>{
    let input = document.querySelector(".input");
    let output = document.querySelector(".output");
    input.style.display = "block";
    output.style.display = "none";
})
document.querySelector("textarea")

function scrambler(word){
    let rnd,splitGap;
    word.split(" ").length > 2 ? splitGap = " " : splitGap = "";
    word = word.split(splitGap)
    for(let x =0;x<word.length;x++){
        rnd = Math.floor(Math.random()*word.length);
        tmp = word[x];
        word[x] = word[rnd];
        word[rnd] = tmp;
    }
    word = word.join().replaceAll(",",splitGap).toLowerCase()
    return(word)
}



