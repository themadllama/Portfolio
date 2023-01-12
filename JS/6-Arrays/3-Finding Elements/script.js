function experiment(){
    //

    const num = [1,2,3,1,4]
    //returns index of element in Array
    //if not there, it returns -1
    let toReturn = num
    toReturn += `<br> indexOf a ${num.indexOf('a')}`;
    toReturn += `<br> indexOf 1 ${num.indexOf(1)}`;
    toReturn += `<br> lastIndexOf 1 ${num.lastIndexOf(1)}`;
    toReturn += `<br> 1 exists ${num.includes(1)}`;
    return toReturn;
}


document.querySelector(".output").innerHTML = experiment();