function experiment(){
    //
    const first =[1,2,3];
    const second = [4,5,6];

    let toReturn=`First ${first} and second ${second}`;
    toReturn+=`<br>Concat First+second - `+first.concat(second);

    return toReturn;
}


document.querySelector(`.output`).innerHTML = experiment();