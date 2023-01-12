function experiment(){
    //
    // This will create a variable with the data now
    let dates = [];
    dates.push(new Date())
    dates.push(new Date('May  11 2018 0900'))
    // Months in JS are 0 based
    dates.push(new Date(2018,4,23))
    

    let output = ""
    for(x=0;x<dates.length;x++){
        output+= `${x+1} - ${dates[x]} <br>`
    }


    return output;
}


document.querySelector(".output").innerHTML = experiment();