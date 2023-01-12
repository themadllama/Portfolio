function experiment(){
    //
    const num = [1,2,3];
    let msg = "AFC,Rock,Franchise,Suck"
    const joined = msg.split(" ");
    console.log(joined);

    let sentence = joined.join(" ")
    console.log(sentence)

    sentence = sentence.replaceAll(","," ")
    console.log(sentence)

    return 0;
}


document.querySelector(".output").innerHTML = experiment();