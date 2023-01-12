function experiment(){
    //Spread Operator
    const first =[1,2,3];
    const second = [4,5,6];

    let toReturn=`First ${first} and second ${second}`;
    const combo = [...first,...second]
    toReturn+=`<br>const combo = [...first,...second] ${combo}`;
    
    toReturn+=`<br>Concat First+second - `+first.concat(second);

    return toReturn;
}


document.querySelector(".output").innerHTML = experiment();