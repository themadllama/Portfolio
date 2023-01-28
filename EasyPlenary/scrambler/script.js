let words=[];
document.querySelector(".reset").addEventListener("click",reset)
document.querySelector(".add").addEventListener("click",()=>{
    words.push(document.querySelector("textarea").value)
    document.querySelector("textarea").value = "";
    document.querySelector("textarea").focus();
    
});

document.querySelector(".submit").addEventListener("click",function (){
    let text = scrambler(document.querySelector("textarea").value)
    let sentences = document.querySelector(".myList")
    for(let i = 0;i<words.length;i++){
        para = document.createElement("h3")
        para.innerHTML = scrambler(words[i])
            sentences.appendChild(para)
    }
    switchWindow();

});
function switchWindow(){
    let output = document.querySelector(".output");
    let input = document.querySelector(".input");
    if (output.style.display === "flex"){
        input.style.display = "flex";
        output.style.display = "none";
    }else{
        input.style.display = "none";
        output.style.display = "flex";
    }
}
function reset(){
    let sentences = document.querySelector(".myList")
    switchWindow();
    let allLi = document.querySelectorAll("h3");
    while(sentences.firstElementChild != null){
        sentences.removeChild(sentences.firstElementChild);
    }
    words = []

}
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
    word = word + "<br>____________________________________"
    return(word)
}



