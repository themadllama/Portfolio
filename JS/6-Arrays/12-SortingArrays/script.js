function experiment(){
    //

    const num = [2,3,1];
    //Sort sorts single arrays
    num.sort()
    console.log(num)

    //Reverse shows values in reverse
    num.reverse()
    console.log(num)

    return 0;
}


document.querySelector(".output").innerHTML = experiment();