const button = document.querySelector("button");
button.addEventListener("click",()=>{
    let num = document.querySelector("input").value;
    let count;
    let stars = "";
    for(y=0;y<=num;y++){
        for(x=0;x<=count;x++)
            stars+="*"
        count = y
        stars+="<br>"
    }
    document.querySelector(".output").innerHTML = stars
})
