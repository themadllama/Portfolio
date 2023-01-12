function experiment(){
    //
    const circle = {
        radius:1,
        draw(){
            console.log("Draw")
        }
    }

    let toReturn = "1st Iteration <br>";
    for (let key in circle)
        toReturn+= `<BR>${circle[key]}`;

    toReturn += "<BR>2nd Iteration <br>";
    for(let key of Object.keys(circle))
        toReturn+= "<BR>",key;

    toReturn += "<BR>3rd Iteration <br>";
    for(let entry of Object.entries(circle))
        toReturn+= "<BR>",entry;

    toReturn += "<BR>Check if class contains a field <br>";
    if('radius' in circle)
        toReturn+= "<BR> Oh yes, oh yes";
    


    return toReturn;
}


document.querySelector(".output").innerHTML = experiment();