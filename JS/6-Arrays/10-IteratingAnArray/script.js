function experiment(){
    //
    const num = [1,2,3]
    let toReturn = "For - "
    // Simple way of iterating
    for(let number of num)
        toReturn+= number+", "
    toReturn+= "<br>ForEach<br> "
    //for each
    num.forEach((number,index)=>toReturn+= index+" is  "+number+"<br> ");



    return toReturn;
}


document.querySelector(".output").innerHTML = experiment();