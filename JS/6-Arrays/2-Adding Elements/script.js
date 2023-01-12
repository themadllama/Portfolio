function experiment(){
    //
    const num = [3,4];
    //Push adds to the end of array
    num.push(17)
    //unshift adds at the beginning
    num.unshift(1,2)
    // Splice can add to middle
    num.splice(num.length/2,1,76)


    return num;
}


document.querySelector(".output").innerHTML = experiment();